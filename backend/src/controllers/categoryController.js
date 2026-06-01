import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
  try {
    let { name, parentCategory, showInMenu, meta_title, meta_desc } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    if (!parentCategory || parentCategory === "0") {
      parentCategory = null;
    }

    const category = await Category.create({
      name,
      parentCategory,
      meta_title,
      meta_desc,
      showInMenu,
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()
      .populate("parentCategory", "name slug")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id, name, parentCategory, showInMenu } = req.body;

    const bannerImage = req.file ? req.file.filename : "";

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Category ID required" });
    }

    const updateData = {
      parentCategory: parentCategory || null,
      showInMenu,
      bannerImage,
    };

    if (name) {
      updateData.name = name;
    }

    const updated = await Category.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Category ID is required" });
    }

    const deleted = await Category.findByIdAndDelete(id);

    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: deleted,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
