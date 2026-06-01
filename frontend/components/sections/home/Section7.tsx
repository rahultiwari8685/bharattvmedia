import SectionTitle from "@/components/elements/TitleDark";


import cardCollections from "@/public/data/cardHome-1.json";
import ArticleCard5 from "@/components/cards/ArticleCard5";
import ArticleCard11 from "@/components/cards/ArticleCard11";

export default function Section7() {
  const cardCollectionsDataCol1 = cardCollections.sec7Card5Col1;
  const cardCollectionsData11 = cardCollections.sec7Card11;
  const cardCollectionsDataCol2 = cardCollections.sec7Card5Col2;
  return (
    <>
      {/*Home 1 Section 7*/}
      <section className="sec-7-home-1 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionTitle title="Staff Picks" description="Handpicked by Our Editorial Team" classList="" />
            </div>
          </div>
          <div className="row mt-2 g-4">
            <div className="col-lg-3">
              <div className="row g-4">
                {cardCollectionsDataCol1.map((card, idx) => (
                  <div className="col-lg-12 col-md-6" key={idx}>
                    <ArticleCard5 key={idx} card={card} idx={idx} />
                  </div>
                ))}
              </div>
            </div>
            {cardCollectionsData11.map((card, idx) => (
              <div className="col-lg-6" key={idx}>
                <ArticleCard11 key={idx} card={card} idx={idx} />
              </div>
            ))}
            <div className="col-lg-3">
              <div className="row g-4">
                {cardCollectionsDataCol2.map((card, idx) => (
                  <div className="col-lg-12 col-md-6" key={idx}>
                    <ArticleCard5 key={idx} card={card} idx={idx} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
