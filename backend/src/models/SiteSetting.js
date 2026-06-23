const mongoose = require("mongoose");

const SiteSettingSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      required: true,
    },

    headerLogo: String,

    footerLogo: String,

    favicon: String,

    metaTitle: String,

    metaDescription: String,

    metaKeywords: String,

    facebook: String,

    twitter: String,

    instagram: String,

    youtube: String,

    linkedin: String,

    email: String,

    phone: String,

    address: String,

    copyright: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("SiteSetting", SiteSettingSchema);
