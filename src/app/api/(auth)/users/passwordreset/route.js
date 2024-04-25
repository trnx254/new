import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import Redis from "ioredis";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { token, password } = reqBody;

        const user = await User.findOne({
            forgotPasswordToken: token,
            forgotPasswordTokenExpiry: { $gt: Date.now() },
        });
        if (!user) {
            return NextResponse.json(
                { error: "Invalid Token" },
                { status: 400 }
            );
        }

        try {
            const redis = new Redis(process.env.REDIS_URI);
            const email = user.email;
            await redis.del(email);
            console.log(
                `Removed data associated with email: ${email} from Redis`
            );
            await redis.quit(); // Quit the Redis connection
        } catch (error) {
            console.error("Error removing data from Redis:", error);
            return NextResponse.json(
                {
                    error: "Retry after some time. Sorry for the inconvenience.",
                },
                { status: 500 }
            );
        }

        //Hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        user.password = hashedPassword;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({
            message: "Password changed successfully",
            success: true,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
