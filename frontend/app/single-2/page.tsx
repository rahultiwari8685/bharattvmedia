"use client";

import { useEffect, useState } from "react";

import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/single-2/Section1";
import Ads_sm from "@/components/elements/ads_sm";
import ArticleCard5 from "@/components/cards/ArticleCard5";

import setting from "@/setting.json";

type RelatedArticleType = {
  cornerBgColor: string;
  img: string;
  linkBadge: string;
  linkPost: string;
  badge: string;
  bgBadge: string;
  title: string;
};

export default function Single_2() {
  const [relatedArticles, setRelatedArticles] = useState<RelatedArticleType[]>(
    [],
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(setting.api + "/api/news/getAllNews")
      .then((res) => res.json())
      .then((u) => {
        if (u.status !== false) {
          const textNews = u.data.filter((item: any) => !item.youtubeUrl);

          const formattedData: RelatedArticleType[] = textNews
            .slice(0, 4)
            .map((item: any) => ({
              cornerBgColor: "white",

              img: item.thumbnail
                ? item.thumbnail.startsWith("http")
                  ? item.thumbnail
                  : `${setting.api}/uploads/images/${item.thumbnail}`
                : "/assets/imgs/other/img-other-9.png",

              linkBadge: "#",

              linkPost: `/single-2?slug=${item.slug}`,
              linkAuthor: `/page-author/${item.author?._id}`,

              badge: item.categories?.[0]?.name || "News",

              bgBadge: "bg-1",

              title: item.title || "No Title",
            }));

          setRelatedArticles(formattedData);
        } else {
          setRelatedArticles([]);
        }
      })
      .catch((err) => {
        console.log("API Error:", err);

        setRelatedArticles([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Section1 />

        <section className="related-post sec-padding bg-white">
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <h5 className="mb-0">Related Articles</h5>
              </div>

              {relatedArticles.map((card, idx) => (
                <div className="col-6 col-md-4 col-lg-3" key={idx}>
                  <ArticleCard5 card={card} idx={idx} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-50 py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-lg-auto">
                <Ads_sm />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
