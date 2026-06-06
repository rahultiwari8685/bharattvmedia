import React from "react";
import "@/public/assets/css/vendors/bootstrap-grid.min.css";

import "@/public/assets/css/vendors/swiper-bundle.min.css";
import "@/public/assets/css/vendors/carouselTicker.css";
import "@/public/assets/css/main.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

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
    title: "Top Headlines News",
    description: "Top Headlines News",
    url: "https://topheadlinesnews.com",
    siteName: "Top Headlines News",
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

        <GoogleAnalytics gaId="G-SJZHFX4HZ4" />
      </body>
    </html>
  );
}
