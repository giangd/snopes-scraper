const axios = require("axios");
const cheerio = require("cheerio");
const config = require("../config.json");
const uri = config.uri;
const mongoose = require("mongoose");
const fillArticles = require("./fillArticles");

async function scrape() {
    axios.get("https://www.snopes.com/fact-check/").then(async (res) => {
        const { data } = res;
        const $ = cheerio.load(data);

        const articlesArray = [];

        await fillArticles(articlesArray, $);
        console.log("articlesArray", articlesArray);
    });
}





module.exports = scrape;
