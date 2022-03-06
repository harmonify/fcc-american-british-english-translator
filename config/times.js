// Supported time formats for translation
const americanToBritishTime = {
  pattern: /^\d+:\d+$/,
  old: ":",
  new: ".",
};

const britishToAmericanTime = {
  pattern: /^\d+.\d+$/,
  old: ".",
  new: ":",
};

module.exports = {
  americanToBritishTime,
  britishToAmericanTime,
};
