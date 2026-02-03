"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Loading = () => {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");
  const fontFamily = isArabic
    ? "'Tajawal', sans-serif"
    : "'Cabourg OT', sans-serif";

  return (
    <>
      <div id="preloader">
        <div id="consua-preloader" className="consua-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="z" className="letters-loading">
                z
              </span>
              <span data-text-preloader="a" className="letters-loading">
                a
              </span>
              <span data-text-preloader="i" className="letters-loading">
                i
              </span>
              <span data-text-preloader="n" className="letters-loading">
                n
              </span>
            </div>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
