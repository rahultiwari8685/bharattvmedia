import mongoose from "mongoose";

const NotificationTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    unique: true,
  },

  platform: {
    type: String,
    default: "android",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("NotificationToken", NotificationTokenSchema);
