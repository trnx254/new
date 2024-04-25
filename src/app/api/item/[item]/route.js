import { NextResponse } from "next/server";
import Redis from "ioredis";

const axios = require("axios");
const cheerio = require("cheerio");

const main_url = "https://www.google.com";
const base_url = "https://www.google.com/search?tbm=shop&gl=in&hl=en&q=";

const scraper = async (url, item) => {
    const data = [];
    try {
        const redis = new Redis(process.env.REDIS_URI);

        // Check if Data exists in Redis cache
        const cachedData = await redis.get(item);

        if (cachedData) {
            console.log("Data Found From Cache");
            return JSON.parse(cachedData);
        }

        const axiosResponse = await axios.request({
            method: "GET",
            url: url,
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
            },
        });
        const $ = cheerio.load(axiosResponse.data);
        $(".sh-dgr__content").each((index, element) => {
            // scraping logic...
            const comp = $(element).find(".iXEZD").attr("href");
            const link =
                main_url + $(element).find(".zLPF4b").find("a").attr("href");
            let link_text = $(element).find(".shntl").find(".aULzUe").text();
            let rating = $(element).find(".NzUzee").find(".Rsc7Yb").text();
            let delivery = $(element).find(".vEjMR").text();
            let id = $(element)
                .find(".VOo31e")
                .find("a")
                .attr("href")
                .split("?")[0]
                .split("/")[3];

            let rating_str = $(element)
                .find(".NzUzee")
                .find("div")
                .find("span")
                .text();
            const total_people_review = rating_str.slice(
                rating_str.indexOf("stars.") + 7
            );
            if (link_text.startsWith(".")) {
                link_text = link_text.split("}").slice(-1)[0];
            }
            let Compare = null;
            if (comp != undefined) {
                Compare = main_url + comp;
            }
            const title = $(element).find(".tAxDx").text();
            const price = $(element).find(".a8Pemb").text();
            const dataFromResponce = {
                title,
                price,
                Compare,
                link,
                link_text,
                rating,
                total_people_review,
                delivery,
                id,
            };
            data.push(dataFromResponce);
        });

        await redis.set(item, JSON.stringify(data));
        await redis.expire(item, 86400);
    } catch (error) {
        console.error(error);
    }
    return data;
};

export async function GET(request, { params }) {
    const { item } = params;
    const url = base_url + item;
    const data = await scraper(url, item);

    return NextResponse.json(data);
}
