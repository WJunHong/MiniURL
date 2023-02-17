const validUrl = require("valid-url");

function validateUrl(url) {
  return validUrl.isUri(url);
}

module.exports = { validateUrl };
