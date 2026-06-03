import cron from "node-cron";
import News from "../models/News.js";

console.log("✅ publishScheduledNews.js loaded");

cron.schedule("* * * * *", async () => {
  console.log("✅ CRON RUNNING");

  const now = new Date();

  const result = await News.updateMany(
    {
      type: 3,
      scheduledAt: { $lte: now },
    },
    {
      $set: {
        type: 1,
        isScheduled: false,
      },
    },
  );

  console.log("Published:", result.modifiedCount);
});
