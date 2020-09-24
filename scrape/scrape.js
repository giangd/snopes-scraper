const axios = require("axios");
const cheerio = require("cheerio");
const fillArticlesArray = require("./fillArticlesArray");

async function scrape() {
    axios.get("https://www.snopes.com/fact-check/").then(async (res) => {
        const { data } = res;
        const $ = cheerio.load(data);

        const articlesArray = [];
        await fillArticlesArray(articlesArray, $);
        console.log("articlesArray", articlesArray);
    });
}

module.exports = scrape;
