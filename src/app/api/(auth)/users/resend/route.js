import { connect } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const {email} = reqBody;

        //Check if user is exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 400 }
            );
        }

        if (user.isVerified) {
            return NextResponse.json(
                { error: "User already Verified." },
                { status: 400 }
            );
        }

        await sendEmail({ email, emailType: "VERIFY", userId: user._id });
        return NextResponse.json({
            message: "Verification Email Sent successfully",
            success: true,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
