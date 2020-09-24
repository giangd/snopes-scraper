const axios = require("axios");
const cheerio = require("cheerio");
const config = require("./config.json");
const uri = config.uri;
const mongoose = require("mongoose");
const scrape = require("./scrape/scrape.js");

// const FoodSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
// });

// const foodModel = mongoose.model("Food", FoodSchema);

// async function inputIntoDB(articlesArray) {
//     await mongoose.connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("connected");

//     const articleSchema = new mongoose.Schema({
//         _id: { type: String, required: true },
//         link: { type: String, required: true },
//         title: { type: String, required: true },
//         subtitle: { type: String, required: true },
//         imgLink: { type: String, required: true },
//         rating: { type: String, required: true },
//         ratingImg: { type: String, required: true },
//         ratingDesc: {
//             type: {
//                 whatsTrue: { type: String, required: true },
//                 whatsFalse: { type: String, required: true },
//                 whatsUndetermined: { type: String, required: true },
//             },
//             required: true,
//         },
//     });

//     const Article = mongoose.model("article", articleSchema);

//     const articleInstance = new Article({
//         _id:
//             "https://www.snopes.com/fact-check/kamala-harris-abortion-until-birth/",
//         link:
//             "https://www.snopes.com/fact-check/kamala-harris-abortion-until-birth/",
//         title:
//             "Did Kamala Harris Support Abortion Until the Time of Giving Birth?",
//         subtitle:
//             "The Democratic vice-presidential candidate's pro-abortion-rights record has come under scrutiny from conservatives. ",
//         imgLink:
//             "https://www.snopes.com/tachyon/2020/08/GettyImages-1145493381.jpg?resize=865,452",
//         rating: "Mixture",
//         ratingImg: "https://www.snopes.com/tachyon/2018/03/rating-mixture.png",
//         ratingDesc: {
//             whatsTrue:
//                 "U.S. Sen. Kamala Harris, D-Calif, has maintained that the timing of carrying out an abortion should be left up to a woman. Harris was a co-sponsor of the 2019 Women’s Health Protection Act (WHPA), which prohibits state laws banning post-viability abortions that do not make exceptions if a woman’s health and life are at risk.",
//             whatsFalse:
//                 "She has not explicitly stated that she supports the termination of a pregnancy at any time just before birth. ",
//             whatsUndetermined: "",
//         },
//     });
//     await articleInstance.save();
//     console.log("saved");

//     mongoose.connection.close();
// }
scrape();
