const getInitialData = require("./getInitialData");
const getSecondaryData = require("./getSecondaryData");

module.exports = async (articlesArray, $) => {
    await getInitialData(articlesArray, $);
    await getSecondaryData(articlesArray);
};
