const urlCheck = require("../util");

test("Test positive case: www.google.com", () => {
  expect(urlCheck.validateUrl("https://www.google.com")).toBeTruthy();
});

test("Test negative case: wwww.google.com", () => {
  expect(urlCheck.validateUrl("wwwwwwwwwwww.google.com")).toBeUndefined();
});
