import express from "express";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/ckeditor", upload.single("upload"), (req, res) => {
  if (!req.file) {
    return res.json({
      uploaded: 0,
      error: {
        message: "No image uploaded",
      },
    });
  }

  return res.json({
    uploaded: 1,
    fileName: req.file.filename,
    url: `https://api.bharattvmedia.com/uploads/images/${req.file.filename}`,
  });
});

export default router;
