"use strict";

const {
  americanOnly,
  americanToBritishSpelling,
  americanToBritishTitles,
  britishOnly,
  locales,
  americanToBritishTime,
  britishToAmericanTime,
} = require("../config");
const { swapKeyValue, titleCase } = require("../utilities");

class Translator {
  americanOnly = americanOnly;
  americanToBritishSpelling = americanToBritishSpelling;
  americanToBritishTitles = americanToBritishTitles;
  britishOnly = britishOnly;
  britishToAmericanSpelling = swapKeyValue(americanToBritishSpelling);
  britishToAmericanTitles = swapKeyValue(americanToBritishTitles);
  americanToBritishTime = americanToBritishTime;
  britishToAmericanTime = britishToAmericanTime;

  translate(text, locale, highlight = false) {
    this.translateCheck(text, locale);
    // match input:
    //   * title (Mr, Mrs, Ms, Dr, etc)
    //   * time (1:00, 1.00, etc)
    //   * word (word, 12345, etc)
    //   * others (spaces, commas, etc)
    const inputRe =
      /([a-zA-Z]{2}\.)|(\d+[\:\.]\d+)|([a-zA-Z0-9]+)|([^a-zA-Z0-9]+)/g;
    const words = [...text.matchAll(inputRe)].map((word) => word[0]);
    const result = [];
    let counter = words.length;
    for (let index = 0; index < words.length; index++) {
      let isTranslated = false;
      let translatedWords = "";
      // while the word is not translated and the counter is greater than 0
      // translate the word from the longest sequence, slice the word shorter
      // if they are not translated.
      while (counter > 0 && !isTranslated) {
        const wordsToTranslate = words.slice(index, index + counter).join("");
        translatedWords = this.translateWord(wordsToTranslate, locale);
        if (translatedWords !== wordsToTranslate) {
          isTranslated = true;
        }
        counter -= 1;
      }
      // if the word is translated
      if (isTranslated) {
        // jump the iteration and push the translated word
        index += counter;
        result.push(
          highlight ? this.highlight(translatedWords) : translatedWords
        );
      } else {
        // if not translated, push the word as is
        result.push(words[index]);
      }
      // reset the counter
      counter = words.length - index;
    }
    // this._logTranslated(text, words, result, result.join(""));
    return result.join("");
  }

  translateCheck(text, locale) {
    if (typeof text !== "string") {
      throw new Error("text must be a string");
    }
    if (!Object.keys(locales).includes(locale)) {
      throw new Error(`Unknown locale: ${locale}`);
    }
  }

  translateWord(word, locale) {
    switch (locale) {
      case locales["american-to-british"]:
        return this.translateAmericanToBritish(word);
      case locales["british-to-american"]:
        return this.translateBritishToAmerican(word);
      default:
        return word;
    }
  }

  translateAmericanToBritish(word) {
    // this._logAmericanToBritish(word);
    let result;
    const wordLowercased = word.toLowerCase();

    if (Object.keys(this.americanOnly).includes(wordLowercased)) {
      result = this.americanOnly[wordLowercased];
    } else if (
      Object.keys(this.americanToBritishSpelling).includes(wordLowercased)
    ) {
      result = this.americanToBritishSpelling[wordLowercased];
    } else if (
      Object.keys(this.americanToBritishTitles).includes(wordLowercased)
    ) {
      result = titleCase(this.americanToBritishTitles[wordLowercased]);
    } else if (this.americanToBritishTime.pattern.test(wordLowercased)) {
      result = wordLowercased.replace(
        this.americanToBritishTime.old,
        this.americanToBritishTime.new
      );
    }
    if (result) {
      return result;
    }
    return word;
  }

  translateBritishToAmerican(word) {
    // this._logBritishToAmerican(word);
    let result;
    const wordLowercased = word.toLowerCase();

    if (Object.keys(this.britishOnly).includes(wordLowercased)) {
      result = this.britishOnly[wordLowercased];
    } else if (
      Object.keys(this.britishToAmericanSpelling).includes(wordLowercased)
    ) {
      result = this.britishToAmericanSpelling[wordLowercased];
    } else if (
      Object.keys(this.britishToAmericanTitles).includes(wordLowercased)
    ) {
      result = titleCase(this.britishToAmericanTitles[wordLowercased]);
    } else if (this.britishToAmericanTime.pattern.test(wordLowercased)) {
      result = wordLowercased.replace(
        this.britishToAmericanTime.old,
        this.britishToAmericanTime.new
      );
    }
    if (result) {
      return result;
    }
    return word;
  }

  highlight(word) {
    return `<span class="highlight">${word}</span>`;
  }

  _logTranslated(text, words, resultArr, result) {
    console.log("text: ", text);
    console.log("result : ", result);
    console.log("text array: ", words);
    console.log("result array: ", resultArr);
  }

  _logAmericanToBritish(word) {
    console.log("======================================");
    console.log("word:", word);
    console.log("americanOnly", Object.keys(americanOnly).includes(word));
    console.log(
      "americanToBritishSpelling",
      Object.keys(americanToBritishSpelling).includes(word)
    );
    console.log(
      "americanToBritishTitles",
      Object.keys(americanToBritishTitles).includes(word)
    );
    console.log(
      "americanToBritishTime",
      this.americanToBritishTime.pattern.test(word)
    );
    console.log("======================================\n");
  }

  _logBritishToAmerican(word) {
    console.log("======================================");
    console.log("word:", word);
    console.log("britishOnly", Object.keys(britishOnly).includes(word));
    console.log(
      "americanToBritishSpelling (reverse)",
      Object.keys(americanToBritishSpelling).includes(word)
    );
    console.log(
      "americanToBritishTitles (reverse)",
      Object.keys(americanToBritishTitles).includes(word)
    );
    console.log(
      "britishToAmericanTime",
      this.britishToAmericanTime.pattern.test(word)
    );
    console.log("======================================\n");
  }
}

module.exports = Translator;
