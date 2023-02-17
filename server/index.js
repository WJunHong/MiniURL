const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const shortid = require("shortid");
const Url = require("./Url");
const utils = require("./Utils/util");

// configure dotenv
dotenv.config();
const app = express();
// allows frontend to accept backend as origin
app.use(
  cors({
    origin: [`${process.env.CONN_URL}`],
  })
);
// parses json request and places inside req.body
app.use(express.json());

// Connect to Mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((err) => {
    console.log(err.message);
  });

// Executes async callback function when a post request is received
app.post("/post/short", async (req, res) => {
  const { fullUrl } = req.body;
  const base = process.env.SERVER_URL;
  const urlId = shortid.generate();

  if (utils.validateUrl(fullUrl)) {
    try {
      let foundUrl = await Url.findOne({ fullUrl }).select({
        miniUrl: 1,
        fullUrl: 1,
      });
      if (foundUrl) {
        console.log(foundUrl);
        res.json(foundUrl);
      } else {
        const miniUrl = `${base}/${urlId}`;

        urlDoc = new Url({
          fullUrl,
          miniUrl,
          urlId,
        });

        await urlDoc.save();
        res.json({ fullUrl: fullUrl, miniUrl: miniUrl });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid Url!");
  }
});

//  Executes async callback function when a get request is received for a specific mini url of urlId
// :urlId comes from req.params.urlId, when a user visits the link
app.get("/:urlId", async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      return res.redirect(url.fullUrl);
    } else res.status(404).json("Page not found!");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
});

// Listen on 3333 for development, and on whatever port is specified when in deployment
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
