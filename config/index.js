const americanOnly = require("./american-only");
const americanToBritishSpelling = require("./american-to-british-spelling");
const americanToBritishTitles = require("./american-to-british-titles");
const britishOnly = require("./british-only");
const locales = require("./locales");
const { americanToBritishTime, britishToAmericanTime } = require("./times");

module.exports = {
  americanOnly,
  americanToBritishSpelling,
  americanToBritishTitles,
  britishOnly,
  locales,
  americanToBritishTime,
  britishToAmericanTime,
};
