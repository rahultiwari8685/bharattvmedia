import { Expo } from "expo-server-sdk";

const expo = new Expo();

export async function sendNotification(tokens, news) {
  const messages = [];

  for (const token of tokens) {
    if (!Expo.isExpoPushToken(token)) {
      console.log("❌ Invalid Expo Token:", token);
      continue;
    }

    messages.push({
      to: token,
      sound: "default",

      title: "Top Headlines",

      body: news.title,

      image: `https://api.hindustantvlive.com/uploads/images/${news.thumbnail}`,

      data: {
        slug: news.slug,
        newsId: news._id.toString(),
      },
    });
  }

  console.log("==================================");
  console.log("Messages To Send:");
  console.log(JSON.stringify(messages, null, 2));
  console.log("==================================");

  const chunks = expo.chunkPushNotifications(messages);

  for (const chunk of chunks) {
    try {
      const response = await expo.sendPushNotificationsAsync(chunk);

      console.log("========== Expo Response ==========");
      console.log(JSON.stringify(response, null, 2));
      console.log("===================================");
    } catch (err) {
      console.log("Expo Send Error:");
      console.log(err);
    }
  }
}
