const express = require("express");
const router = express.Router();

const PIXABAY_API_KEY = "25540812-faf2b76d586c1787d2dd02736";
const BASE_URL = "https://pixabay.com/api/";

router.get("/", async (req, res) => {
  /*get the request params:
    category: the category to fetch
    page: the page number to fetch
    per_page: the amount of items to fetch
    sort: the way the data should be sorted
  */
  const {
    category = "sport",
    page = 1,
    per_page = 9,
    sort = "popular",
  } = req.query;

  //fetch the data
  try {
    const response = await fetch(
      `${BASE_URL}?key=${PIXABAY_API_KEY}&q=${category}&page=${page}&per_page=${per_page}&order=${sort}`
    );
    const data = await response.json();

    //send the "hits" part as a response
    res.json(data.hits);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

router.get("/sortById", async (req, res) => {
  /*get the request params:
    category: the category to fetch
    page: the page number to fetch
    per_page: the amount of items to fetch
  */
  const { category = "sport", page = 1, per_page = 9 } = req.query;

  //fetch the data
  try {
    const response = await fetch(
      `${BASE_URL}?key=${PIXABAY_API_KEY}&q=${category}&page=${page}&per_page=${per_page}`
    );
    const data = await response.json();

    //send the "hits" part as a response, sorted ascending by id
    res.json(data.hits.sort((a, b) => a.id - b.id));
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

module.exports = router;
