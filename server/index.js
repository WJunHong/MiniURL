const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const shortid = require("shortid");
const Url = require("./Url");
const utils = require("./util");

// configure dotenv
dotenv.config();
const app = express();
// cors for cross-origin requests to the frontend application
app.use(
  cors({
    origin: [process.env.CONN_URL],
  })
);
// parse requests of content-type - application/json
app.use(express.json());

// Database connection
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

// URL shortener endpoint
app.post("/post/short", async (req, res) => {
  const { fullUrl } = req.body;
  const base = process.env.CONN_URL;

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

// redirect endpoint
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

// Port Listenning on 3333
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
