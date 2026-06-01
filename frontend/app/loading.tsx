import React from "react";
import Image from "next/image";
export default function Loading() {
  return (
    <>
      {/*Preloader*/}
      <div id="preloader">
        <div id="loader" className="loader">
          <div className="loader-container">
            <div className="loader-icon">
              <Image
                src="/assets/imgs/template/logo/TH_Logo.png"
                alt="Preloader"
                width={500}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      {/*Preloader-end */}
    </>
  );
}
