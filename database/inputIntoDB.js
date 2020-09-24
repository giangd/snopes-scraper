const config = require("../config.json");
const uri = config.uri;
const mongoose = require("mongoose");
const articleSchema = require("./articleSchema.js");

module.exports = async (articlesArray) => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const collectionName = "articleTest";

    const Article = mongoose.model(collectionName, articleSchema);

    for (article of articlesArray) {
        const articleInstance = new Article(article);

        const isAlreadyIn = await Article.exists({ _id: article._id });

        if (isAlreadyIn) {
            console.log("broke");
            break;
        } else {
            console.log("saved");
            await articleInstance.save();
        }
    }

    mongoose.connection.close();
    return;
};
