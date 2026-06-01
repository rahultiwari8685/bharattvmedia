"use client";

import { useEffect, useRef, useState } from "react";

import ArticleCard7 from "@/components/cards/ArticleCard7";
import SwiperDynamic from "@/components/shared/SwiperDynamic";
import { useTabs } from "@/util/useTabs";

import setting from "@/setting.json";

type CategoryType = {
  id: string;
  label: string;
  slug: string;
};

type CardType = {
  linkPost: string;
  img: string;
  title: string;
  readTime: string;
  classBadge1: string;
  classBadge2: string;
  badge1: string;
  badge2: string;
  linkVideo: string;
  layoutVideo: string;
  description: string;
  linkBadge: string;
};

export default function Section3Interactive() {
  const [allNews, setAllNews] = useState<any[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(false);

  const boxSwiperPaddingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);

    fetch(setting.api + "/api/news/getAllNews")
      .then((res) => res.json())
      .then((u) => {
        if (u.status !== false) {
          const newsData = u.data || [];

          setAllNews(newsData);

          const uniqueCategories: CategoryType[] = [];

          newsData.forEach((item: any, index: number) => {
            item.categories?.forEach((cat: any) => {
              const exists = uniqueCategories.find((c) => c.slug === cat.name);

              if (!exists) {
                uniqueCategories.push({
                  id: `tab${index}-${cat._id || cat.name}`,
                  label: cat.name,
                  slug: cat.name,
                });
              }
            });
          });

          setCategories(uniqueCategories);

          if (uniqueCategories.length > 0) {
            setActiveTab(uniqueCategories[0].slug);
          }
        } else {
          setAllNews([]);
          setCategories([]);
        }
      })
      .catch((err) => {
        console.log("API Error:", err);

        setAllNews([]);
        setCategories([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const swiperParams = {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,

    autoplay: {
      delay: 5000,
      reverseDirection: true,
    },

    breakpoints: {
      1200: { slidesPerView: 3 },
      992: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      576: { slidesPerView: 1 },
      0: { slidesPerView: 1 },
    },

    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  };

  const currentTabData: CardType[] = allNews

    .filter((item: any) =>
      item.categories?.some(
        (cat: any) => cat.name?.toLowerCase() === activeTab.toLowerCase(),
      ),
    )

    .slice(0, 10)

    .map((item: any, idx: number) => ({
      linkPost: `/single-2?slug=${item.slug}`,

      // img: item.thumbnail
      //   ? `${setting.api}/uploads/images/${item.thumbnail}`
      //   : "/assets/imgs/page/img-1.png",

      // img: item.thumbnail || "/assets/imgs/page/img-1.png",
      img: item.thumbnail
        ? item.thumbnail.startsWith("http")
          ? item.thumbnail
          : `${setting.api}/uploads/images/${item.thumbnail}`
        : "/assets/imgs/page/img-1.png",

      title: item.title || "No Title",

      readTime: "5 mins read",

      classBadge1: `bg-${(idx % 5) + 1}`,

      classBadge2: "bg-dark",

      badge1: item.categories?.[0]?.name || "News",

      badge2: "Trending",

      linkVideo: item.youtubeUrl || "",

      layoutVideo: item.youtubeUrl ? "d-flex" : "d-none",

      description: item.subtitle || "No Description",

      linkBadge: "#",
    }));

  return (
    <div className="row">
      {/* ✅ LEFT CATEGORY TABS */}
      <div className="col-lg-3">
        <ul className="nav nav-tabs d-flex flex-lg-column flex-row flex-wrap ps-0 ps-lg-5">
          {categories.slice(0, 10).map((tab) => (
            <li className="nav-item" key={tab.id}>
              <a
                href="#"
                className={`nav-link${activeTab === tab.slug ? " active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.slug);
                }}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ POSTS */}
      <div className="col-lg-9">
        <div className="box-swiper-padding" ref={boxSwiperPaddingRef}>
          {loading ? (
            <div className="text-center py-5">Loading...</div>
          ) : currentTabData.length > 0 ? (
            <SwiperDynamic className="swiper slider-3" {...swiperParams}>
              {currentTabData.map((card, idx) => (
                <div key={idx}>
                  <ArticleCard7 card={card} idx={idx} />
                </div>
              ))}
            </SwiperDynamic>
          ) : (
            <div className="text-center py-5">No Posts Found</div>
          )}
        </div>
      </div>
    </div>
  );
}
