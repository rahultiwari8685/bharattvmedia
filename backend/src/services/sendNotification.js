import { Expo } from "expo-server-sdk";

const expo = new Expo();

export async function sendNotification(tokens, news) {
  const messages = [];

  for (const token of tokens) {
    if (!Expo.isExpoPushToken(token)) {
      console.log("❌ Invalid Expo Token:", token);
      continue;
    }

    console.log("📱 Sending To:", token);

    messages.push({
      to: token,
      sound: "default",

      title: "Top Headlines",

      body: news.title,

      image: `https://api.hindustantvlive.com/uploads/images/${news.thumbnail}`,

      mutableContent: true,

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
      console.log("Sending Chunk:");
      console.log(JSON.stringify(chunk, null, 2));

      const response = await expo.sendPushNotificationsAsync(chunk);

      console.log("========== Expo Response ==========");
      console.log(JSON.stringify(response, null, 2));
      console.log("===================================");

      // Print every ticket separately
      response.forEach((ticket, index) => {
        console.log(`Ticket ${index + 1}:`);
        console.log(ticket);
      });
    } catch (err) {
      console.log("❌ Expo Send Error:");
      console.log(err);
    }
  }
}
