import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = (folder) => {
  const dir = path.join(process.cwd(), "uploads", folder);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return dir;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "";

    if (file.mimetype === "application/pdf") {
      folder = "reports";
    } else if (file.mimetype.startsWith("image/")) {
      folder = req.baseUrl.includes("advertisements")
        ? "advertisements"
        : "images";
    } else {
      return cb(new Error("Unsupported file type"));
    }

    cb(null, uploadDir(folder));
  },

  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});

export default multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});
