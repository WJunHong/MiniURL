const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  urlId: {
    type: String,
    required: true,
  },
  fullUrl: {
    type: String,
    required: true,
  },
  miniUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Url", UrlSchema);
