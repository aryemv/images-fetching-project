import express from "express";
import {
  fetchImagesSortedById,
  fetchImages,
} from "../controllers/imagesController.js";

const router = express.Router();

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

  try {
    const response = await fetchImages(category, page, per_page, sort);
    res.json(response);
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

  try {
    const response = await fetchImagesSortedById(category, page, per_page);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

export default router;
