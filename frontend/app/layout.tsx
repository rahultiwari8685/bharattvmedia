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

export const metadata: Metadata = {
  title: "Bharat TV Media ",
  description: "Bharat TV Media",
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

        <GoogleAnalytics gaId="G-KFDT2ZZ2L1" />
      </body>
    </html>
  );
}
