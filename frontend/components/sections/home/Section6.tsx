import CategoryCard1 from "@/components/cards/CategoryCard1";


import CategoryCard2 from "@/components/cards/CategoryCard2";
import datacard from "@/public/data/cardHome-1.json";

export default function Section6() {
  const categoryCard1 = datacard.categoryCard1;
  const categoryCard2 = datacard.categoryCard2;
  return (
    <>
      {/*Home 1 Section 6*/}
      <section className="sec-6-home-1 sec-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="block-discover bg-13">
                <div className="position-relative z-2">
                  <h6 className="ds-6 text-white mb-0">Hot Topics</h6>
                  <p className="text-white mt-2 mb-5">
                    Based on <span className="text-decoration-underline">your interests</span>
                  </p>
                  <a href="#" className="view-more white z-3 w-12rem">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow" />
                    </span>
                    <span className="button-text fw-semi-bold">Discover more</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex justify-content-between align-items-stretch d-none d-sm-block">
              <div className="row g-lg-4 g-2">
                {categoryCard1.map((card, idx) => (
                  <div className="col-lg-4 col-sm-6" key={idx}>
                    <CategoryCard1 key={idx} card={card} idx={idx} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row mt-3 g-3">
            {categoryCard2.map((card, idx) => (
              <div className="col-lg-2 col-sm-4 col-6" key={idx}>
                <CategoryCard2 key={idx} card={card} idx={idx} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
