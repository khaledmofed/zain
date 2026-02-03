"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

function formatApiDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const SingleBlog3Column = ({ blog }) => {
  const t = useTranslations("blog");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const isFromApi =
    blog.slug != null || (blog.image && blog.image.startsWith("http"));

  const id = blog.id;
  const thumb = blog.thumb;
  const date = isFromApi ? formatApiDate(blog.published_at) : blog.date;
  const author =
    isFromApi && blog.author
      ? typeof blog.author === "object"
        ? blog.author.name
        : blog.author
      : blog.author;
  const authorIcon = isFromApi
    ? "far fa-user-circle"
    : blog.authorIcon || "far fa-user-circle";
  const title = blog.title;
  const btnIcon = blog.btnIcon || "fas fa-angle-right";
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
      <div className="blog-style-one">
        <div className="thumb">
          <Link href={blogLink}>
            <Image
              src={imgSrc}
              width={800}
              height={600}
              alt={translatedTitle || "Thumb"}
              style={{ height: "269px", objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className="info">
          <div className="blog-meta">
            <ul>
              <li>
                <i className={authorIcon}></i>
                <Link href="#">{translatedAuthor}</Link>
              </li>
              <li>{date}</li>
            </ul>
          </div>
          <h4>
            <Link href={blogLink}>{translatedTitle}</Link>
          </h4>
          <Link href={blogLink} className="btn-simple">
            <i className={isRTL ? "fas fa-angle-left" : btnIcon}></i>
            {translatedBtnText || btnText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlog3Column;
