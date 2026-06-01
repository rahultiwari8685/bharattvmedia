"use client";

import SectionTitle from "@/components/elements/TitleWhite";
import { useState, useEffect } from "react";
import setting from "../../../setting.json";

import ArticleCard12 from "@/components/cards/ArticleCard12";

export default function Section5() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(setting.api + "/api/news/getAllNews")
      .then((res) => res.json())
      .then((u) => {
        if (u.status !== false) {
          const textNews = u.data.filter(
            (item: any) => !item.youtubeUrl && item.type === 1,
          );
          const formattedData = textNews
            .slice(0, 5)
            .map((item: any, idx: number) => ({
              linkPost: `/single-2?slug=${item.slug}`,
              linkBadge: "#",
              linkAuthor: `/page-author/${item.author?._id}`,
              linkComment: "#",

              img: item.thumbnail
                ? item.thumbnail.startsWith("http")
                  ? item.thumbnail
                  : `${setting.api}/uploads/images/${item.thumbnail}`
                : "/assets/imgs/page/img-66.png",

              badge: item.categories?.[0]?.name || "News",
              bgBadge: `bg-${(idx % 5) + 1}`,
              title: item.title || "No Title",
              description: item.subtitle || "No Description",
              imgAuthor: "/assets/imgs/template/author/author-1.png",
              author: item.author?.name || "Admin",
              date: new Date(item.createdAt).toDateString(),

              comment: "0",
              readNum: "0",
            }));

          setBlogs(formattedData);
        } else {
          setBlogs([]);
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
        setBlogs([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <section className="sec-5-home-2 sec-padding overflow-hidden">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <SectionTitle
              title="Latest news"
              description="Fresh Stories. Fast Updates."
            />
          </div>
        </div>

        {/* News List */}
        <div className="row mt-2 g-4">
          {blogs.map((card, idx) => (
            <div className="col-12" key={idx}>
              <ArticleCard12 card={card} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
