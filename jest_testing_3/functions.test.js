const { verifyPassword } = require("./functions");

test("testing verifyPassword", () => {
  expect(verifyPassword("Henkie1@")).toBe(true);
});

test("testing verifyPassword", () => {
  expect(verifyPassword("")).toBe(false);
});
