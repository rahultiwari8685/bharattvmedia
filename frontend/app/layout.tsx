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

export const metadata: Metadata = {
  metadataBase: new URL("https://bharattvmedia.com"),

  title: {
    default: "Bharat TV Media",
    template: "%s | Bharat TV Media",
  },

  description: "Bharat TV Media",

  openGraph: {
    siteName: "Bharat TV Media",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
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
