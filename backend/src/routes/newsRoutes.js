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

router.get("/getAllNewsByAuthorId/:authorId", getAllNewsByAuthorId);

router.post("/auto-save", upload.single("thumbnail"), autoSaveNews);
export default router;
