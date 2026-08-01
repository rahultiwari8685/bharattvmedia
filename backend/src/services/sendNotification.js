import { Expo } from "expo-server-sdk";

const expo = new Expo();

export async function sendNotification(tokens, news) {
  const messages = [];

  for (const token of tokens) {
    if (!Expo.isExpoPushToken(token)) {
      console.log("Invalid Expo Token:", token);
      continue;
    }

    messages.push({
      to: token,
      sound: "default",
      title: "Top Headlines",
      body: news.title,
      data: {
        slug: news.slug,
        newsId: news._id.toString(),
      },
    });
  }

  const chunks = expo.chunkPushNotifications(messages);

  for (const chunk of chunks) {
    try {
      await expo.sendPushNotificationsAsync(chunk);
    } catch (err) {
      console.log(err);
    }
  }
}
