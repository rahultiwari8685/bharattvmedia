import React from "react";
import "@/public/assets/css/vendors/bootstrap-grid.min.css";

import "@/public/assets/css/vendors/swiper-bundle.min.css";
import "@/public/assets/css/vendors/carouselTicker.css";
import "@/public/assets/css/main.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "remixicon/fonts/remixicon.css";
const geist = Geist({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Bharat TV Media",
//   description: "Bharat TV Media",
// };

export const metadata: Metadata = {
  title: "Bharat TV Media",
  description: "Bharat TV Media",

  openGraph: {
    title: "Bharat TV Media",
    description: "Bharat TV Media",
    url: "https://bharattvmedia.com",
    siteName: "Bharat TV Media",
    images: [
      {
        url: "https://bharattvmedia.com/assets/imgs/template/logo/Bharat_Logo.png",
        width: 1200,
        height: 630,
        alt: "Top Headlines News",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Headlines News",
    description: "Top Headlines News",
    images: ["https://topheadlinesnews.com/assets/imgs/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className}`}>
        {children}
        {/* <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        /> */}
        <GoogleAnalytics gaId="G-SJZHFX4HZ4" />
      </body>
    </html>
  );
}
