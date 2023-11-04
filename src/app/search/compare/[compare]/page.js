"use client";
import Table from "@/components/Table";
import DetailsLoading from "@/components/DetailsLoading";
import axios from "axios";

import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [dataItem, setDataItem] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const { compare } = params;
    const { data } = await axios.get(
      `https://deal-checker.vercel.app/api/comparison/${compare}`
    );
    setDataItem(data[0]);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <DetailsLoading />
      ) : (
        <div className="relative overflow-x-auto min-h-screen shadow-md sm:rounded-lg">
          <div className="flex p-2 text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            <span className="w-44 rounded-md bg-cover overflow-hidden">
              <img src={dataItem.imgLink} />
            </span>

            <div className="p-5 px-2 w-screen text-2xl font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              {dataItem.title}
              <p className="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                {dataItem.review}
                {dataItem.reviewOutOf}
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

export default page;
