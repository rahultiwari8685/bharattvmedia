"use client";

import { useEffect, useState } from "react";

import ArticleCard12 from "@/components/cards/ArticleCard12";

import setting from "@/setting.json";

type Props = {
  authorId: string;

  searchParams?: {
    page?: string;
  };
};

export default function Section1({ authorId, searchParams }: Props) {
  const [newsList, setNewsList] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;

  // Fetch Author News
  useEffect(() => {
    if (!authorId) return;

    setLoading(true);

    fetch(
      `${setting.api}/api/news/getAllNewsByAuthorId/${authorId}?page=${currentPage}&limit=6`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("AUTHOR NEWS:", data);

        setNewsList(data.data || []);
      })
      .catch((err) => {
        console.error("Author News Error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [authorId, currentPage]);

  // Format Data
  const formattedArticles = newsList.map((item: any, idx: number) => ({
    // Article Link
    linkPost: `/single-2?slug=${item.slug}`,

    // Author Link
    linkAuthor: `/page-author/${item.author?._id}`,

    // Badge Link
    linkBadge: "#",

    // Comment Link
    linkComment: "#",

    // Thumbnail
    img: item.thumbnail
      ? item.thumbnail.startsWith("http")
        ? item.thumbnail
        : `${setting.api}/uploads/images/${item.thumbnail}`
      : "/assets/imgs/page/img-66.png",

    // Category
    badge: item.categories?.[0]?.name || "News",

    bgBadge: `bg-${(idx % 5) + 1}`,

    // Title
    title: item.title || "No Title",

    // Subtitle
    description: item.subtitle || "No Description",

    // Author Image
    imgAuthor: item.author?.profileImage
      ? item.author.profileImage.startsWith("http")
        ? item.author.profileImage
        : `${setting.api}/uploads/images/${item.author.profileImage}`
      : "/assets/imgs/template/author/author-1.png",

    // Author Name
    author: item.author?.name || "Admin",

    // Date
    date: new Date(item.createdAt).toDateString(),

    // Extra
    comment: "0",

    readNum: "0",
  }));

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h4>Loading News...</h4>
      </div>
    );
  }

  return (
    <section className="sec-1-author overflow-hidden">
      <div className="container">
        <div className="row mt-4 g-4">
          {formattedArticles.length > 0 ? (
            formattedArticles.map((card: any, idx: number) => (
              <div className="col-12" key={idx}>
                <ArticleCard12 card={card} idx={idx} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <h4>No News Found</h4>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
