import ArticleCard7 from "@/components/cards/ArticleCard7";


import dataCardHome4 from "@/public/data/cardHome-4.json";
import SwiperDynamic from "@/components/shared/SwiperDynamic";
import ArticleCard5 from "@/components/cards/ArticleCard5";

export default function Section3() {
  const SwiperProps = {
    className: "swiper slider-4",
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <>
      {/*Home 4 Section 2*/}
      <section className="sec-3-home-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SwiperDynamic
                className="swiper swiper-popup-search"
                slidesPerView={3}
                spaceBetween={15}
                slidesPerGroup={1}
                centeredSlides={false}
                loop={true}
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
              >
                {dataCardHome4.sec4Card7.map((card, index) => (
                  <div className="swiper-slide" key={index}>
                    <ArticleCard7 key={index} card={card} idx={index} />
                  </div>
                ))}
              </SwiperDynamic>
            </div>
          </div>
          <div className="row mt-2 g-4">
            <div className="col-12">
              <SwiperDynamic
                {...SwiperProps}
                navigation={{
                  nextEl: ".swiper-btn-next",
                  prevEl: ".swiper-btn-prev",
                }}
              >
                {dataCardHome4.sec4Card5Row1.map((card, index) => (
                  <div className="swiper-slide" key={index}>
                    <ArticleCard5 key={index} card={card} idx={index} />
                  </div>
                ))}
              </SwiperDynamic>
            </div>
            <div className="col-12">
              <SwiperDynamic {...SwiperProps}>
                {dataCardHome4.sec4Card5Row2.map((card, index) => (
                  <div className="swiper-slide" key={index}>
                    <ArticleCard5 key={index} card={card} idx={index} />
                  </div>
                ))}
              </SwiperDynamic>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
