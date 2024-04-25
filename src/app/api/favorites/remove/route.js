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

        user.favorites = user.favorites.filter(
            (fav) => fav.productId !== reqBody.productId
        );
        await user.save();

        return NextResponse.json({
            message: "Item removed from favorites successfully",
            data: reqBody,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
