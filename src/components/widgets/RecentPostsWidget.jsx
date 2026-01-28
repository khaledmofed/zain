"use client";
import React from "react";
import { useTranslations } from "next-intl";
import blogData from "@/assets/jsonData/blog/BlogData.json";
import SingleRecentPost from "./SingleRecentPost";

const RecentPostsWidget = () => {
  const t = useTranslations("blog");
  return (
    <>
      <div className="sidebar-item recent-post">
        <h4 className="title">{t("common.recentPost")}</h4>
        <ul>
          {blogData.slice(0, 3).map((blog) => (
            <SingleRecentPost blog={blog} key={blog.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default RecentPostsWidget;
