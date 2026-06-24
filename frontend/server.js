import express from "express";
import fs from "fs";
import path from "path";
import axios from "axios";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST = path.join(__dirname, "dist");
const INDEX = path.join(DIST, "index.html");

app.use(express.static(DIST));

const BOT_REGEX =
  /facebookexternalhit|Facebot|Twitterbot|WhatsApp|TelegramBot|LinkedInBot|Slackbot|Discordbot|Googlebot/i;

app.get("/news/:slug", async (req, res) => {
  let html = fs.readFileSync(INDEX, "utf8");

  // Browser → return normal React app
  if (!BOT_REGEX.test(req.headers["user-agent"] || "")) {
    return res.send(html);
  }

  try {
    const { data } = await axios.get(
      `https://api.bharattvmedia.com/api/news/slug/${req.params.slug}`,
    );

    if (!data.status) {
      return res.send(html);
    }

    const news = data.data;

    const image = `https://api.bharattvmedia.com/uploads/images/${news.thumbnail}`;

    const tags = `
<title>${news.metaTitle || news.title}</title>

<meta name="description" content="${news.metaDescription || news.subtitle || ""}">

<meta property="og:type" content="article">
<meta property="og:title" content="${news.title}">
<meta property="og:description" content="${news.metaDescription || news.subtitle || ""}">
<meta property="og:image" content="${image}">
<meta property="og:url" content="https://bharattvmedia.com/news/${news.slug}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${news.title}">
<meta name="twitter:description" content="${news.metaDescription || news.subtitle || ""}">
<meta name="twitter:image" content="${image}">
`;

    html = html.replace("</head>", tags + "</head>");

    return res.send(html);
  } catch (err) {
    console.log(err.message);
    return res.send(html);
  }
});

// React routes
app.get("*", (req, res) => {
  res.sendFile(INDEX);
});

app.listen(3005, () => {
  console.log("Frontend running on port 3005");
});
