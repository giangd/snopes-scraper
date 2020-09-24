const scrape = require("./scrape/scrape.js");
const urls = require("./scrape/urls.js");
const inputIntoDB = require("./database/inputIntoDB.js");

scrapeAndFillDB();
async function scrapeAndFillDB() {
    for (url of urls) {
        const articlesArray = await scrape(url);
        inputIntoDB(articlesArray);
    }
}
