const axios = require("axios");
const cheerio = require("cheerio");
const config = require("../config.json");
const uri = config.uri;
const mongoose = require("mongoose");
const fillArticles = require("./fillArticles");

module.exports = async function getRating(articlesArray, $) {
    // for each object, go to the object's link and get verdict
    for (let i = 0; i < articlesArray.length; i++) {
        const res = await axios.get(articlesArray[i].link);
        const { data } = res;
        const $ = cheerio.load(data);
        const mediaList = $(".media-list").first();

        let rating = $(mediaList).find(".media-body > h5").text();

        const ratingImg = $(mediaList).find("img").attr("src"); // can hard code

        const ratingDesc = {};
        ratingDesc.whatsTrue = $(mediaList).find(".media.whats-true p").text();
        ratingDesc.whatsFalse = $(mediaList)
            .find(".media.whats-false p")
            .text();
        ratingDesc.whatsUndetermined = $(mediaList)
            .find(".media.whats-undetermined p")
            .text();

        articlesArray[i].rating = rating;
        articlesArray[i].ratingImg = ratingImg;
        articlesArray[i].ratingDesc = ratingDesc;
    }
};
