import AuthorCard from "@/components/cards/AuthorCard";


import CardData from "@/public/data/cardPages.json";

export default function Section2() {
  return (
    <>
      {/* About section 2 */}
      <section className="sec-2-about">
        <div className="container">
          <div className="row g-4">
            <div className="col-12">
              <h2 className="mb-4 text-center">Creative Team</h2>
            </div>
            {CardData.pageAboutCardAuthor.map((card, idx) => (
              <div className="col-lg-3 col-md-6 col-12" key={idx}>
                <AuthorCard card={card} idx={idx} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
