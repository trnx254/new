import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(request) {
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 400 }
            );
        }

        const reqBody = await request.json();

        const isPresent = user.favorites.some(
            (fav) => fav.productId === reqBody.productId
        );

        return NextResponse.json({
            message: "Product check successful",
            data: isPresent,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
