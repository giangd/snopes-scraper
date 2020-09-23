const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://www.snopes.com/fact-check/").then((res) => {
    const { data } = res;
    const $ = cheerio.load(data);
    // const media = $(".media-list").children(".media-wrapper").length;
    const articles = $(".media-list > .media-wrapper > a");

    const articleLinks = [];
    articles.each((i, el) => {
        articleLinks.push($(el).attr("href"));
    });
    console.log("links", articleLinks);

    const titles = [];
    articles.each((i, el) => {
        titles.push($(el).find(".title").text());
    });
    console.log("titles", titles);

    const subtitles = [];
    articles.each((i, el) => {
        subtitles.push($(el).find(".subtitle").text());
    });
    console.log("subtitles", subtitles);

    const imgLinks = [];
    articles.each((i, el) => {
        // console.log($(el).find(".featured-media").html());
        const newEl = $(el).find(".featured-media").html();
        const firstQuoteIndex =
            newEl.indexOf('data-lazy-src="') + "data-lazy-src=".length;
        const secondQuoteIndex = newEl.indexOf('"', firstQuoteIndex + 1);

        const imgLink = newEl.substring(firstQuoteIndex + 1, secondQuoteIndex);
        imgLinks.push(imgLink);
    });
    console.log("imgLinks", imgLinks);

    console.log("articleLinks", articleLinks.length);
    console.log("titles", titles.length);
    console.log("subtitles", subtitles.length);
    console.log("imgLinks", imgLinks.length);
});
