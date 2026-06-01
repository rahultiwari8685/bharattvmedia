import Image from "next/image";

export default function Section2() {
  return (
    <>
      {/*Home 4 Section 2*/}
      <section className="sec-2-home-4 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-lg-auto">
              <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-3 ps-0">
                <li>
                  <a href="#" className="tag-item style-2 rounded-pill">
                    <span className="icon d-inline-flex">
                      <Image src="/assets/imgs/template/icons/tag-icon-1.png" alt="magzin" width={24} height={24} />
                    </span>
                    <span>Gaming</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tag-item style-2 rounded-pill">
                    <span className="icon d-inline-flex">
                      <Image src="/assets/imgs/template/icons/tag-icon-2.png" alt="magzin" width={24} height={24} />
                    </span>
                    <span>Food</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tag-item style-2 rounded-pill">
                    <span className="icon d-inline-flex">
                      <Image src="/assets/imgs/template/icons/tag-icon-3.png" alt="magzin" width={24} height={24} />
                    </span>
                    <span>Design</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tag-item style-2 rounded-pill">
                    <span className="icon d-inline-flex">
                      <Image src="/assets/imgs/template/icons/tag-icon-4.png" alt="magzin" width={24} height={24} />
                    </span>
                    <span>Business</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tag-item style-2 rounded-pill">
                    <span className="icon d-inline-flex">
                      <Image src="/assets/imgs/template/icons/tag-icon-5.png" alt="magzin" width={24} height={24} />
                    </span>
                    <span>Trending</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tag-item style-2 rounded-pill">
                    <span className="icon d-inline-flex">
                      <Image src="/assets/imgs/template/icons/tag-icon-6.png" alt="magzin" width={24} height={24} />
                    </span>
                    <span>Marketing</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tag-item style-2 rounded-pill">
                    <span className="icon d-inline-flex">
                      <Image src="/assets/imgs/template/icons/tag-icon-7.png" alt="magzin" width={24} height={24} />
                    </span>
                    <span>Creative</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tag-item style-2 rounded-pill">
                    <span className="icon d-inline-flex">
                      <Image src="/assets/imgs/template/icons/tag-icon-8.png" alt="magzin" width={24} height={24} />
                    </span>
                    <span>Lifestyle</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tag-item style-2 rounded-pill">
                    <span className="icon d-inline-flex">
                      <Image src="/assets/imgs/template/icons/tag-icon-9.png" alt="magzin" width={24} height={24} />
                    </span>
                    <span>Media</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tag-item style-2 rounded-pill">
                    <span className="icon d-inline-flex">
                      <Image src="/assets/imgs/template/icons/tag-icon-10.png" alt="magzin" width={24} height={24} />
                    </span>
                    <span>Development</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tag-item style-2 rounded-pill">
                    <span className="icon d-inline-flex">
                      <Image src="/assets/imgs/template/icons/tag-icon-11.png" alt="magzin" width={24} height={24} />
                    </span>
                    <span>Finance</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
