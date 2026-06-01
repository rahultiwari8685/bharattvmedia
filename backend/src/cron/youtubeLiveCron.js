// import cron from "node-cron";
// import { checkLiveStatus } from "../services/youtubeService.js";
// import LiveStatus from "../models/LiveStatus.js";

// cron.schedule("*/60 * * * *", async () => {
//     console.log("🔄 Checking YouTube live status...");

//     const liveData = await checkLiveStatus();

//     await LiveStatus.findOneAndUpdate(
//         {},
//         {
//             isLive: liveData.isLive,
//             videoId: liveData.videoId || null,
//             updatedAt: new Date()
//         },
//         { upsert: true }
//     );
// });

import cron from "node-cron";
import { checkLiveStatus } from "../services/youtubeService.js";
import LiveStatus from "../models/LiveStatus.js";

let isRunning = false;

cron.schedule("0 * * * *", async () => {
  // every 1 hour ✅
  if (isRunning) {
    console.log("⚠️ Previous job still running, skipping...");
    return;
  }

  isRunning = true;

  try {
    console.log("🔄 Checking YouTube live status...");

    const liveData = await Promise.race([
      checkLiveStatus(),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 10000),
      ),
    ]);

    const existing = await LiveStatus.findOne();

    if (
      !existing ||
      existing.isLive !== liveData.isLive ||
      existing.videoId !== liveData.videoId
    ) {
      await LiveStatus.findOneAndUpdate(
        {},
        {
          isLive: liveData.isLive,
          videoId: liveData.videoId || null,
          updatedAt: new Date(),
        },
        { upsert: true },
      );

      console.log("✅ Updated");
    } else {
      console.log("⏭ No change");
    }
  } catch (error) {
    console.error("❌ Cron error:", error.message);
  } finally {
    isRunning = false;
  }
});
