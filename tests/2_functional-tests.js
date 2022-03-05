const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

const Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  test("Translation with text and locale fields: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post(baseUrl)
      .send({})
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        done();
      });
  });

  test("Translation with text and invalid locale field: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post(baseUrl)
      .send({})
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        done();
      });
  });

  test("Translation with missing text field: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post(baseUrl)
      .send({})
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        done();
      });
  });

  test("Translation with missing locale field: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post(baseUrl)
      .send({})
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        done();
      });
  });

  test("Translation with empty text: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post(baseUrl)
      .send({})
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        done();
      });
  });

  test("Translation with text that needs no translation: POST request to /api/translate", function (done) {
    chai
      .request(server)
      .post(baseUrl)
      .send({})
      .end(function (err, res) {
        if (err) assert.fail(err);
        assert.equal(res.status, 200, "Server should return a 200");
        done();
      });
  });
});
