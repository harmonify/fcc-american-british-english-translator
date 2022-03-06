const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server");

const { locales } = require("../config");

chai.use(chaiHttp);

suite("Functional Tests", () => {
  const baseUrl = "/api/translate";

  test("Translation with text and locale fields: POST request to /api/translate", function (done) {
    const text = "acclimate";
    const locale = locales["american-to-british"];
    const expectedTranslation = '<span class="highlight">acclimatise</span>';

    chai
      .request(server)
      .post(baseUrl)
      .send({ text, locale })
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        assert.equal(
          res.body.text,
          text,
          "Server should return the same text as the client"
        );
        assert.equal(
          res.body.translation,
          expectedTranslation,
          "Server should return the expected translation"
        );
        done();
      });
  });

  test("Translation with text and invalid locale field: POST request to /api/translate", function (done) {
    const text = "acclimate";
    const locale = "invalid-locale";
    const expectedError = "Invalid value for locale field";

    chai
      .request(server)
      .post(baseUrl)
      .send({ text, locale })
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        assert.equal(
          res.body.error,
          expectedError,
          "Server should return the expected error"
        );
        done();
      });
  });

  test("Translation with missing text field: POST request to /api/translate", function (done) {
    const locale = locales["american-to-british"];
    const expectedError = "Required field(s) missing";

    chai
      .request(server)
      .post(baseUrl)
      .send({ locale })
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        assert.equal(
          res.body.error,
          expectedError,
          "Server should return the expected error"
        );
        done();
      });
  });

  test("Translation with missing locale field: POST request to /api/translate", function (done) {
    const text = "Hello";
    const expectedError = "Required field(s) missing";

    chai
      .request(server)
      .post(baseUrl)
      .send({ text })
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        assert.equal(
          res.body.error,
          expectedError,
          "Server should return the expected error"
        );
        done();
      });
  });

  test("Translation with empty text: POST request to /api/translate", function (done) {
    const text = "";
    const locale = locales["american-to-british"];
    const expectedError = "No text to translate";

    chai
      .request(server)
      .post(baseUrl)
      .send({ text, locale })
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        assert.equal(
          res.body.error,
          expectedError,
          "Server should return the expected error"
        );
        done();
      });
  });

  test("Translation with text that needs no translation: POST request to /api/translate", function (done) {
    const text = "Hello";
    const locale = locales["american-to-british"];
    const expectedTranslation = "Everything looks good to me!";

    chai
      .request(server)
      .post(baseUrl)
      .send({ text, locale })
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        assert.equal(
          res.body.text,
          text,
          "Server should return the same text as the client"
        );
        assert.equal(
          res.body.translation,
          expectedTranslation,
          "Server should return the expected translation"
        );
        done();
      });
  });
});
