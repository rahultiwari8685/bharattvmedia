import SectionTitle from "@/components/elements/TitleDark";


import data from "@/public/data/cardHome-1.json";
import ArticleCard11 from "@/components/cards/ArticleCard11";
import ArticleCard6 from "@/components/cards/ArticleCard6";
export default function Section10() {
  const card11Data = data.sec10Card11;
  const card6Data = data.sec10Card6;
  return (
    <>
      {/*Home 1 Section 10*/}
      <section className="sec-10-home-1 sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionTitle title="Suggestions" description="Ideas and Picks to Explore" classList="" />
            </div>
          </div>
          <div className="row mt-2 g-4">
            {card11Data.map((card, idx) => (
              <div className="col-lg-6" key={idx}>
                <ArticleCard11 key={idx} card={card} idx={idx} />
              </div>
            ))}
            <div className="col-lg-6">
              <div className="row g-3">
                {card6Data.map((card, idx) => (
                  <ArticleCard6 key={idx} card={card} idx={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
