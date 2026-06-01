import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/single-3/Section1";
import cardCollections from "@/public/data/cardHome-1.json";
import Ads_sm from "@/components/elements/ads_sm";
import ArticleCard5 from "@/components/cards/ArticleCard5";
export default function Single_3() {
    const cardCollectionsData = cardCollections.cardCollections;
    return (
        <>
            <Layout headerStyle={2} footerStyle={4}>
                <Section1 />
                <section className="related-post sec-padding bg-white">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-12">
                                <h5 className="mb-0">Recommended for You</h5>
                            </div>
                            {cardCollectionsData.map((card, idx) => (
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
