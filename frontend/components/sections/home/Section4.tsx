import SwiperDynamic from "@/components/shared/SwiperDynamicServer";
import Image from "next/image";

import Marquee from "@/util/MarqueeServer";

export default function Section4() {
  return (
    <>
      {/*Home 1 Section 4*/}
      <section className="sec-4-home-1 pb-70">
        <div className="container">
          <div className="row align-items-stretch g-4">
            <div className="col-lg-7 col-12">
              <div className="block-subscribe h-100">
                <div className="decorate-1" data-background="/assets/imgs/template/decorate-1.png" />
                <div className="block-title d-flex align-items-center gap-1 fs-7 text-600">
                  <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="#0E0E0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.5 6.5L12 12.25L18.5 6.5" stroke="#0E0E0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="fs-7 fw-regular">Newsletter</span>
                </div>
                <div className="block-title">
                  <h4 className="my-3">
                    Subscribe to our newsletter <br className="d-none d-lg-block" />
                    and Stay updated each week
                  </h4>
                  <p className="fs-7 mb-5">
                    You’ll only receive updates on new templates—no spam, <br className="d-none d-lg-block" />
                    just what you signed up for.
                  </p>
                </div>
                <form action="#" className="position-relative">
                  <div className="d-flex flex-wrap flex-md-nowrap gap-2 align-items-center mb-3">
                    <input className="form-control" type="text" placeholder="Your email address" />
                    <button className="btn btn-dark" type="submit">
                      Subscribe
                    </button>
                  </div>
                  <input type="checkbox" id="subscribe" />
                  <label htmlFor="subscribe" className="text-600 fs-8">
                    By clicking the button, you are agreeing with our{" "}
                    <a href="#" className="text-dark">
                      Term &amp; Conditions
                    </a>
                  </label>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-12 d-flex flex-column gap-2 justify-content-between">
              <div className="block-brand position-relative">
                <div className="position-absolute top-0 end-0 m-4 dark-mode-invert">
                  <Image width={28} height={27} src="/assets/imgs/template/decorate-2.svg" alt="magzin" priority={true} />
                </div>
                <div className="carouselTicker carouselTicker-left position-relative z-1 wow img-custom-anim-top pe-5">
                  <Marquee direction="left" speed={30} className="carouselTicker__list">
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={104} height={31} src="/assets/imgs/template/icons/brand-1.svg" alt="magzin" priority={true} />
                      </div>
                    </div>
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={123} height={31} src="/assets/imgs/template/icons/brand-2.svg" alt="magzin" priority={true} />
                      </div>
                    </div>
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={104} height={31} src="/assets/imgs/template/icons/brand-1.svg" alt="magzin" priority={true} />
                      </div>
                    </div>
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={104} height={31} src="/assets/imgs/template/icons/brand-1.svg" alt="magzin" priority={true} />
                      </div>
                    </div>
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={123} height={31} src="/assets/imgs/template/icons/brand-2.svg" alt="magzin" priority={true} />
                      </div>
                    </div>
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={104} height={31} src="/assets/imgs/template/icons/brand-1.svg" alt="magzin" priority={true} />
                      </div>
                    </div>
                  </Marquee>
                </div>
                <div className="carouselTicker carouselTicker-right position-relative z-1 wow img-custom-anim-top">
                  <Marquee direction="right" speed={30} className="carouselTicker__list">
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={99} height={31} src="/assets/imgs/template/icons/brand-3.svg" alt="magzin" priority={true} />
                      </div>
                    </div>
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={82} height={28} src="/assets/imgs/template/icons/brand-4.svg" alt="magzin" priority={true} />
                      </div>
                    </div>
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={104} height={31} src="/assets/imgs/template/icons/brand-5.svg" alt="magzin" />
                      </div>
                    </div>
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={99} height={31} src="/assets/imgs/template/icons/brand-3.svg" alt="magzin" />
                      </div>
                    </div>
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={82} height={28} src="/assets/imgs/template/icons/brand-4.svg" alt="magzin" />
                      </div>
                    </div>
                    <div className="carouselTicker__item mx-4">
                      <div className="brand-item dark-mode-invert">
                        <Image width={104} height={31} src="/assets/imgs/template/icons/brand-5.svg" alt="magzin" />
                      </div>
                    </div>
                  </Marquee>
                </div>
              </div>
              <div className="block-social">
                <div className="row g-2">
                  <div className="col-lg-5 col-md-4 col-sm-5 col-12">
                    <SwiperDynamic className="swiper slider-1 rounded-16" pagination={{ clickable: true }} autoplay={{ delay: 3000 }} slidesPerView={1} spaceBetween={15} loop={true}>
                      <div className="swiper-slide">
                        <Image className="rounded-16 overflow-hidden cover-image" src="/assets/imgs/other/img-other-13.png" alt="magzin" width={500} height={500} />
                      </div>
                      <div className="swiper-slide">
                        <Image className="rounded-16 overflow-hidden cover-image" src="/assets/imgs/other/img-other-13-1.png" alt="magzin" width={500} height={500} />
                      </div>
                      <div className="swiper-slide">
                        <Image className="rounded-16 overflow-hidden cover-image" src="/assets/imgs/other/img-other-13-2.png" alt="magzin" width={500} height={500} />
                      </div>
                    </SwiperDynamic>
                  </div>
                  <div className="col-lg-7 col-md-8 col-sm-7 col-12">
                    <div className="social-list h-100">
                      <h6 className="mb-3">Follow us</h6>
                      <ul className="list-unstyled ps-0 m-0 d-flex flex-column gap-2 w-100">
                        <div>
                          <a href="#" className="social-item fs-7">
                            <div className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={9} height={16} viewBox="0 0 9 16" fill="none">
                                <path d="M7.90576 8.85938H5.59863V15.75H2.52246V8.85938H0V6.0293H2.52246V3.84521C2.52246 1.38428 3.99902 0 6.24463 0C7.32129 0 8.45947 0.215332 8.45947 0.215332V2.64551H7.19824C5.96777 2.64551 5.59863 3.38379 5.59863 4.18359V6.0293H8.33643L7.90576 8.85938Z" fill="#0E0E0F" />
                              </svg>
                            </div>
                            <span>Facebook</span>
                            <span className="text-dark ms-auto">65k</span>
                          </a>
                        </div>
                        <div>
                          <a href="#" className="social-item fs-7">
                            <div className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={15} height={13} viewBox="0 0 15 13" fill="none">
                                <path d="M11.1665 0H13.3198L8.58252 5.44482L14.1812 12.7969H9.81299L6.36768 8.33643L2.46094 12.7969H0.276855L5.35254 7.01367L0 0H4.49121L7.56738 4.09131L11.1665 0ZM10.3975 11.5049H11.5972L3.84521 1.23047H2.55322L10.3975 11.5049Z" fill="#0E0E0F" />
                              </svg>
                            </div>
                            <span>Twitter</span>
                            <span className="text-dark ms-auto">87k</span>
                          </a>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
