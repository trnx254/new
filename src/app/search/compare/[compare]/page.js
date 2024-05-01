/* eslint-disable @next/next/no-img-element */
"use client";
import Table from "@/components/Table";
import DetailsLoading from "@/components/DetailsLoading";
import axios from "axios";

import React, { useEffect, useState } from "react";
import FavoriteIcon from "@/components/FavoriteIcon";

const Page = ({ params }) => {
    const [dataItem, setDataItem] = useState({});
    const [loading, setLoading] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const getData = async () => {
        setLoading(true);
        const { compare } = params;
        const body = {
            productId: compare,
        };
        const res = await axios.post("/api/favorites/check", body);
        if (res.data.data) {
            setIsFavorite(res.data.data);
        }
        const { data } = await axios.get(`/api/comparison/${compare}`);
        setDataItem(data[0]);
        setLoading(false);
    };
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFavoriteClick = async () => {
        try {
            const { compare } = params;
            const item = {
                productId: compare,
                productName: dataItem.title,
                review: dataItem.review || "No review available",
                reviewOutOf: dataItem.reviewOutOf || "No Data",
                imgLink: dataItem.imgLink,
            };

            // Toggle favorite state locally
            setIsFavorite((prev) => !prev);

            // Send API request to add/remove item from favorites
            if (!isFavorite) {
                const res = await axios.post("/api/favorites/add", item);
                toast.success(res.message);
            } else {
                const res = await axios.post("/api/favorites/remove", item);
                toast.success(res.message);
            }
        } catch (error) {
            console.error("Error handling favorite:", error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <>
            {loading ? (
                <DetailsLoading />
            ) : (
                <div className="relative overflow-x-auto min-h-screen shadow-md sm:rounded-lg">
                    <div className="flex p-2 text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        <span className="w-44 rounded-md bg-cover overflow-hidden">
                            <img src={dataItem.imgLink} alt="Product image." />
                        </span>

                        <div className="p-5 px-2 w-screen text-2xl font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                            {dataItem.title}
                            <p className="mt-1 flex justify-between text-lg font-normal text-gray-500 dark:text-gray-400">
                                {dataItem.review}
                                {dataItem.reviewOutOf}
                                <span>
                                    <FavoriteIcon
                                        filled={isFavorite}
                                        size={24}
                                        onClick={handleFavoriteClick}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sold By
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Details
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Item price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Visit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataItem?.content?.map((item, index) => (
                                <Table
                                    key={index}
                                    compBrand={item.compBrand}
                                    compLink={item.compLink}
                                    delivery={item.delivery}
                                    itemPrice={item.itemPrice}
                                    totalPrice={item.totalPrice}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default Page;
