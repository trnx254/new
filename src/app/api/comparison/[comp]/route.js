import { NextResponse } from "next/server";

const axios = require("axios");
const cheerio = require("cheerio");

const scraper = async (url) => {
  try {
    let url2 = "";
    const baseUrl = "https://www.google.com";
    const axiosResponse1 = await axios.request({
      method: "GET",
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
      },
    });
    const $$ = cheerio.load(axiosResponse1.data);
    url2 = baseUrl + $$(".EJbZzc").attr("href");
    if (url2 == "https://www.google.comundefined") {
      url2 = url;
    }
    const mainData = [];
    const content = [];
    const axiosResponse = await axios.request({
      method: "GET",
      url: url2,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
      },
    });
    const $ = cheerio.load(axiosResponse.data);
    const imgLink =
      $(".lBRvsb").find(".r4m4nf").attr("src") ||
      $(".Xkiaqc").find("img").attr("src");
    const title =
      $(".lBRvsb").find(".BvQan").text() || $(".LDQll").find(".BvQan").text();
    const review =
      $(".lBRvsb").find(".UzThIf").attr("aria-label") ||
      $(".aE5Gic").find(".UzThIf").attr("aria-label");
    const reviewOutOf =
      $(".lBRvsb").find(".HiT7Id").find("span").attr("aria-label") ||
      $(".aE5Gic").find(".HiT7Id").find("span").attr("aria-label");

    $(".sh-osd__offer-row").each((index, element) => {
      // scraping logic...
      const compBrand =
        $(element)
          .find(".kPMwsc")
          .find("a")
          .text()
          .replace("Opens in a new window", "") ||
        $(element)
          .find("._-ey")
          .find("a")
          .text()
          .replace("Opens in a new window", "");
      const compLink =
        baseUrl + $(element).find(".kPMwsc").find("a").attr("href") ||
        baseUrl + $(element).find("._-ey").find("a").attr("href");
      const delivery = $(element).find(".yGibJf").text();
      const itemPrice = $(element).find(".fObmGc").text();
      const totalPrice = $(element).find(".drzWO").text();

      const dataFromResponce = {
        compBrand,
        compLink,
        delivery,
        itemPrice,
        totalPrice,
      };
      content.push(dataFromResponce);
    });
    const mainDataContent = {
      title,
      review,
      reviewOutOf,
      imgLink,
      content,
    };
    mainData.push(mainDataContent);
    return mainData;
  } catch (error) {
    console.error(error);
    console.log("Scrapper Error");
  }
};

export async function GET(request, { params }) {
  const { comp } = params;
  const mainUrl = "https://www.google.com/shopping/product/";
  const url = mainUrl + comp;
  const data = await scraper(url);
  return NextResponse.json(data);
}
