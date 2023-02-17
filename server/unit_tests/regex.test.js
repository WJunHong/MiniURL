const urlCheck = require("../Utils/util");

test("Test positive case: www.google.com. Expected: True", () => {
  expect(urlCheck.validateUrl("https://www.google.com")).toBeTruthy();
});

test("Test negative case: wwww.google.com. Expected: False", () => {
  expect(urlCheck.validateUrl("wwwwwwwwwwww.google.com")).toBeUndefined();
});
