import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/privacy/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section3 from "@/components/sections/about/Section3";
import Link from "next/link";
export default function Page_Privacy() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb list-unstyled d-flex flex-row gap-2 align-items-center m-0 ps-0 py-4">
                  <li className="breadcrumb-item">
                    <Link href="/" className="text-600 fs-7 hover-dark">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <span className="icon-shape icon-xxs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M6.125 4.5625L9.5625 7.84375L6.125 11.125"
                          stroke="#626568"
                          strokeWidth="0.9375"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </li>
                  <li
                    className="breadcrumb-item active text-dark fs-7"
                    aria-current="page"
                  >
                    Privacy Policy
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <Section1 />
        {/* <Section2 />
                <Section3 /> */}
      </Layout>
    </>
  );
}
