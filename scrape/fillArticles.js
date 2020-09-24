const axios = require("axios");
const cheerio = require("cheerio");
const config = require("../config.json");
const uri = config.uri;
const mongoose = require("mongoose");

const getRating = require("./getRating");

const getDataFromFirstLink = require("./getDataFromFirstLink");

async function fillArticles(articlesArray, $) {
    getDataFromFirstLink(articlesArray, $);
    await getRating(articlesArray);
}

module.exports = fillArticles;
