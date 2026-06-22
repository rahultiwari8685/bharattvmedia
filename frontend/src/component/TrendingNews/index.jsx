import ProtoTypes from "prop-types";
import Heading from "../uiStyle/Heading";
import TrendingNewsSlider from "../TrendingNewsSlider";
import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";

// import transm1 from "../../assets/img/gallery-1.jpg";
// import transm2 from "../../assets/img/gallery-2.jpg";
// import transm4 from "../../assets/img/gallery-3.jpg";
// import transm5 from "../../assets/img/gallery-4.jpg";
// import transm6 from "../../assets/img/gallery-5.jpg";

import React, { useEffect, useState } from "react";

// const trendingNews = [
//   {
//     image: transm1,
//     category: "TECHNOLOGY",
//     date: "March 26, 2020",
//     title: "Nancy Zhang a Chinese busy woman and Dhaka",
//   },
//   {
//     image: transm2,
//     category: "TECHNOLOGY",
//     date: "March 26, 2020",
//     title: "U.S. Response subash says he will label regions by risk of…",
//   },
//   {
//     image: transm4,
//     category: "TECHNOLOGY",
//     date: "March 26, 2020",
//     title: "Venezuela elan govt and opposit the property collect",
//   },
//   {
//     image: transm5,
//     category: "TECHNOLOGY",
//     date: "March 26, 2020",
//     title: "Nancy Zhang a Chinese busy woman and Dhaka",
//   },
//   {
//     image: transm6,
//     category: "TECHNOLOGY",
//     date: "March 26, 2020",
//     title: "U.S. Response subash says he will label regions by risk of…",
//   },
//   {
//     image: transm4,
//     category: "TECHNOLOGY",
//     date: "March 26, 2020",
//     title: "Venezuela elan govt and opposit the property collect",
//   },
// ];

const TrendingNews = ({ dark }) => {
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    getTrendingNews();
  }, []);

  const getTrendingNews = async () => {
    try {
      const res = await fetch(
        "https://api.bharattvmedia.com/api/news/trending?limit=6",
      );

      const data = await res.json();

      if (data.status) {
        setTrendingNews(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Heading title="Trending News" />
      <TrendingNewsSlider />
      {dark ? (
        <div className="border_white" />
      ) : (
        <div className="border_black" />
      )}
      <div className="space-30" />
      <div className="row">
        <div className="col-lg-6">
          {trendingNews.slice(0, 3).map((item, i) => (
            <div key={i + "key"}>
              <div key={i} className="single_post widgets_small">
                <div className="post_img">
                  <div className="img_wrap">
                    <img
                      src={`https://api.bharattvmedia.com/uploads/images/${item.thumbnail}`}
                      alt={item.title}
                      style={{
                        width: "120px",
                        height: "90px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <span className="tranding">
                    <FontAwesome name="bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    <Link to="#">{item.categories?.[0]?.name || "News"}</Link>
                    <Link to="#">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </Link>
                  </div>
                  <h4>
                    <Link to={`/news/${item.slug}`}>{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="space-15" />
              {dark ? (
                <div className="border_white" />
              ) : (
                <div className="border_black" />
              )}
              <div className="space-15" />
            </div>
          ))}
        </div>
        <div className="col-lg-6">
          {trendingNews.slice(3, 6).map((item, i) => (
            <div key={i + "key"}>
              <div key={i} className="single_post widgets_small">
                <div className="post_img">
                  <div className="img_wrap">
                    <img src={item.image} alt="thumb" />
                  </div>
                  <span className="tranding">
                    <FontAwesome name="bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta2">
                    <Link to="/">{item.category}</Link>
                    <Link to="/">{item.date}</Link>
                  </div>
                  <h4>
                    <Link to="/post1">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="space-15" />
              {dark ? (
                <div className="border_white" />
              ) : (
                <div className="border_black" />
              )}
              <div className="space-15" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingNews;

TrendingNews.propTypes = {
  dark: ProtoTypes.bool,
};
