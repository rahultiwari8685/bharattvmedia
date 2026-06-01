import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/portfolio-details/Section1";
import Section6 from "@/components/sections/home-4/Section6";
import ArticleCard5 from "@/components/cards/ArticleCard5";
import cardCollections from "@/public/data/cardPortfolio.json";
export default function PortfolioDetails() {
    const cardCollectionsData = cardCollections.cardPortfolio_related;
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
                <Section6 />
            </Layout>
        </>
    );
}
