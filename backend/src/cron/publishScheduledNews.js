import cron from "node-cron";
import News from "../models/News.js";

cron.schedule("* * * * *", async () => {
  try {
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

    if (result.modifiedCount > 0) {
      console.log(`${result.modifiedCount} scheduled news published`);
    }
  } catch (error) {
    console.error("Schedule publish error:", error);
  }
});
