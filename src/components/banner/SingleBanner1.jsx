"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import React from "react";

const SingleBanner1 = ({ banner }) => {
  const t = useTranslations("home");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // API slider format: image_en, image_ar, subtitle, title, button_text, button_url
  const isFromApi =
    banner.image_en != null ||
    banner.image_ar != null ||
    banner.subtitle != null ||
    banner.button_url != null;

  const backgroundImage = isFromApi
    ? isRTL
      ? banner.image_ar || banner.image
      : banner.image_en || banner.image
    : null;

  const imagePath =
    !isFromApi && banner.bgThumb
      ? isRTL
        ? banner.id === 1
          ? "ar-banner.jpg"
          : banner.id === 2
            ? "ar-banar2.jpg"
            : banner.bgThumb
        : banner.bgThumb
      : "";

  const subtitle = isFromApi
    ? banner.subtitle
    : t(`${banner.id === 1 ? "banner1" : "banner2"}.title`);
  const title = isFromApi ? banner.title : null;
  const bannerTitle1 = !isFromApi
    ? t(`${banner.id === 1 ? "banner1" : "banner2"}.title1`)
    : null;
  const bannerTitle2 = !isFromApi
    ? t(`${banner.id === 1 ? "banner1" : "banner2"}.title2`)
    : null;
  const buttonText = isFromApi ? banner.button_text : t("aboutButton");
  const buttonUrl = isFromApi ? banner.button_url : "/about-us";

  const style = backgroundImage
    ? { background: `url(${backgroundImage})` }
    : { background: `url(/assets/img/banner/${imagePath})` };

  return (
    <>
      <div className="banner-thumb bg-cover shadow dark" style={style}></div>
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-7 offset-xl-5">
            <div className="content">
              <h3>{subtitle}</h3>
              <h2>
                {title != null ? (
                  <strong>{title}</strong>
                ) : (
                  <>
                    <strong>{bannerTitle1}</strong> {bannerTitle2}
                  </>
                )}
              </h2>
              <div className="button mt-40">
                <Link className="btn-animation" href={buttonUrl}>
                  <i className="fas fa-arrow-right"></i>{" "}
                  <span>{buttonText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {banner.shapeThumb && (
        <div className="banner-shape-bg">
          <Image
            src={`/assets/img/shape/${banner.shapeThumb}`}
            width={916}
            height={693}
            alt="Shape"
            className="toty-logo"
          />
        </div>
      )}
    </>
  );
};

export default SingleBanner1;
