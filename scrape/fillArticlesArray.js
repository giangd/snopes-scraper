const getInitialData = require("./getInitialData");
const getSecondaryData = require("./getSecondaryData");

module.exports = async (articlesArray, $) => {
    getInitialData(articlesArray, $);
    await getSecondaryData(articlesArray);
};
