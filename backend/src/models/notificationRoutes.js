import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  token: {
    type: String,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("NotificationToken", NotificationSchema);
