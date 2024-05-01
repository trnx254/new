"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import ResendTokenVerify from "@/components/ResendTokenVerify";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleResend = async () => {
        const email = { email: user.email };
        // Add logic here to resend verification
        await axios.post("/api/users/resend", email);
        toast.success("Verification Link resent successfully!");
    };

    const onLogin = async () => {
        try {
            setLoading(true);
            await axios.post("/api/users/login", user);
            toast.success("Login Successfull");
            router.push("/profile");
        } catch (error) {
            if (error.response.data.message === "User not Verified. Please Verify."){
                toast.custom(<ResendTokenVerify handleResend={handleResend}/>)
            } else {
                toast.error("Email or Password is incorrect", error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-wrap flex-col items-center justify-center">
            <Card className="w-[300px] sm:w-[350px]">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email and password to login
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            value={user.email}
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                        />
                        <Link
                            className="text-right text-xs text-slate-500 hover:underline hover:text-slate-300"
                            href="/forgotpassword"
                        >
                            Forgot Password
                        </Link>
                    </div>
                    <div className="grid gap-2 relative">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={user.password}
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                        />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        disabled={
                            user.email.length > 0 && user.password.length > 0
                                ? false
                                : true
                        }
                        onClick={onLogin}
                    >
                        {loading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            "Login"
                        )}
                    </Button>
                    <Link href="/signup">
                        <Button variant="outline">Signup</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}