"use client";

import { GlobeDemo } from "@/components/GlobeDemo";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handelSubmit = () => {
        router.push(`search/${search}`);
        setSearch("");
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handelSubmit();
        }
    };

    return (
        <>
            <main className="flex flex-col items-center z-20 px-24 pt-5">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    We invest in the{" "}
                    <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                        world’s potential
                    </span>
                </h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                    Here at Deal Checker we focus on markets where technology,
                    innovation, and capital can unlock long-term value and drive
                    economic growth.
                </p>
                <div className="h-5"></div>
                <div className="text-center">
                    <span className="text-gray-700 dark:text-gray-300">
                        Presse
                    </span>
                    <button className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold px-2 py-1 mx-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600">
                        CTRL
                    </button>
                    <span className="text-gray-700 dark:text-gray-300">+</span>
                    <button className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold px-2 py-1 mx-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600">
                        K
                    </button>
                    <span className="text-gray-700 dark:text-gray-300">
                        to search.
                    </span>
                </div>
            </main>
            <div className="fixed -bottom-40 w-screen">
                <GlobeDemo />
            </div>

            <div className="inline-flex fixed bottom-40 left-5 items-center justify-center w-64">
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg
                        className="w-4 h-4 text-gray-700 dark:text-gray-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                    >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
            <div className="inline-flex fixed bottom-40 right-5 items-center justify-center w-64">
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg
                        className="w-4 h-4 text-gray-700 dark:text-gray-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                    >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Page;
