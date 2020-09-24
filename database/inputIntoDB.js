const config = require("../config.json");
const uri = config.uri;
const mongoose = require("mongoose");
const articleSchema = require("./articleSchema.js");
const collectionName = "article-9-24";

module.exports = async (articlesArray) => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const Article = mongoose.model(collectionName, articleSchema);

    for (article of articlesArray) {
        const articleInstance = new Article(article);

        const isAlreadyIn = await Article.exists({ _id: article._id });

        if (isAlreadyIn) {
            console.log("broke");
            // break;
            continue;
        } else {
            console.log("saved");
            await articleInstance.save();
        }
    }

    mongoose.connection.close();
    return;
};
