import SectionTitle from "@/components/elements/TitleWhite";


import AuthorCard from "@/components/cards/AuthorCard";
import card from "@/public/data/cardHome-1.json";
import SwiperDynamic from "@/components/shared/SwiperDynamic";
import Link from "next/link";

export default function Section5() {
  return (
    <>
      {/*Home 1 Section 5*/}
      <section className="sec-5-home-1 sec-padding overflow-hidden" data-background="/assets/imgs/page/bg-home1-sec5.png">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionTitle title="Top Authors" description="Writers You’ll Want to Follow" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="d-flex flex-wrap gap-3 justify-content-between align-items-end">
                <h6 className="ds-6 mb-0 text-anime-style-2">
                  Leading experts in the fields <br className="d-none d-lg-block" />
                  provide you with in-depth knowledge
                </h6>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md-12 col-8 mx-auto position-relative">
              <SwiperDynamic
                className="swiper slider-4 rounded-16"
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={1}
                centeredSlides={false}
                loop={true}
                autoplay={{
                  delay: 5000,
                }}
                breakpoints={{
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
                }}
                navigation={{
                  nextEl: ".swiper-btn-next",
                  prevEl: ".swiper-btn-prev",
                }}
              >
                {card.authorCard.map((card, idx) => (
                  <div key={idx}>
                    <AuthorCard card={card} idx={idx} />
                  </div>
                ))}
              </SwiperDynamic>
              <div className="d-flex align-items-center gap-2 swiper-btn">
                <div className="swiper-btn-next">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M10.25 6.75L4.75 12L10.25 17.25" stroke="#0e0e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.25 12H5" stroke="#0e0e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="swiper-btn-prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="#0e0e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 12H4.75" stroke="#0e0e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="block-btn d-flex flex-wrap align-items-center gap-3 justify-content-center">
                <Link href="/page-author" className="btn btn-dark hover-up">
                  Become an author
                </Link>
                <p>Join the content creation community and earn income</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
