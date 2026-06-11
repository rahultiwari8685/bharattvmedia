"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import setting from "../../../setting.json";

export default function Section1() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const getYouTubeId = (url: string) => {
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url?.match(regExp);
    return match ? match[1] : "";
  };

  useEffect(() => {
    if (!slug) return;

    setLoading(true);

    fetch(`${setting.api}/api/news/slug/${slug}`)
      .then((res) => res.json())

      .then((res) => {
        if (res.status) {
          setNews(res.data);

          // Count view only once per browser
          const viewedKey = `news_view_${res.data._id}`;

          if (!localStorage.getItem(viewedKey)) {
            fetch(`${setting.api}/api/news/view/${res.data._id}`, {
              method: "POST",
            })
              .then(() => {
                localStorage.setItem(viewedKey, "1");
              })
              .catch((err) => {
                console.error("View count error:", err);
              });
          }
        } else {
          setNews(null);
        }
      })

      .catch((err) => {
        console.error("API Error:", err);
        setNews(null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (!news) {
    return <div className="text-center mt-5">News not found</div>;
  }

  const videoId = getYouTubeId(news.youtubeUrl);

  return (
    <section className="sec-1-single-2 pb-70 overflow-hidden mt-10">
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-6 pe-lg-5">
            {/* <nav>
              <ul className="breadcrumb d-flex gap-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
              </ul>
            </nav> */}

            <h2>{news.title}</h2>

            <p>{new Date(news.createdAt).toDateString()}</p>

            <p>👁 {news.views || 0} Views</p>

            <div className="d-flex align-items-center gap-2">
              <img
                src="/assets/imgs/template/author/author-1.png"
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                alt="author"
              />
              {/* <span>{news.author || "Admin"}</span> */}

              <Link href={`/page-author/${news.author?._id}`}>
                <span className="cursor-pointer hover:text-red-500">
                  {news.author?.name || "Admin"}
                </span>
              </Link>

              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `${news.title} ${
                      typeof window !== "undefined" ? window.location.href : ""
                    }`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-green-500 transition hover:bg-green-500 hover:text-white"
                >
                  <i className="ri-whatsapp-line text-lg"></i>
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${
                    typeof window !== "undefined" ? window.location.href : ""
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  <i className="ri-facebook-fill text-lg"></i>
                </a>

                {/* Twitter/X */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    news.title,
                  )}&url=${
                    typeof window !== "undefined" ? window.location.href : ""
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-black transition hover:bg-black hover:text-white"
                >
                  <i className="ri-twitter-x-line text-lg"></i>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-pink-500 transition hover:bg-pink-500 hover:text-white"
                >
                  <i className="ri-instagram-line text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-2 mt-lg-0">
            {news.thumbnail ? (
              <img
                src={
                  news.thumbnail?.startsWith("http")
                    ? news.thumbnail
                    : `${setting.api}/uploads/images/${news.thumbnail}`
                }
                className="img-fluid"
                alt="news"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            ) : videoId ? (
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                ></iframe>
              </div>
            ) : (
              <img
                src="/assets/imgs/page/img-28.png"
                className="img-fluid"
                alt="default"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="col-lg-9 offset-lg-1">
          <div>
            {(() => {
              try {
                const parsedContent =
                  typeof news.content === "string"
                    ? JSON.parse(news.content)
                    : news.content;

                // ✅ EditorJS Content
                if (parsedContent?.blocks) {
                  return parsedContent.blocks.map((block: any, idx: number) => {
                    switch (block.type) {
                      case "paragraph":
                        return (
                          <p
                            key={idx}
                            dangerouslySetInnerHTML={{
                              __html: block.data.text,
                            }}
                          />
                        );

                      case "header":
                        return (
                          <h2
                            key={idx}
                            dangerouslySetInnerHTML={{
                              __html: block.data.text,
                            }}
                          />
                        );

                      case "image":
                        return (
                          <img
                            key={idx}
                            src={block.data.file.url}
                            className="img-fluid rounded mb-3"
                            alt=""
                          />
                        );

                      default:
                        return null;
                    }
                  });
                }

                // ✅ Old HTML Content
                return (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: news.content || "",
                    }}
                  />
                );
              } catch (err) {
                // ✅ fallback old html
                return (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: news.content || "",
                    }}
                  />
                );
              }
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
