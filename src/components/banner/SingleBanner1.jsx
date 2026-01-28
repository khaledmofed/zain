"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import React from "react";

const SingleBanner1 = ({ banner }) => {
  const { bgThumb, id, shapeThumb } = banner;
  const t = useTranslations("home");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Get translation key based on banner ID
  const bannerKey = id === 1 ? "banner1" : "banner2";
  const bannerTitle = t(`${bannerKey}.title`);
  const bannerTitle1 = t(`${bannerKey}.title1`);
  const bannerTitle2 = t(`${bannerKey}.title2`);

  // Select image based on language
  let imagePath = bgThumb;
  if (isRTL) {
    if (id === 1 && bgThumb === "en-banar.webp") {
      imagePath = "ar-banner.jpg";
    } else if (id === 2 && bgThumb === "en-banar2.webp") {
      imagePath = "ar-banar2.jpg";
    }
  }

  return (
    <>
      <div
        className="banner-thumb bg-cover shadow dark"
        style={{ background: `url(/assets/img/banner/${imagePath})` }}
      ></div>
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-7 offset-xl-5">
            <div className="content">
              <h3>{bannerTitle}</h3>
              <h2>
                <strong>{bannerTitle1}</strong> {bannerTitle2}
              </h2>
              <div className="button mt-40">
                <Link className="btn-animation" href="/about-us">
                  <i className="fas fa-arrow-right"></i>{" "}
                  <span>{t("aboutButton")}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-bg">
        <Image
          src={`/assets/img/shape/${shapeThumb}`}
          width={916}
          height={693}
          alt="Shape"
          className="toty-logo"
        />
      </div>
    </>
  );
};

export default SingleBanner1;
