import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }) => {
    try {
        //Create Hashed Token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000,
            });
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000,
            });
        }

        //Create Transporter
        var transport = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Create Mail Options
        const mailOptions = {
            from: {
                name: `Deal Checker${
                    emailType === "VERIFY"
                        ? " - Verify Email"
                        : emailType === "RESET"
                        ? " - Reset Password"
                        : " - Welcome"
                }`,
                address: process.env.EMAIL_USER,
            },
            to: email,
            subject:
                emailType === "VERIFY"
                    ? "Verify Your Email"
                    : emailType === "RESET"
                    ? "Reset Your Password"
                    : "Welcome to Deal Checker",
            html: `
        <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
            <h1 style="text-align: center; color: #007bff;">${
                emailType === "VERIFY"
                    ? "Verify Your Email"
                    : emailType === "RESET"
                    ? "Reset Your Password"
                    : "Welcome to Deal Checker"
            }</h1>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                Hello there,<br><br>
                Welcome aboard! We're thrilled to have you as a member of Deal Checker.
                ${
                    emailType === "WELCOME"
                        ? "Get ready to explore amazing deals and discounts."
                        : ""
                }
                ${
                    emailType === "VERIFY"
                        ? "Please verify your email address to start enjoying our services."
                        : ""
                }
                ${
                    emailType === "RESET"
                        ? "You've requested to reset your password. Click the button below to proceed."
                        : ""
                }
            </p>
            ${
                emailType !== "WELCOME"
                    ? `
            <div style="text-align: center;">
                <a href="${process.env.DOMAIN}${
                          emailType === "VERIFY"
                              ? "/verifyemail?token="
                              : "/passwordreset?token="
                      }${hashedToken}" style="display: inline-block; background-color: #007bff; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-weight: bold;">${
                          emailType === "VERIFY"
                              ? "Verify Email"
                              : "Reset Password"
                      }</a>
            </div>
            <p style="font-size: 14px; line-height: 1.5; margin-top: 20px;">
                If you're having trouble clicking the button, copy and paste the following link into your browser:<br>
                <a href="${process.env.DOMAIN}${
                          emailType === "VERIFY"
                              ? "/verifyemail?token="
                              : "/passwordreset?token="
                      }${hashedToken}" style="color: #007bff; text-decoration: none;">${
                          process.env.DOMAIN
                      }${
                          emailType === "VERIFY"
                              ? "/verifyemail?token="
                              : "/passwordreset?token="
                      }${hashedToken}</a>
            </p>
            `
                    : ""
            }
            <p style="font-size: 14px; line-height: 1.5; margin-top: 20px;">If you didn't request this, please ignore this email.</p>
            <p style="font-size: 14px; line-height: 1.5; margin-top: 20px;">Best regards,<br>Deal Checker Team</p>
        </div>
    `,
        };

        const mailResponse = await transport.sendMail(mailOptions);
        console.log("Mail Sent: ", email," With a Email Type: ", emailType);
        return mailResponse;
    } catch (error) {
        throw new Error(error.message);
    }
};
