"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

const SingleProject1 = ({ project }) => {
  const t = useTranslations("project");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const {
    id,
    thumb,
    tag,
    title,
    text,
    btnText,
    link,
    image,
    category,
    short_description,
    url,
    slug,
  } = project;

  const isFromApi = image != null || slug != null;
  const thumbOverrideByLocale = { 1: { ar: "strwbary.jpeg" } };
  const resolvedThumb =
    image ||
    (!isFromApi && thumbOverrideByLocale[id]?.[locale]
      ? thumbOverrideByLocale[id][locale]
      : thumb);

  const projectKeyMap = {
    1: "strawberryGarden",
    2: "businessProgramManagement",
  };
  const projectKey = projectKeyMap[id];
  const displayTag = isFromApi
    ? category
    : projectKey
      ? t(`items.${projectKey}.tag`)
      : tag;
  const displayTitle = isFromApi
    ? title
    : projectKey
      ? t(`items.${projectKey}.title`)
      : title;
  const displayText = isFromApi
    ? short_description
    : projectKey
      ? t(`items.${projectKey}.text`)
      : text;
  const displayBtnText = isFromApi
    ? tCommon("readMore")
    : projectKey
      ? t(`items.${projectKey}.btnText`)
      : btnText;

  const projectLink = isFromApi
    ? url || `/project-details/${id}`
    : link || `/project-details/${id}`;
  const isExternalLink = projectLink && projectLink.startsWith("http");
  const imgSrc = isFromApi
    ? image
    : thumb
      ? `/assets/img/projects/${resolvedThumb}`
      : null;

  return (
    <>
      <div className="project-style-one">
        <div className="row align-bottom">
          <div className="col-lg-7 pr-0 pr-md-15 pr-xs-15 pl-md-15 pl-xs-15">
            <div className="thumb">
              <Image
                src={resolvedThumb}
                width={1900}
                height={1267}
                alt="Image Not Found"
              />
            </div>
          </div>
          <div className="col-lg-5 pl-0 pl-md-15 pl-xs-15 pr-md-15 pr-xs-15">
            <div className="info">
              <span>{displayTag}</span>
              <h3>
                {isExternalLink ? (
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {displayTitle}
                  </a>
                ) : (
                  <Link href={projectLink}>{displayTitle}</Link>
                )}
              </h3>
              <p>{displayText}</p>
              {isExternalLink ? (
                <a
                  className="btn-animation dark mt-10"
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-arrow-right"></i>{" "}
                  <span>{displayBtnText}</span>
                </a>
              ) : (
                <Link className="btn-animation dark mt-10" href={projectLink}>
                  <i className="fas fa-arrow-right"></i>{" "}
                  <span>{displayBtnText}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject1;
