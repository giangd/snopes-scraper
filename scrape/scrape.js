const axios = require("axios");
const cheerio = require("cheerio");
const fillArticlesArray = require("./fillArticlesArray");

module.exports = async () => {
    const { data } = await axios.get("https://www.snopes.com/fact-check/");
    const $ = cheerio.load(data);

    const articlesArray = [];
    await fillArticlesArray(articlesArray, $);
    return articlesArray;
};
