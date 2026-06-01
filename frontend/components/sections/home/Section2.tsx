import Marquee from "@/util/MarqueeServer";


export default function Section2() {
  return (
    <>
      {/*Home 1 Section 2*/}
      <section className="sec-2-home-1 bg-100 mask-image py-5">
        <div className="carouselTicker carouselTicker-left position-relative z-1 wow img-custom-anim-top">
          <Marquee direction="left" speed={50} pauseOnHover={true} className="carouselTicker__list">
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Fashion</span>
                <span className="number">68</span>
              </a>
            </div>
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Artificial Intelligence</span>
                <span className="number">116</span>
              </a>
            </div>
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Food and Drink</span>
                <span className="number">78</span>
              </a>
            </div>
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Business</span>
                <span className="number">26</span>
              </a>
            </div>
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Design</span>
                <span className="number">25</span>
              </a>
            </div>
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Technology</span>
                <span className="number">85</span>
              </a>
            </div>
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Science</span>
                <span className="number">120</span>
              </a>
            </div>
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Innovation</span>
                <span className="number">63</span>
              </a>
            </div>
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Lifestyle</span>
                <span className="number">89</span>
              </a>
            </div>
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Politics</span>
                <span className="number">52</span>
              </a>
            </div>
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Blockchain</span>
                <span className="number">115</span>
              </a>
            </div>
            <div className="carouselTicker__item mx-3">
              <a href="#" className="tag-item">
                <span>Culture</span>
                <span className="number">27</span>
              </a>
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
}
