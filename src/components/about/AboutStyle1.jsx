"use client";
import Image from "next/image";
import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import anim1Thumb from "@/assets/img/shape/anim-1.png";
import anim2Thumb from "@/assets/img/shape/anim-2.png";
import anim3Thumb from "@/assets/img/shape/anim-3.png";
import anim4Thumb from "@/assets/img/shape/anim-4.png";
import aboutThumb from "@/assets/img/about/about.jpg";
import About1Card from "./About1Card";
import Animate from "../animation/Animate";
import { useApp } from "@/contexts/AppContext";

function getFirstNParagraphs(html, n) {
  if (!html || typeof html !== "string") return "";
  const regex = /<p>[\s\S]*?<\/p>/gi;
  const matches = html.match(regex) || [];
  return matches.slice(0, n).join("");
}

const AboutStyle1 = ({ hideButton = false, showThirdParagraph = false }) => {
  const t = useTranslations("about");
  const locale = useLocale();
  const { homeData } = useApp();
  const innerAbout = homeData?.["inner-about"];

  const titleHtml = innerAbout?.title?.[locale] ?? t("mainTitle");
  const contentHtml = innerAbout?.content?.[locale];
  const contentToShow = contentHtml
    ? showThirdParagraph
      ? contentHtml
      : getFirstNParagraphs(contentHtml, 2)
    : null;

  return (
    <>
      <div className="about-style-one-area default-padding">
        <div className="shape-animated-left">
          <Image src={anim1Thumb} alt="Image Not Found" />
          <Image src={anim2Thumb} alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="about-style-one col-xl-6 col-lg-5">
              <div className="h4 sub-heading">{t("companyOverview")}</div>
              <h2
                className="title mb-25"
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              ></h2>
              {contentToShow ? (
                <div
                  className="about-content-html"
                  dangerouslySetInnerHTML={{ __html: contentToShow }}
                />
              ) : (
                <>
                  <p>{t("paragraph1")}</p>
                  <p>{t("paragraph2")}</p>
                  {showThirdParagraph && <p>{t("paragraph3")}</p>}
                </>
              )}
              {!hideButton && (
                <div className="mt-30">
                  <Link
                    href="/about-us"
                    className="btn circle btn-theme btn-md radius animation"
                  >
                    {t("title")}
                  </Link>
                </div>
              )}
            </div>
            <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
              <div className="about-thumb">
                <Animate className="animate__animated animate__fadeInRight">
                  <Image src={aboutThumb} alt="Image Not Found" />
                </Animate>
                <About1Card />

                <Animate
                  className="animate__animated animate__fadeInDown"
                  delay="300ms"
                >
                  <div className="thumb-shape-bottom">
                    <Image
                      src={anim3Thumb}
                      alt="Image Not Found"
                      className="anim3-gray"
                    />
                    <Image src={anim4Thumb} alt="Image Not Found" />
                  </div>
                </Animate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStyle1;
