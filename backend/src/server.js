import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import authRoutes from "./routes/auth.js";
import advertisementRoutes from "./routes/advertisementRoutes.js";
import rateLimit from "express-rate-limit";
import goldRoutes from "./routes/gold.js";
import "./cron/publishScheduledNews.js";
const app = express();

app.set("trust proxy", 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5000,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests, please try again later",
  },
});

app.use(
  "/api/auth",
  rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 20,
  }),
);

app.use("/api", limiter);

const allowedOrigins = [
  "https://bharattvmedia.com",
  "https://admin.bharattvmedia.com",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json({ limit: "1mb" }));

app.use("/uploads", express.static("uploads"));

app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/news", newsRoutes);

app.use("/api/auth", authRoutes);
app.use("/api", goldRoutes);
app.use("/api/advertisements", advertisementRoutes);
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI from env:", MONGO_URI);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err.message));

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
