import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import BlogSingleContent from "@/components/blog/BlogSingleContent";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";
import blogData from "@/assets/jsonData/blog/BlogData.json";
import { fetchBlogBySlug, fetchHome } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { locale, id: slugOrId } = await params;
  const t = await getTranslations({ locale, namespace: "blogSingle" });
  const tBlog = await getTranslations({ locale, namespace: "blog" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const baseUrl = "https://zainom.com";

  const apiBlog = await fetchBlogBySlug(slugOrId, locale);
  if (apiBlog) {
    const path =
      locale === "en"
        ? `/blog-single/${apiBlog.slug}`
        : `/${locale}/blog-single/${apiBlog.slug}`;
    return {
      title: `${tCommon("siteTitle")} - ${apiBlog.title}`,
      description: apiBlog.excerpt || apiBlog.title,
      alternates: {
        canonical: `${baseUrl}${path}`,
        languages: {
          en: `${baseUrl}/blog-single/${apiBlog.slug}`,
          ar: `${baseUrl}/ar/blog-single/${apiBlog.slug}`,
        },
      },
    };
  }

  const numId = parseInt(slugOrId, 10);
  if (!Number.isNaN(numId)) {
    const data = blogData.find((blog) => blog.id === numId);
    const key = String(slugOrId);
    let blogTitle = t("breadcrumb");
    try {
      blogTitle = tBlog(`items.${key}.title`);
    } catch {
      blogTitle = data?.title || t("breadcrumb");
    }
    const path =
      locale === "en"
        ? `/blog-single/${slugOrId}`
        : `/${locale}/blog-single/${slugOrId}`;
    return {
      title: `${tCommon("siteTitle")} - ${blogTitle}`,
      alternates: {
        canonical: `${baseUrl}${path}`,
        languages: {
          en: `${baseUrl}/blog-single/${slugOrId}`,
          ar: `${baseUrl}/ar/blog-single/${slugOrId}`,
        },
      },
    };
  }

  return { title: `${tCommon("siteTitle")} - ${t("breadcrumb")}` };
}

const BlogSingle = async ({ params }) => {
  const { id: slugOrId, locale } = await params;

  const apiBlog = await fetchBlogBySlug(slugOrId, locale);
  if (apiBlog) {
    const homeData = await fetchHome(locale);
    const blogsList = homeData?.blogs ?? [];
    const currentIndex = blogsList.findIndex(
      (b) => b.slug === apiBlog.slug || b.id === apiBlog.id,
    );
    const prevBlog = currentIndex > 0 ? blogsList[currentIndex - 1] : null;
    const nextBlog =
      currentIndex >= 0 && currentIndex < blogsList.length - 1
        ? blogsList[currentIndex + 1]
        : null;

    return (
      <LayoutStyle7 breadCrumb={apiBlog.title} title={apiBlog.title}>
        <BlogSingleContent
          blogInfo={apiBlog}
          isFromApi
          totalBlogs={blogsList.length}
          prevBlog={prevBlog}
          nextBlog={nextBlog}
        />
      </LayoutStyle7>
    );
  }

  const numId = parseInt(slugOrId, 10);
  if (!Number.isNaN(numId)) {
    const data = blogData.find((blog) => blog.id === numId);
    if (!data) notFound();

    const t = await getTranslations({ locale, namespace: "blogSingle" });
    const tBlog = await getTranslations({ locale, namespace: "blog" });
    const key = String(slugOrId);
    let blogTitle = t("breadcrumb");
    try {
      blogTitle = tBlog(`items.${key}.title`);
    } catch {
      blogTitle = data?.title || t("breadcrumb");
    }

    const currentIndex = blogData.findIndex((b) => b.id === numId);
    const prevBlog = currentIndex > 0 ? blogData[currentIndex - 1] : null;
    const nextBlog =
      currentIndex < blogData.length - 1 ? blogData[currentIndex + 1] : null;

    return (
      <LayoutStyle7 breadCrumb={blogTitle} title={blogTitle}>
        <BlogSingleContent
          blogInfo={data}
          totalBlogs={blogData.length}
          prevBlog={prevBlog}
          nextBlog={nextBlog}
        />
      </LayoutStyle7>
    );
  }

  notFound();
};

export default BlogSingle;
