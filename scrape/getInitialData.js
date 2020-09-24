module.exports = async (articlesArray, $) => {
    const articles = $(".media-list > .media-wrapper > a");

    // initialize
    for (let i = 0; i < articles.length; i++) {
        articlesArray.push({});
    }

    // fill articlesArray
    articles.each((i, el) => {
        articlesArray[i].link = $(el).attr("href");
        articlesArray[i]._id = $(el).attr("href");
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
};
