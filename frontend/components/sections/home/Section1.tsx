import cardHome1 from "@/public/data/cardHome-1.json";

import ArticleCard1 from "@/components/cards/ArticleCard1";
import SwiperDynamic from "@/components/shared/SwiperDynamicServer";

export default function Section1() {
    const cardHome1Sec1 = cardHome1.sec1Card1;
    return (
        <>
            {/*Home 1 Section 1*/}
            <section className="sec-1-home-1" data-background="/assets/imgs/page/bg-home1-sec1.png">
                <div className="container d-none d-md-block">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="text-center">
                                <h1 className="ds-2 lh-0 mb-0 text-anime-style-2">Your Gateway to Global News</h1>
                                <p className="fs-5 mt-0 text-anime-style-2">Breaking Stories from Every Corner of the Globe</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <SwiperDynamic
                        className="swiper swiper-card-hero py-2"
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        spaceBetween={30}
                        centeredSlides={true}
                        breakpoints={{
                            1200: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 2,
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
                    >
                        {cardHome1Sec1.map((card, idx) => (
                            <div key={idx}>
                                <ArticleCard1 card={card} idx={idx} />
                            </div>
                        ))}
                    </SwiperDynamic>
                </div>
            </section>
        </>
    );
}
