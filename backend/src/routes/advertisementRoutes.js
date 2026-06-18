import express from "express";
import upload from "../middlewares/upload.js";

import {
  createAdvertisement,
  getAllAdvertisements,
  getAdvertisement,
  updateAdvertisement,
  deleteAdvertisement,
  changeStatus,
  getAdvertisementsByPosition,
  increaseView,
  increaseClick,
} from "../controllers/advertisementController.js";

const router = express.Router();

// ===============================
// Create Advertisement
// ===============================
router.post("/create", upload.single("image"), createAdvertisement);

// ===============================
// Get All Advertisements
// ===============================
router.get("/", getAllAdvertisements);

// ===============================
// Get Advertisement by Position
// Example:
// /api/advertisements/position/homepage_top
// ===============================
router.get("/position/:position", getAdvertisementsByPosition);

// ===============================
// Increase View
// ===============================
router.post("/view/:id", increaseView);

// ===============================
// Increase Click
// ===============================
router.post("/click/:id", increaseClick);

// ===============================
// Get Single Advertisement
// ===============================
router.get("/:id", getAdvertisement);

// ===============================
// Update Advertisement
// ===============================
router.put("/:id", upload.single("image"), updateAdvertisement);

// ===============================
// Change Status
// ===============================
router.patch("/status/:id", changeStatus);

// ===============================
// Delete Advertisement
// ===============================
router.delete("/:id", deleteAdvertisement);

export default router;
