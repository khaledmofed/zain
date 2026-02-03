"use client";
import Image from "next/image";
import React from "react";
import about7Thumb from "@/assets/img/about/6.png";
import about8Thumb from "@/assets/img/about/8.webp";
import anim5Shape from "@/assets/img/shape/anim-5.png";
import shape11 from "@/assets/img/shape/11.png";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { useApp } from "@/contexts/AppContext";

function decodeHtmlEntities(html) {
  if (!html || typeof html !== "string") return "";
  return html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

const AboutStyle2 = ({ sectionClass, visionData, missionData }) => {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const t = useTranslations("about");
  const { homeData } = useApp();
  const statistics = homeData?.statistics ?? [];
  const stat2 = statistics[2];

  const expValue = stat2?.value ?? "15";
  const expLabel = stat2?.label ?? t("yearsExperienceLabel");
  const expSuffix = stat2?.suffix ?? "";

  const visionPage = visionData?.pages?.[0] ?? visionData;
  const missionPage = missionData?.pages?.[0] ?? missionData;

  const visionImgSrc = visionPage?.header_image ?? about7Thumb;
  const missionImgSrc = missionPage?.header_image ?? about8Thumb;
  const visionTitle = visionPage?.title ?? t("visionTitle");
  const visionContent = visionPage?.content
    ? decodeHtmlEntities(visionPage.content)
    : null;
  const missionTitle = missionPage?.title ?? t("missionTitle");
  const missionContent = missionPage?.content
    ? decodeHtmlEntities(missionPage.content)
    : null;

  return (
    <>
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={`about-style-two-area bg-gray bg-contain default-padding ${sectionClass ? sectionClass : ""}`}
        style={{ backgroundImage: `url(/assets/img/shape/29.png)` }}
      >
        <div className="large-shape">
          <Image src={shape11} alt="Shape" className="toty-logo" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div
              className={`col-lg-5 about-style-two ${isRTL ? "order-lg-2" : ""}`}
            >
              <div className="thumb">
                <Image
                  src={visionImgSrc}
                  alt={visionTitle || "Image Not Found"}
                  width={800}
                  height={600}
                />
                <Image
                  src={missionImgSrc}
                  alt={missionTitle || "Image Not Found"}
                  width={800}
                  height={600}
                />
                <div className="experience">
                  <h2>
                    <strong>{expValue}</strong>
                    {expSuffix ? ` ${expSuffix}` : ""} {expLabel}
                  </h2>
                </div>
                <div className="shape">
                  <Image src={anim5Shape} alt="Shape" className="toty-logo" />
                </div>
              </div>
            </div>
            <div
              className={`about-style-two col-lg-6 ${isRTL ? "order-lg-1" : "offset-lg-1"}`}
            >
              <h2 className="title">{visionTitle}</h2>
              {visionContent ? (
                <div
                  className="about-content-html"
                  dangerouslySetInnerHTML={{ __html: visionContent }}
                />
              ) : (
                <p dangerouslySetInnerHTML={{ __html: t("visionText") }} />
              )}
              <h2 className="title">{missionTitle}</h2>
              {missionContent ? (
                <div
                  className="about-content-html"
                  dangerouslySetInnerHTML={{ __html: missionContent }}
                />
              ) : (
                <p>{t("missionText")}</p>
              )}
              {/* <div className="default-features mt-30">
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-investment-3"></i>
                                        <h4>Targeting & <br /> Positioning</h4>
                                    </Link>
                                </div>
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-progress"></i>
                                        <h4>Unique Ideas <br /> & Solution</h4>
                                    </Link>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStyle2;
