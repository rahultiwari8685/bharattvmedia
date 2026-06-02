"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import setting from "../../../setting.json";

import Image from "next/image";

type Category = {
  _id: string;
  name: string;
  slug?: string;
  showInMenu?: number;
};

export default function Footer() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(`${setting.api}/api/categories/getAllCategory`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <footer>
        <div className="section-footer-2 overflow-hidden">
          <div className="container">
            <div className="row g-5 sec-padding">
              <div className="col-lg-4 pe-lg-5">
                <div className="d-flex gap-2">
                  <Link className="dark-mode-invert" href="/">
                    <Image
                      src="/assets/imgs/template/logo/Bharat_Logo.png"
                      width={143}
                      height={150}
                      alt="logo"
                    />
                  </Link>
                  {/* <p className="fs-7 m-0">The colors of life.</p> */}
                </div>
                <p className="fs-7 text-dark mt-4">
                  Blending tech, life, and business. Stay informed with fresh
                  trends, smart insights, and expert takes across every topic
                  that matters.
                </p>
                <div className="d-inline-flex group-social-icons">
                  <a
                    href="https://www.facebook.com/khabartrendlive/"
                    className="icon-shape icon-46"
                    target="_blank"
                  >
                    <svg
                      className="dark-mode-invert"
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={17}
                      viewBox="0 0 10 17"
                      fill="none"
                    >
                      <path
                        d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/SanjeevKapasiy4"
                    className="icon-shape icon-46"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@khabartrendslive"
                    className="icon-shape icon-46"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h-.102C3.969 1.999 2 2.13 2 2.13s-1.969.131-1.969 1.969v7.802c0 1.838 1.969 1.969 1.969 1.969s1.969.13 5.949.13h.102c3.98 0 5.949-.13 5.949-.13s1.969-.131 1.969-1.969V4.099c0-1.838-1.969-1.969-1.969-1.969s-1.969-.131-5.949-.131zM6 11.5v-7l5 3.5-5 3.5z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/khabartrendrslive/"
                    className="icon-shape icon-46"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a5.4 5.4 0 0 0-1.95 1.27A5.4 5.4 0 0 0 .42 3.64C.222 4.149.088 4.73.048 5.583.01 6.436 0 6.709 0 8c0 1.291.01 1.564.048 2.417.04.853.174 1.434.372 1.943.205.527.478.973.81 1.305.332.332.778.605 1.305.81.509.198 1.09.332 1.943.372C5.564 15.99 5.837 16 8 16s2.436-.01 3.289-.048c.853-.04 1.434-.174 1.943-.372a5.4 5.4 0 0 0 1.305-.81 5.4 5.4 0 0 0 .81-1.305c.198-.509.332-1.09.372-1.943C15.99 10.436 16 10.163 16 8s-.01-2.436-.048-3.289c-.04-.853-.174-1.434-.372-1.943a5.4 5.4 0 0 0-.81-1.305 5.4 5.4 0 0 0-1.305-.81c-.509-.198-1.09-.332-1.943-.372C10.436.01 10.163 0 8 0zm0 3.892A4.108 4.108 0 1 1 3.892 8 4.108 4.108 0 0 1 8 3.892zm0 6.784A2.676 2.676 0 1 0 5.324 8 2.676 2.676 0 0 0 8 10.676zm4.271-6.845a.96.96 0 1 1-.96-.96.96.96 0 0 1 .96.96z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-4 justify-content-between">
                  <div className="col-lg-1" />

                  <div className="col-lg-3 col-md-3 col-6">
                    <h6 className="mb-3">Categories</h6>

                    <ul className="list-unstyled ps-0">
                      {categories.length > 0 ? (
                        categories.slice(0, 6).map((cat) => (
                          <li className="mb-3" key={cat._id}>
                            <a
                              className="text-500 hover-dark"
                              href={`/archive-1?category=${cat._id}`}
                            >
                              {cat.name}
                            </a>
                          </li>
                        ))
                      ) : (
                        <li>Loading...</li>
                      )}
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-3 col-6">
                    <h6 className="mb-3">Pages</h6>
                    <ul className="list-unstyled ps-0">
                      <li className="mb-3">
                        <a className="text-500 hover-dark" href="#">
                          Home
                        </a>
                      </li>
                      <li className="mb-3">
                        <a className="text-500 hover-dark" href="/page-about">
                          About Us
                        </a>
                      </li>
                      <li className="mb-3">
                        <a className="text-500 hover-dark" href="/page-contact">
                          Contact Us
                        </a>
                      </li>
                      <li className="mb-3">
                        <a className="text-500 hover-dark" href="/page-privacy">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="mb-3">
                        <a className="text-500 hover-dark" href="/page-terms">
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          className="text-500 hover-dark"
                          href="/page-disclaimer"
                        >
                          Disclaimer
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-3 col-6">
                    <h6 className="mb-3">Remaining Categories</h6>

                    <ul className="list-unstyled ps-0">
                      {categories.length > 0 ? (
                        categories.slice(6, 12).map((cat) => (
                          <li className="mb-3" key={cat._id}>
                            <a
                              className="text-500 hover-dark"
                              href={`/archive-1?category=${cat._id}`}
                            >
                              {cat.name}
                            </a>
                          </li>
                        ))
                      ) : (
                        <li>Loading...</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="bottom-footer2 d-flex flex-wrap justify-content-lg-between justify-content-center align-items-center gap-lg-5 gap-3">
                  <p className="text-500 m-0">
                    2026 Copyright @{" "}
                    <span className="text-dark">Bharat TV Media</span>. All
                    Rights Reserved
                  </p>
                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-lg-5 gap-4">
                    <a
                      href="/page-privacy"
                      className="text-500 hover-dark d-block px-2 fs-7"
                    >
                      Private policy
                    </a>
                    <a
                      href="/page-terms"
                      className="text-500 hover-dark d-block px-2 fs-7"
                    >
                      Term &amp; Condition
                    </a>
                    <a
                      href="/page-disclaimer"
                      className="text-500 hover-dark d-block px-2 fs-7"
                    >
                      Disclaimer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
