const config = require("../config.json");
const uri = config.uri;
const mongoose = require("mongoose");
const articleSchema = require("./articleSchema.js");

module.exports = new mongoose.Schema({
    _id: { type: String, required: true },
    link: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    imgLink: { type: String, required: true },
    rating: { type: String, required: true },
    ratingImg: { type: String, required: true },
    claim: { type: String, required: true },
    ratingDesc: {
        type: {
            whatsTrue: { type: String, required: true },
            whatsFalse: { type: String, required: true },
            whatsUndetermined: { type: String, required: true },
        },
        required: true,
    },
});
