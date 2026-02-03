"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Animate from "../animation/Animate";

const formatApiDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const SingleBlog1 = ({ blog }) => {
  const t = useTranslations("blog");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const isFromApi =
    blog.slug != null || (blog.image && blog.image.startsWith("http"));

  const id = blog.id;
  const thumb = blog.thumb;
  const date = isFromApi ? formatApiDate(blog.published_at) : blog.date;
  const animationDelay = blog.animationDelay ?? "300ms";
  const author = isFromApi ? "Admin" : blog.author;
  const title = blog.title;
  const btnText = blog.btnText;

  const key = String(id);
  let translatedTitle = title;
  let translatedAuthor = author;
  if (!isFromApi) {
    try {
      translatedTitle = t(`items.${key}.title`);
      translatedAuthor = t(`items.${key}.author`);
    } catch {
      // fallback to JSON
    }
  }
  const translatedBtnText = t("common.readMore");

  const blogLink = isFromApi
    ? `/blog-single/${blog.slug}`
    : `/blog-single/${id}`;
  const imgSrc =
    isFromApi && blog.image ? blog.image : `/assets/img/blog/${thumb}`;

  return (
    <>
      <Animate
        className="animate__animated animate__fadeInUp"
        delay={[animationDelay]}
      >
        <div className="col-xl-4 col-md-6 mb-30">
          <div className="blog-style-one">
            <div className="thumb">
              <Link href={blogLink}>
                <Image
                  src={imgSrc}
                  alt={translatedTitle || "Thumb"}
                  width={800}
                  height={600}
                  style={{ height: "269px", objectFit: "cover" }}
                />
              </Link>
            </div>
            <div className="info">
              <div className="blog-meta">
                <ul>
                  <li>
                    <span>{t("common.by")} </span>
                    <Link href="#" scroll={false}>
                      {translatedAuthor}
                    </Link>
                  </li>
                  <li>{date}</li>
                </ul>
              </div>
              <h4>
                <Link href={blogLink}>{translatedTitle}</Link>
              </h4>
              <Link href={blogLink} className="btn-simple">
                <i
                  className={isRTL ? "fas fa-angle-left" : "fas fa-angle-right"}
                ></i>
                {translatedBtnText || btnText}
              </Link>
            </div>
          </div>
        </div>
      </Animate>
    </>
  );
};

export default SingleBlog1;
