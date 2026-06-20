import express from "express";
import upload from "../middlewares/upload.js";

import {
  createNews,
  getNews,
  getNewsBySlug,
  updateNews,
  getNewsById,
  getAllNewsByCategory,
  getAllNewsByAuthorId,
  deleteNews,
  autoSaveNews,
  increaseView,
  getTrendingNews,
  getPopularNews,
  getVideoNews,
} from "../controllers/newsController.js";

const router = express.Router();

router.post("/saveNews", upload.single("thumbnail"), createNews);

router.post("/updateNews", upload.single("thumbnail"), updateNews);

router.get("/getAllNews", getNews);
// router.get("/news/category/:categoryId", getAllNewsByCategory);
router.get("/category/:categoryId", getAllNewsByCategory);
// router.get("/:slug", getNewsBySlug);

router.get("/slug/:slug", getNewsBySlug);
router.get("/id/:id", getNewsById);

router.delete("/deleteNews/:id", deleteNews);
router.post("/view/:id", increaseView);

router.get("/getAllNewsByAuthorId/:authorId", getAllNewsByAuthorId);

router.post("/auto-save", upload.single("thumbnail"), autoSaveNews);

router.get("/trending", getTrendingNews);

router.get("/popular", getPopularNews);
router.get("/videos", getVideoNews);
export default router;
