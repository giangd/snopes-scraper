const urls = [];
const numPagesTotal = 20;

for (let i = 0; i < numPagesTotal; i++) {
    if (i === 0) {
        urls.push("https://www.snopes.com/fact-check/");
    } else {
        urls.push(`https://www.snopes.com/fact-check/page/${i}`);
    }
}

module.exports = urls;
