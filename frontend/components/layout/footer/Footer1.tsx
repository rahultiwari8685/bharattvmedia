import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer>
        <div className="section-footer sec-padding overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <Link className="dark-mode-invert" href="/">
                  <Image src="/assets/imgs/template/logo/top-dark.png" alt="magzin" width={250} height={32} />
                </Link>
                <p className="text-dark mb-5 mt-2">Your Gateway to Global News</p>
                <div className="d-flex flex-wrap justify-content-center align-items-center gap-lg-5 gap-md-4">
                  <a href="#" className="text-600 hover-dark d-block p-2">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-600 hover-dark d-block p-2">
                    Term of Use
                  </a>
                  <a href="#" className="text-600 hover-dark d-block p-2">
                    Careers
                  </a>
                  <a href="#" className="text-600 hover-dark d-block p-2">
                    Help
                  </a>
                  <a href="#" className="text-600 hover-dark d-block p-2">
                    Become author
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
