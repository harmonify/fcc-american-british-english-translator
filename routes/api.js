"use strict";

const { locales } = require("../config");
const { Translator } = require("../controllers");
const { ErrorStatus } = require("../utilities");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res, next) => {
    try {
      let { text, locale } = req.body;
      if (text === undefined || locale === undefined) {
        throw new ErrorStatus("Required field(s) missing", 200);
      }
      text = text.trim();
      if (!text) {
        throw new ErrorStatus("No text to translate", 200);
      }
      if (Object.values(locales).indexOf(locale) === -1) {
        throw new ErrorStatus("Invalid value for locale field", 200);
      }
      const translation = translator.translate(text, locale, true);
      if (translation === text) {
        return res.json({
          text,
          translation: "Everything looks good to me!",
        });
      }
      return res.json({ text, translation });
    } catch (error) {
      next(error);
    }
  });
};
