import ArticleCard5 from "@/components/cards/ArticleCard5";
import ArticleCard11 from "@/components/cards/ArticleCard11";
import DataCard from "@/public/data/cardArchive-3.json";
import Link from "next/link";

interface Section1Props {
  searchParams?: Promise<{ page?: string }>;
}

export default async function Section1({ searchParams }: Section1Props) {
  const resolvedSearchParams = await searchParams;
  const currentPage = resolvedSearchParams?.page ? parseInt(resolvedSearchParams.page) : 1;
  const itemsPerCard11 = 1;
  const itemsPerCard5Col1 = 2;
  const itemsPerCard5Col2 = 2;
  const itemsPerCard5Bottom = 12;

  const totalCard11 = Math.ceil(DataCard.sec1Card11.length / itemsPerCard11);
  const totalCard5Col1 = Math.ceil(DataCard.sec1Card5Col1.length / itemsPerCard5Col1);
  const totalCard5Col2 = Math.ceil(DataCard.sec1Card5Col2.length / itemsPerCard5Col2);
  const totalCard5Bottom = Math.ceil(DataCard.sec1Card5Bottom.length / itemsPerCard5Bottom);

  const totalPages = Math.max(totalCard11, totalCard5Col1, totalCard5Col2, totalCard5Bottom);

  const paginatedArticles11 = DataCard.sec1Card11.slice((currentPage - 1) * itemsPerCard11, currentPage * itemsPerCard11);
  const paginatedArticles5Col1 = DataCard.sec1Card5Col1.slice((currentPage - 1) * itemsPerCard5Col1, currentPage * itemsPerCard5Col1);
  const paginatedArticles5Col2 = DataCard.sec1Card5Col2.slice((currentPage - 1) * itemsPerCard5Col2, currentPage * itemsPerCard5Col2);
  const paginatedArticles5Bottom = DataCard.sec1Card5Bottom.slice((currentPage - 1) * itemsPerCard5Bottom, currentPage * itemsPerCard5Bottom);

  // Server-side pagination component
  const ServerPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
          <Link href={`/archive-1?page=${i}`} className="page-link icon-lg pagination_item rounded-circle icon-shape fs-18 fw-semi-bold">
            {i}
          </Link>
        </li>
      );
    }

    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {currentPage > 1 && (
            <li className="page-item">
              <Link href={`/archive-1?page=${currentPage - 1}`} className="page-link icon-lg pagination_item rounded-circle icon-shape">
                <svg className="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M9.49993 6.5L4.78564 11L9.49993 15.5" stroke="#0E0E0F" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M17.2143 11H5" stroke="#0E0E0F" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Link>
            </li>
          )}
          {pages}
          {currentPage < totalPages && (
            <li className="page-item">
              <Link href={`/archive-1?page=${currentPage + 1}`} className="page-link icon-lg pagination_item rounded-circle icon-shape">
                <svg className="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M12.5 6.5L17.2143 11L12.5 15.5" stroke="#0E0E0F" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M16.9999 11H4.78564" stroke="#0E0E0F" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  };

  return (
    <>
      {/*Archive 3 Section 1*/}
      <section className="sec-1-archive-3">
        <div className="container">
          <div className="row mt-2 g-4">
            {paginatedArticles11.map((card, idx) => (
              <div className="col-lg-6" key={idx}>
                <ArticleCard11 key={idx} card={card} idx={idx} />
              </div>
            ))}
            <div className="col-lg-3">
              <div className="row g-4">
                {paginatedArticles5Col1.map((card, idx) => (
                  <div className="col-lg-12 col-md-6" key={idx}>
                    <ArticleCard5 key={idx} card={card} idx={idx} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row g-4">
                {paginatedArticles5Col2.map((card, idx) => (
                  <div className="col-lg-12 col-md-6" key={idx}>
                    <ArticleCard5 key={idx} card={card} idx={idx} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 mt-4">
            {paginatedArticles5Bottom.map((card, idx) => (
              <div className="col-lg-3 col-md-6 col-12" key={idx}>
                <ArticleCard5 key={idx} card={card} idx={idx} />
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <ServerPagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
