const express = require("express");
const {
  handleShortUrlGenerator,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleShortUrlGenerator);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
