"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ArticleCard10 from "@/components/cards/ArticleCard10";
import SideBarInteractive from "./SideBarInteractive";
import SwiperDynamic from "@/components/shared/SwiperDynamic";
import cardCollections from "@/public/data/cardHome-1.json";
import setting from "@/setting.json";

export default function SideBarServer() {
  const cardSideBarData = cardCollections.cardSideBar;

  const [loading, setLoading] = useState(false);

  const [cardSideBar, setCardSideBar] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);

    fetch(setting.api + "/api/news/getAllNews")
      .then((res) => res.json())
      .then((u) => {
        if (u.status !== false) {
          // ✅ FILTER TEXT NEWS
          const textNews = u.data.filter((item: any) => !item.youtubeUrl);

          // ✅ DYNAMIC POPULAR POSTS
          const formattedSidebar = textNews.slice(0, 4).map((item: any) => ({
            fontSize: "fs-7",

            style: "style-2",

            // img: item.thumbnail || "/assets/imgs/other/img-other-4.png",
            img: item.thumbnail
              ? `${setting.api}/uploads/images/${item.thumbnail}`
              : "/assets/imgs/other/img-other-4.png",

            // If uploads folder image use this:
            // img: item.thumbnail
            // ? `${setting.api}/uploads/images/${item.thumbnail}`
            // : "/assets/imgs/other/img-other-4.png",

            link: `/single-2?slug=${item.slug}`,

            title: item.title || "No Title",

            date: new Date(item.createdAt).toDateString(),

            time: "6 mins read",
          }));

          setCardSideBar(formattedSidebar);
        } else {
          setCardSideBar([]);
        }
      })
      .catch((err) => {
        console.log("API Error:", err);

        setCardSideBar([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="sidebar-left">
        <div className="header-sidebar d-flex align-items-center justify-content-between py-3">
          <Link
            href="/"
            className="sidebar-brand fw-bold fs-3 dark-mode-invert"
          >
            <Image
              src="/assets/imgs/template/logo/top-dark.png"
              width={143}
              height={18}
              alt="logo"
            />
          </Link>
          <a href="#" className="close-sidebar">
            <svg
              className="dark-mode-invert"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.25 6.75L6.75 17.25"
                stroke="#0E0E0F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.75 6.75L17.25 17.25"
                stroke="#0E0E0F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Client component for interactive navigation */}
        <SideBarInteractive />

        <div className="block-popular">
          <h5>Popular posts</h5>
          <div className="popular-posts">
            {cardSideBar.map((card, idx) => (
              <ArticleCard10 key={idx} card={card} idx={idx} />
            ))}
          </div>
          {/* <div className="mt-5">
            <SwiperDynamic
              className="swiper rounded-16"
              slidesPerView={1}
              spaceBetween={15}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true, el: ".swiper-pagination" }}
            >
              <Image
                className="w-100 rounded-16 overflow-hidden"
                src="/assets/imgs/other/img-other-8.png"
                alt="magzin"
                width={363}
                height={217}
              />
              <Image
                className="w-100 rounded-16 overflow-hidden"
                src="/assets/imgs/other/img-other-8-1.png"
                alt="magzin"
                width={363}
                height={217}
              />
              <Image
                className="w-100 rounded-16 overflow-hidden"
                src="/assets/imgs/other/img-other-8-2.png"
                alt="magzin"
                width={363}
                height={217}
              />
            </SwiperDynamic>
            <div className="swiper-pagination mb-3" />
          </div> */}
        </div>

        <div className="sidebar-footer">
          <div>
            <div className="d-flex align-items-center">
              <svg
                className="dark-mode-invert"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                  stroke="#0E0E0F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 6.5L12 12.25L18.5 6.5"
                  stroke="#0E0E0F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="fs-7 fw-semibold">Newsletter</span>
            </div>
            <h5 className="my-2">Subscribe our newsletter</h5>
            <p>
              You'll only receive updates on new templates, no spam, just what
              you signed up for.
            </p>
          </div>
          <form action="#" className="w-auto">
            <input
              type="email"
              className="form-control fs-7 mb-2 w-100"
              placeholder="Your email address"
            />
            <button type="submit" className="btn btn-dark w-100">
              Subscribe
            </button>
          </form>
        </div>

        <div className="text-center">
          <p className="fs-7">
            2026 Copyright @{" "}
            <span className="text-dark">Top Headlines News.</span>{" "}
            <br className="d-none d-lg-block" />
            <span> All Rights Reserved </span>
          </p>
        </div>
      </div>
      <div className="sidebar-overlay" />
    </>
  );
}
