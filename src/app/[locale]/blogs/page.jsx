import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import Blog3ColumnContent from "@/components/blog/Blog3ColumnContent";
import { getTranslations } from "next-intl/server";
import React from "react";
import { fetchBlogs } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blogs" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const baseUrl = "https://zainom.com";
  const path = locale === "en" ? "/blogs" : `/ar/blogs`;

  return {
    title: `${tCommon("siteTitle")} - ${t("title")}`,
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        en: `${baseUrl}/blogs`,
        ar: `${baseUrl}/ar/blogs`,
      },
    },
  };
}

const BlogsPage = async ({ params, searchParams: searchParamsProp }) => {
  const { locale } = await params;
  const searchParams =
    typeof searchParamsProp?.then === "function"
      ? await searchParamsProp
      : searchParamsProp || {};
  const t = await getTranslations({ locale, namespace: "blogs" });

  const page = Math.max(1, parseInt(String(searchParams.page || "1"), 10) || 1);
  const category = searchParams.category
    ? String(searchParams.category)
    : undefined;
  const featured =
    searchParams.featured !== undefined ? searchParams.featured : undefined;

  const result = await fetchBlogs(page, locale, {
    per_page: 12,
    category,
    featured,
  });

  const blogsList = result?.data ?? [];
  const meta = result?.meta ?? null;

  return (
    <>
      <LayoutStyle7 breadCrumb={t("breadcrumb")} title={t("title")}>
        <Blog3ColumnContent
          initialBlogs={result != null ? blogsList : null}
          meta={meta}
          category={category}
          featured={featured}
        />
      </LayoutStyle7>
    </>
  );
};

export default BlogsPage;
