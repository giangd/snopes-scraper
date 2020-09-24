const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://www.snopes.com/fact-check/").then(async (res) => {
    const { data } = res;
    const $ = cheerio.load(data);

    const articlesArray = [];

    await fillArticles(articlesArray, $);
    console.log(articlesArray);
    // inputIntoDB(articlesArray);
});

function inputIntoDB(articlesArray) {
    console.log("hello world!");
}

async function fillArticles(articlesArray, $) {
    getDataFromFirstLink(articlesArray, $);
    await getRating(articlesArray);
}

function getDataFromFirstLink(articlesArray, $) {
    const articles = $(".media-list > .media-wrapper > a");

    // initialize
    for (let i = 0; i < articles.length; i++) {
        articlesArray.push({});
    }

    // fill articlesArray
    articles.each((i, el) => {
        articlesArray[i].link = $(el).attr("href");
        articlesArray[i].title = $(el).find(".title").text();
        articlesArray[i].subtitle = $(el).find(".subtitle").text();

        // imgLink
        const newEl = $(el).find(".featured-media").html();
        const firstQuoteIndex =
            newEl.indexOf('data-lazy-src="') + "data-lazy-src=".length;
        const secondQuoteIndex = newEl.indexOf('"', firstQuoteIndex + 1);

        const imgLink = newEl.substring(firstQuoteIndex + 1, secondQuoteIndex);
        articlesArray[i].imgLink = imgLink;
    });
}

async function getRating(articlesArray, $) {
    // for each object, go to the object's link and get verdict
    for (let i = 0; i < articlesArray.length; i++) {
        const res = await axios.get(articlesArray[i].link);
        const { data } = res;
        const $ = cheerio.load(data);
        const mediaList = $(".media-list").first();

        let rating = $(mediaList).find(".media-body > h5").text();

        const ratingImg = $(mediaList).find("img").attr("src"); // can hard code

        const ratingDesc = {};
        switch (rating) {
            case "True":
            case "Outdated":
            case "Miscaptioned":
            case "Misattributed":
            case "Correct Attribution":
            case "Scam":
            case "Legend":
            case "Labeled Satire":
            case "Lost Legend":
            case "False":
                break;

            case "Mostly True":
            case "Mixture":
            case "Mostly False":
            case "Unproven":
                ratingDesc.whatsTrue = $(mediaList)
                    .find(".media.whats-true p")
                    .text();
                ratingDesc.whatsFalse = $(mediaList)
                    .find(".media.whats-false p")
                    .text();
                ratingDesc.whatsUndetermined = $(mediaList)
                    .find(".media.whats-undetermined p")
                    .text();
                break;
            default:
                console.log(`error with unknown rating: ${rating}`);
                break;
        }

        articlesArray[i].rating = rating;
        articlesArray[i].ratingImg = ratingImg;
        articlesArray[i].ratingDesc = ratingDesc;
    }
    return;
}

// const articlesArrayFormat = [
//     {
//         link:
//             "https://www.snopes.com/fact-check/kamala-harris-abortion-until-birth/",
//         title:
//             "Did Kamala Harris Support Abortion Until the Time of Giving Birth?",
//         subtitle:
//             "The Democratic vice-presidential candidate's pro-abortion-rights record has come under scrutiny from conservatives. ",
//         imgLink:
//             "https://www.snopes.com/tachyon/2020/08/GettyImages-1145493381.jpg?resize=865,452",
//         rating: "Mixture",
//         ratingImg:
//             "https://www.snopes.com/tachyon/2018/03/rating-mixture.png",
//         ratingDesc: {
//             whatsTrue:
//                 "U.S. Sen. Kamala Harris, D-Calif, has maintained that the timing of carrying out an abortion should be left up to a woman. Harris was a co-sponsor of the 2019 Women’s Health Protection Act (WHPA), which prohibits state laws banning post-viability abortions that do not make exceptions if a woman’s health and life are at risk.",
//             whatsFalse:
//                 "She has not explicitly stated that she supports the termination of a pregnancy at any time just before birth. ",
//             whatsUndetermined: "",
//         },
//     },
// ];
