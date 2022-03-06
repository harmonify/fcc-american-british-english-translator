const chai = require("chai");
const assert = chai.assert;

const { Translator } = require("../controllers");
const { locales } = require("../config");

const translator = new Translator();

suite("Unit Tests", () => {
  test("Translate 'Mangoes are my favorite fruit.' to British English", function () {
    const text = "Mangoes are my favorite fruit.";
    const expected = "Mangoes are my favourite fruit.";
    const locale = locales["american-to-british"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'I ate yogurt for breakfast.' to British English", function () {
    const text = "I ate yogurt for breakfast.";
    const expected = "I ate yoghurt for breakfast.";
    const locale = locales["american-to-british"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'We had a party at my friend's condo.' to British English", function () {
    const text = "We had a party at my friend's condo.";
    const expected = "We had a party at my friend's flat.";
    const locale = locales["american-to-british"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'Can you toss this in the trashcan for me?' to British English", function () {
    const text = "Can you toss this in the trashcan for me?";
    const expected = "Can you toss this in the bin for me?";
    const locale = locales["american-to-british"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'The parking lot was full.' to British English", function () {
    const text = "The parking lot was full.";
    const expected = "The car park was full.";
    const locale = locales["american-to-british"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'Like a high tech Rube Goldberg machine.' to British English", function () {
    const text = "Like a high tech Rube Goldberg machine.";
    const expected = "Like a high tech Heath Robinson device";
    const locale = locales["american-to-british"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'To play hooky means to skip class or work.' to British English", function () {
    const text = "To play hooky means to skip class or work.";
    const expected = "To bunk off means to skip school or work.";
    const locale = locales["american-to-british"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'No Mr. Bond, I expect you to die.' to British English", function () {
    const text = "No Mr. Bond, I expect you to die.";
    const expected = "No Mr Bond, I expect you to die.";
    const locale = locales["american-to-british"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'Dr. Grosh will see you now.' to British English", function () {
    const text = "Dr. Grosh will see you now.";
    const expected = "Dr Grosh will see you now.";
    const locale = locales["american-to-british"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'Lunch is at 12:15 today.' to British English", function () {
    const text = "Lunch is at 12:15 today.";
    const expected = "Lunch is at 12.15 today.";
    const locale = locales["american-to-british"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'We watched the footie match for a while.' to American English", function () {
    const text = "We watched the footie match for a while.";
    const expected = "We watched the soccer match for a while.";
    const locale = locales["british-to-american"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'Paracetamol takes up to an hour to work.' to American English", function () {
    const text = "Paracetamol takes up to an hour to work.";
    const expected = "Tylenol takes up to an hour to work.";
    const locale = locales["british-to-american"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'First, caramelise the onions.' to American English", function () {
    const text = "First, caramelise the onions.";
    const expected = "First, caramelize the onions.";
    const locale = locales["british-to-american"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'I spent the bank holiday at the funfair.' to American English", function () {
    const text = "I spent the bank holiday at the funfair.";
    const expected = "I spent the public holiday at the carnival.";
    const locale = locales["british-to-american"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'I had a bicky then went to the chippy.' to American English", function () {
    const text = "I had a bicky then went to the chippy.";
    const expected = "I had a cookie then went to the fish-and-chip shop.";
    const locale = locales["british-to-american"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'I've just got bits and bobs in my bum bag.' to American English", function () {
    const text = "I've just got bits and bobs in my bum bag.";
    const expected = "I've just got odds and ends in my fanny pack.";
    const locale = locales["british-to-american"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'The car boot sale at Boxted Airfield was called off.' to American English", function () {
    const text = "The car boot sale at Boxted Airfield was called off.";
    const expected = "The swap meet at Boxted Airfield was called off.";
    const locale = locales["british-to-american"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'Have you met Mrs Kalyani?' to American English", function () {
    const text = "Have you met Mrs Kalyani?";
    const expected = "Have you met Mrs. Kalyani?";
    const locale = locales["british-to-american"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'Prof Joyner of King's College, London.' to American English", function () {
    const text = "Prof Joyner of King's College, London.";
    const expected = "Prof. Joyner of King's College, London.";
    const locale = locales["british-to-american"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Translate 'Tea time is usually around 4 or 4.30.' to American English", function () {
    const text = "Tea time is usually around 4 or 4.30.";
    const expected = "Tea time is usually around 4 or 4:30.";
    const locale = locales["british-to-american"];
    const translation = translator.translate(text, locale);
    assert.equal(translation, expected);
  });

  test("Highlight translation in 'Mangoes are my favorite fruit.'", function () {
    const text = "Mangoes are my favorite fruit.";
    const expected = "Mangoes are my <span class=\"highlight\">favourite</span> fruit.";
    const locale = locales["british-to-american"];
    const highlighted = translator.translate(text, locale, true);
    assert.equal(highlighted, expected);
  });

  test("Highlight translation in 'I ate yogurt for breakfast.'", function () {
    const text = "I ate yogurt for breakfast.";
    const expected = "I ate <span class=\"highlight\">yoghurt</span> for breakfast.";
    const locale = locales["british-to-american"];
    const highlighted = translator.translate(text, locale, true);
    assert.equal(highlighted, expected);
  });

  test("Highlight translation in 'We watched the footie match for a while.'", function () {
    const text = "We watched the footie match for a while.";
    const expected = "We watched the <span class=\"highlight\">soccer</span> match for a while.";
    const locale = locales["british-to-american"];
    const highlighted = translator.translate(text, locale, true);
    assert.equal(highlighted, expected);
  });

  test("Highlight translation in 'Paracetamol takes up to an hour to work.'", function () {
    const text = "Paracetamol takes up to an hour to work.";
    const expected = "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.";
    const locale = locales["british-to-american"];
    const highlighted = translator.translate(text, locale, true);
    assert.equal(highlighted, expected);
  });
});
