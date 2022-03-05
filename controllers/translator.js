const {
  americanOnly,
  americanToBritishSpelling,
  americanToBritishTitles,
  britishOnly,
  locales,
} = require("../config");

class Translator {
  translate(text, locale) {
    if (locale === locales.americanToBritish) {
      return this.americanToBritishTitles(
        this.americanToBritishSpelling(this.americanOnly(text))
      );
    } else if (locale === locales.britishToAmerican) {
      return this.britishOnly(text);
    } else {
      return text;
    }
  }
}

module.exports = Translator;
