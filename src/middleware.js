import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath =
        path === "/login" ||
        path === "/signup" ||
        path === "/verifyemail" ||
        path === "/forgotpassword" ||
        path === "/";
    const token = request.cookies.get("token")?.value || "";
    console.log("token : ", token);

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/profile/:path*",
        "/login",
        "/signup",
        "/verifyemail",
        "/forgotpassword",
        "/resetpassword",
        "/search/:path*",
        "/api/comparison/:path*",
        "/api/item/:path*",
    ],
};
