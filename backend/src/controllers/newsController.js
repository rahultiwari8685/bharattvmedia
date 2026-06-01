import mongoose from "mongoose";
import News from "../models/News.js";

export const createNews = async (req, res) => {
  try {
    const { title, sub_title, video_type, youtube_url, content, type } =
      req.body;

    let categories = [];

    try {
      categories = JSON.parse(req.body.categories || "[]");
    } catch (err) {
      categories = [];
    }

    categories = categories.map((id) => new mongoose.Types.ObjectId(id));

    const existingNews = await News.findOne({
      title: title.trim(),
      author: req.body.author,
      type: 1, // ✅ only published news
    });

    const createdNews = await News.create({
      title,
      subtitle: sub_title,

      // author: req.author,
      author: req.body.author,

      categories,

      videoType: video_type,

      youtubeUrl: youtube_url || "",

      content: content || "",
      type: Number(type),

      thumbnail: req.file?.filename || "",
    });

    // populate author after create
    const news = await News.findById(createdNews._id)
      .populate("author", "name email")
      .populate("categories", "name");

    return res.status(201).json({
      status: true,
      message: "News created successfully",
      data: news,
    });
  } catch (error) {
    console.error("Create News Error:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        status: false,
        message: "News already exists",
      });
    }

    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const getNews = async (req, res) => {
  try {
    const news = await News.find()
      .populate("author", "name email")
      .populate("categories", "name")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      status: true,
      data: news,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const getAllNewsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { page = 1, limit = 6 } = req.query;

    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        status: false,
        message: "Invalid category ID",
      });
    }

    const skip = (page - 1) * limit;

    const news = await News.find({
      categories: { $in: [categoryId] },
    })
      // .populate("categories", "name slug")
      .populate("categories", "name slug _id")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await News.countDocuments({
      categories: { $in: [categoryId] },
    });

    return res.status(200).json({
      status: true,
      totalPages: Math.ceil(total / limit),
      total,
      data: news,
    });
  } catch (error) {
    console.error("Get News By Category Error:", error);
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const getNewsBySlug = async (req, res) => {
  try {
    const news = await News.findOne({ slug: req.params.slug })
      .populate("author", "name email")
      .populate("categories", "name slug");

    if (!news) {
      return res.status(404).json({
        status: false,
        message: "News not found",
      });
    }

    return res.status(200).json({
      status: true,
      data: news,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;

    const news = await News.findById(id).populate("categories", "name slug");

    if (!news) {
      return res.status(404).json({
        status: false,
        message: "News not found",
      });
    }

    return res.status(200).json({
      status: true,
      data: news,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const updateNews = async (req, res) => {
  try {
    const { id, title, sub_title, video_type, youtube_url, content, type } =
      req.body;

    // ✅ SAFE PARSE
    let categories = [];
    try {
      categories = JSON.parse(req.body.categories || "[]");
    } catch (err) {
      categories = [];
    }

    // ✅ CONVERT TO OBJECTID
    categories = categories.map((id) => new mongoose.Types.ObjectId(id));

    const existingNews = await News.findOne({
      title: title.trim(),
      author: req.body.author,
      _id: { $ne: id },
      type: 1,
    });

    if (existingNews) {
      return res.status(400).json({
        status: false,
        message: "News already exists",
      });
    }

    const updateData = {
      title,
      subtitle: sub_title,
      categories,
      videoType: video_type,

      youtubeUrl: youtube_url || "",

      // ✅ update content
      content: content || "",

      // ✅ publish draft
      type: Number(type),
    };

    if (req.file) {
      updateData.thumbnail = req.file.filename;
    }

    const updated = await News.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return res.status(200).json({
      status: true,
      message: "News updated successfully",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      status: true,
      message: "News deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const getAllNewsByAuthorId = async (req, res) => {
  try {
    const { authorId } = req.params;

    const { page = 1, limit = 10 } = req.query;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({
        status: false,
        message: "Invalid author ID",
      });
    }

    const skip = (page - 1) * limit;

    // Get News
    const news = await News.find({
      author: authorId,
    })
      .populate("author", "name email profileImage")
      .populate("categories", "name slug")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    // Total Count
    const total = await News.countDocuments({
      author: authorId,
    });

    return res.status(200).json({
      status: true,
      totalPages: Math.ceil(total / limit),
      total,
      data: news,
    });
  } catch (error) {
    console.error("Get News By Author Error:", error);

    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const autoSaveNews = async (req, res) => {
  try {
    const { title, subtitle, categories, videoType, content, type } = req.body;

    // ❌ Skip translate for auto draft
    if (Number(type) === 2) {
      console.log("Draft auto-save: translation skipped");
    }

    let parsedCategories = [];

    try {
      parsedCategories = categories || [];
    } catch (err) {
      parsedCategories = [];
    }

    parsedCategories = parsedCategories.map(
      (id) => new mongoose.Types.ObjectId(id),
    );

    let draft = await News.findOne({
      author: req.body.author,
      type: 2,
    }).sort({ updatedAt: -1 });

    if (draft) {
      draft.title = title;
      draft.subtitle = subtitle;
      draft.categories = parsedCategories;
      draft.videoType = videoType;

      draft.content =
        typeof content === "string" ? content : JSON.stringify(content);

      // Clear old media
      draft.thumbnail = "";
      draft.youtubeUrl = "";

      await draft.save();
    } else {
      draft = await News.create({
        title,
        subtitle,
        categories: parsedCategories,
        videoType: videoType,

        content:
          typeof content === "string" ? content : JSON.stringify(content),

        type: 2,
        author: req.body.author,

        // Empty media for auto draft
        thumbnail: "",
        youtubeUrl: "",
      });
    }

    res.json({
      status: true,
      message: "Draft auto-saved",
      data: draft,
    });
  } catch (error) {
    console.error("AUTO SAVE ERROR:", error);

    res.status(500).json({
      status: false,
      message: "Auto save failed",
      error: error.message,
    });
  }
};
