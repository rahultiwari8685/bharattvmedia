import ArticleCard2 from "@/components/cards/ArticleCard2";

import ArticleCard3 from "@/components/cards/ArticleCard3";
import ArticleCard4 from "@/components/cards/ArticleCard4";
import TitleWhite from "@/components/elements/TitleWhite";
import cardHome1 from "@/public/data/cardHome-1.json";
import SwiperDynamic from "@/components/shared/SwiperDynamicServer";
const card2data = [
    {
        linkBadge: "#",
        linkPost: "single-3",
        linkAuthor: "#",
        img: "/assets/imgs/page/img-4.png",
        badge: "Fashion",
        bgBadge: "bg-1",
        date: "Jun 13, 2026",
        readTime: "6 mins read",
        title: "Canvas & Couture: Art-Inspired Runways 2026",
        author: "Evara Rose",
        imgAuthor: "/assets/imgs/template/author/author-2.png",
    },
];
export default function Section3() {
    return (
        <>
            {/*Home 1 Section 3*/}
            <section className="sec-3-home-1 sec-padding overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <TitleWhite title="Latest News" description="Real-Time Updates That Matter" />
                        </div>
                    </div>
                    <div className="row mt-3 g-4 align-items-stretch">
                        {card2data.map((card, idx) => (
                            <div className="col-lg-7 col-12" key={idx}>
                                <ArticleCard2 key={idx} card={card} idx={idx} />
                            </div>
                        ))}
                        <div className="col-lg-5 col-12 d-flex flex-column gap-2 justify-content-between">
                            {cardHome1.sec3Card3.map((card, idx) => (
                                <ArticleCard3 key={idx} card={card} idx={idx} />
                            ))}
                        </div>
                        <div className="col-12">
                            <SwiperDynamic
                                className="swiper slider-2 rounded-16 overflow-hidden"
                                slidesPerView={3}
                                spaceBetween={27}
                                slidesPerGroup={1}
                                centeredSlides={false}
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                }}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 2,
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
                                {cardHome1.sec3Card4.map((card, idx) => (
                                    <div key={idx} className="rounded-16 overflow-hidden">
                                        <ArticleCard4 card={card} />
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
