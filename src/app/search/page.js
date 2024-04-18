"use client";

import { GlobeDemo } from "@/components/GlobeDemo";

// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

const Page = () => {
    // const [search, setSearch] = useState("");
    // const router = useRouter();

    // const handelSubmit = () => {
    //     router.push(`search/${search}`);
    //     setSearch("");
    // };
    // const handleKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //         handelSubmit();
    //     }
    // };

    return (
        <GlobeDemo />
        // <main className="flex flex-col min-h-screen items-center justify-center p-24 pt-5">
        //     <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        //         We invest in the{" "}
        //         <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
        //             world’s potential
        //         </span>
        //     </h1>
        //     <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        //         Here at Deal Checker we focus on markets where technology,
        //         innovation, and capital can unlock long-term value and drive
        //         economic growth.
        //     </p>

        //     <div className="w-4/5 my-10">
        //         <label
        //             htmlFor="search"
        //             className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        //         >
        //             Search
        //         </label>
        //         <div className="relative">
        //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        //                 <svg
        //                     className="w-4 h-4 text-gray-500 dark:text-gray-400"
        //                     aria-hidden="true"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     fill="none"
        //                     viewBox="0 0 20 20"
        //                 >
        //                     <path
        //                         stroke="currentColor"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         strokeWidth="2"
        //                         d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        //                     />
        //                 </svg>
        //             </div>
        //             <input
        //                 type="search"
        //                 id="search"
        //                 value={search}
        //                 onKeyDown={handleKeyDown}
        //                 onChange={(e) => setSearch(e.target.value)}
        //                 className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        //                 placeholder="Search"
        //                 required
        //             />
        //             <button
        //                 onClick={handelSubmit}
        //                 className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        //             >
        //                 Search
        //             </button>
        //         </div>
        //     </div>

        //     <p className="text-gray-500 dark:text-gray-400">
        //         Looking for a great deal on your next purchase? Check out Deal
        //         Checker, the website that helps you compare prices and reviews
        //         from hundreds of websites. You’ll never miss a bargain again!
        //     </p>
        //     <div className="inline-flex items-center justify-center w-full">
        //         <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        //         <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        //             <svg
        //                 className="w-4 h-4 text-gray-700 dark:text-gray-300"
        //                 aria-hidden="true"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="currentColor"
        //                 viewBox="0 0 18 14"
        //             >
        //                 <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        //             </svg>
        //         </div>
        //     </div>
        //     <p className="text-gray-500 dark:text-gray-400">
        //         Online shopping can be convenient and fun, but it can also be
        //         overwhelming and expensive. How do you know if you are getting
        //         the best price and quality for your products and services?
        //         That’s where Deal Checker comes in. Deal Checker is a website
        //         that helps you find the best deals online by comparing prices
        //         and reviews from hundreds of websites. You can search for
        //         anything you want, from electronics to fashion to travel, and
        //         see the best offers in seconds. You can also filter your results
        //         by various criteria, such as market, language, safe search,
        //         freshness, aspect ratio, and more. Deal Checker also shows you
        //         the ratings and reviews from other customers, so you can make an
        //         informed decision. Deal Checker is the ultimate online shopping
        //         assistant that helps you save money, save time, and save hassle.
        //         Try it today and see for yourself!
        //     </p>
        // </main>
    );
};

export default Page;
