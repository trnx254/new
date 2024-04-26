"use client";
import React, { useEffect } from "react";

import Card from "@/components/Card";
import axios from "axios";
import { useState } from "react";
import LoadingSkeletonWithOutImg from "@/components/LoadingSkeletonWithOutImg";

const Page = ({ params }) => {
    const { search } = params;

    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const { data } = await axios.get(`/api/item/${search}`);
            setData(data);
            setLoading(false);
        })();
    }, [search]);

    return (
        <div>
            {Loading ? (
                <>
                    {/* <h1 className="mx-5 p-3 text-2xl">Searching.............</h1> */}
                    <div className="flex-wrap flex justify-evenly w-fit">
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                        <LoadingSkeletonWithOutImg />
                    </div>
                </>
            ) : (
                <>
                    <div className="flex-wrap gap-1 flex justify-evenly w-fit">
                        {data?.map((item, index) => (
                            <Card
                                key={index}
                                link_text={item.link_text}
                                link={item.link}
                                compare={item.Compare}
                                title={item.title}
                                rating={item.rating}
                                id={item.id}
                                price={item.price}
                                total_people_review={item.total_people_review}
                                delivery={item.delivery}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Page;
