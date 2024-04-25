"use client";
import React, { useEffect } from "react";

import CardWithImg from "@/components/CardWithImg";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import axios from "axios";
import { useState } from "react";

const Page = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        const res = await axios.get("/api/favorites");
        if (res.data.data.length > 0) {
            console.log(res.data.data[0].imgLink);
            setData(res.data.data);
        }
        setLoading(false);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {loading ? (
                <div className="flex-wrap flex justify-evenly w-fit">
                    {Array.from({ length: 10 }, (_, index) => (
                        <LoadingSkeleton key={index} />
                    ))}
                </div>
            ) : data.length === 0 ? (
                <div className="flex justify-center items-center text-3xl h-screen">
                    <p>No data available. Please add Favorite First.</p>
                </div>
            ) : (
                <div className="flex-wrap gap-1 flex justify-evenly w-fit">
                    {data.map((item, index) => (
                        <CardWithImg
                            key={index}
                            link={`/search/compare/${item.productId}`}
                            title={item.productName}
                            rating={item.review}
                            total_people_review={item.reviewOutOf}
                            img={item.imgLink}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;
