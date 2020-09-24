const axios = require("axios");
const cheerio = require("cheerio");
const fillArticlesArray = require("./fillArticlesArray");

module.exports = async (url) => {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const articlesArray = [];
    await fillArticlesArray(articlesArray, $);
    return articlesArray;
};
