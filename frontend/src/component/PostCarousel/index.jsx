import React, { useState, useEffect } from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import hside4 from "../../assets/img/post-1.jpg";
import hside5 from "../../assets/img/post-2.jpg";
import hside6 from "../../assets/img/post-3.jpg";
import hside1 from "../../assets/img/post-2.jpg";
import hside2 from "../../assets/img/post-1.jpg";
import hside3 from "../../assets/img/post-3.jpg";
import FontAwesome from "../uiStyle/FontAwesome";
import Slider from "../Slider";

// const postSlider = [
//   {
//     title: "The home decorations document: photograph of an",
//     body: "People have been infected",
//     image: hside4,
//   },
//   {
//     title: "U.S. Response subash says he will label regions by risk of…",
//     body: "People have been infected",
//     image: hside5,
//   },
//   {
//     title: "Stimul package will transform the government fundamentally.",
//     body: "People have been infected",
//     image: hside6,
//   },
//   {
//     title: "U.S. Response subash says he will label regions by risk of…",
//     body: "People have been infected",
//     image: hside1,
//   },
//   {
//     title: "U.S. Response subash says he will label regions by risk of…",
//     body: "People have been infected",
//     image: hside2,
//   },
//   {
//     title: "U.S. Response subash says he will label regions by risk of…",
//     body: "People have been infected",
//     image: hside3,
//   },
// ];

const PostCarousel = ({ className }) => {
  const [postSlider, setPostSlider] = useState([]);

  useEffect(() => {
    getTrendingNews();
  }, []);

  const getTrendingNews = async () => {
    try {
      const res = await fetch(
        "https://api.bharattvmedia.com/api/news/trending?limit=10",
      );

      const data = await res.json();

      if (data.status) {
        setPostSlider(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={className ? className : ""}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="carousel_posts1 owl-carousel nav_style2 mb40 mt30">
              {/*CAROUSEL START*/}
              <div className="px-4 position-relative">
                <Slider
                  navigation={{
                    nextEl: ".swiper-button-next11",
                    prevEl: ".swiper-button-prev11",
                  }}
                  className="trancarousel"
                  slidesPerView={3}
                  spaceBetween={20}
                  loop={true}
                  breakpoints={{
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {postSlider.map((item) => (
                    <div
                      key={item._id}
                      className="single_post widgets_small post_type5"
                    >
                      <div className="post_img">
                        <div className="img_wrap">
                          <Link to={`/news/${item.slug}`}>
                            <img
                              src={`https://api.bharattvmedia.com/uploads/images/${item.thumbnail}`}
                              alt={item.title}
                              style={{
                                width: "100%",
                                height: "180px",
                                objectFit: "cover",
                              }}
                            />
                          </Link>
                        </div>
                      </div>

                      <div className="single_post_text">
                        <h4>
                          <Link to={`/news/${item.slug}`}>
                            {item.title.slice(0, 40)}...
                          </Link>
                        </h4>

                        <p>{item.subtitle.slice(0, 40)}...</p>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="owl-nav">
                  <div className="owl-prev swiper-button-prev11">
                    <FontAwesome name="angle-left" />
                  </div>
                  <div className="owl-next swiper-button-next11">
                    <FontAwesome name="angle-right" />
                  </div>
                </div>
              </div>
            </div>
            {/*CAROUSEL END*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCarousel;

PostCarousel.propTypes = {
  className: ProtoTypes.string,
};
