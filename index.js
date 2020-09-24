const scrape = require("./scrape/scrape.js");
const inputIntoDB = require("./database/inputIntoDB.js");

scrapeAndFillDB();

async function scrapeAndFillDB() {
    const articlesArray = await scrape();
    inputIntoDB(articlesArray);
}
