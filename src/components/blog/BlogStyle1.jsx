"use client";
import React from "react";
import { useTranslations } from "next-intl";
import BlogData from "@/assets/jsonData/blog/BlogData.json";
import SingleBlog1 from "./SingleBlog1";
import { useApp } from "@/contexts/AppContext";

const BlogStyle1 = ({ sectionClass, titleClass }) => {
  const t = useTranslations("blog");
  const { homeData } = useApp();
  const apiBlogs = homeData?.blogs ?? [];
  const useApiData = Array.isArray(apiBlogs) && apiBlogs.length > 0;
  const rawList = useApiData ? apiBlogs : BlogData.slice(0, 3);
  const list = [...rawList]
    .sort((a, b) => (a.order ?? a.id ?? 0) - (b.order ?? b.id ?? 0))
    .slice(0, 3);

  return (
    <>
      <div
        className={`home-blog-area default-padding bottom-less ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className={`site-heading text-center ${titleClass ? titleClass : ""}`}
              >
                <h4 className="sub-heading">{t("latestBlog")}</h4>
                <h2 className="title">{t("blogsNews")}</h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {list.map((blog) => (
              <SingleBlog1 blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogStyle1;
