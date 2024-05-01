import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import Redis from "ioredis";
import { SignJWT } from "jose";

connect();

const createToken = async (payload) => {
    const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
    const alg = "HS256";

    const jwt = await new SignJWT(payload)
        .setProtectedHeader({ alg })
        .setIssuedAt(new Date())
        .setIssuer("urn:dealChecker:issuer")
        .setAudience("urn:user:audience")
        .setExpirationTime("1d")
        .sign(secret);

    return jwt;
};

export async function POST(request) {
    try {
        const redis = new Redis(process.env.REDIS_URI);
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Check if user exists in Redis cache
        const cachedUser = await redis.get(email);

        if (cachedUser) {
            const user = JSON.parse(cachedUser);

            // Validate password
            const validPassword = await bcryptjs.compare(
                password,
                user.password
            );
            if (validPassword) {
                // If password is valid, generate token and return response
                const tokenData = {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                };
                const token = await createToken(tokenData);

                const response = NextResponse.json({
                    message: "Login successful",
                    success: true,
                });
                response.cookies.set("token", token, {
                    httpOnly: true,
                });
                return response;
            }
        }

        //Check if user is exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 400 }
            );
        }

        if (!user.isVerified) {
            return NextResponse.json(
                { message: "User not Verified. Please Verify." },
                { status: 400 }
            );
        }
        //Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json(
                { error: "Invalid Password" },
                { status: 400 }
            );
        }

        // Cache user data in Redis
        await redis.set(email, JSON.stringify(user));
        await redis.expire(email, 432000);

        //Create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };

        //Create token
        const token = await createToken(tokenData);

        //Sent token to user cookies
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });
        response.cookies.set("token", token, {
            httpOnly: true,
        });
        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
