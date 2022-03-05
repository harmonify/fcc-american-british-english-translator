"use strict";

const { Translator } = require("../controllers");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;
  });
};
