const wordLengths = require("./get-word-lengths.js");

test("Get word lengths", function () {
  const words = ["friet", "patat", "aardappel", "grond"];
  const expected = [5, 5, 9, 5];

  const output = wordLengths(words);
  expect(output).toEqual(expected);
});
