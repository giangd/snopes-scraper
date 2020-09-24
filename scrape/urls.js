const urls = [];
urls.push("https://www.snopes.com/fact-check/"); // first page

for (let i = 1; i < 10; i++) {
    urls.push(`https://www.snopes.com/fact-check/page/${i}`);
}

module.exports = urls