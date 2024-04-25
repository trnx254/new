"use client";

import * as React from "react";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AuthToggle() {
    const router = useRouter();

    const handelLogout = async () => {
        await fetch("/api/users/logout", {
            method: "GET",
        });
        toast.success("Logout Successfully");
        router.push("/login");
    };
    const handelProfile = () => {
        router.push("/profile");
    };

    const handelFavorite = () => {
        router.push("/profile/favorite");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <User className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    <span className="sr-only">Toggle Profile</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handelProfile}>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handelFavorite}>
                    Favorite
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handelLogout}>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
