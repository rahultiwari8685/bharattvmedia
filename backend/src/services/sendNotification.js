import admin from "../config/firebase.js";
import NotificationToken from "../models/NotificationToken.js";

export async function sendNotificationToAll(news) {
  try {
    const users = await NotificationToken.find();

    if (!users.length) {
      console.log("No device tokens found.");
      return;
    }

    for (const user of users) {
      try {
        await admin.messaging().send({
          token: user.token,

          notification: {
            title: news.title,
            body: news.subtitle || "",
          },

          data: {
            slug: news.slug,
            newsId: news._id.toString(),
          },
        });

        console.log("Notification Sent:", user.token);
      } catch (err) {
        console.log("Notification Error:", err.message);
      }
    }
  } catch (err) {
    console.log(err);
  }
}
