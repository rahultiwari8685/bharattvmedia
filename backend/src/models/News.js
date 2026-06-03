import mongoose from "mongoose";
import { slugify } from "transliteration";

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },

    slug: { type: String, unique: true, sparse: true },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],

    content: { type: Object, default: {} },

    // type: {
    //   type: Number,
    //   enum: [1, 2],
    //   default: 2,
    // },

    type: {
      type: Number,
      enum: [1, 2, 3],
      default: 2,
    },

    scheduledAt: {
      type: Date,
      default: null,
    },

    isScheduled: {
      type: Boolean,
      default: false,
    },

    youtubeUrl: { type: String, default: "" },

    videoType: { type: Number, default: 0 },

    thumbnail: { type: String, default: "" },
  },
  { timestamps: true },
);

newsSchema.index({ title: 1, author: 1 }, { unique: true });

newsSchema.pre("save", async function (next) {
  if (this.title) {
    // ✅ Direct Hindi → English slug
    let baseSlug = slugify(this.title, {
      lower: true,
      strict: true,
    });

    let slug = baseSlug;
    let counter = 1;

    // ✅ UNIQUE SLUG
    while (
      await mongoose.models.News.findOne({
        slug,
        _id: { $ne: this._id },
      })
    ) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    this.slug = slug;
  }

  next();
});

export default mongoose.model("News", newsSchema);
