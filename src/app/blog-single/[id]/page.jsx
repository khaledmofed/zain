import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import BlogSingleContent from "@/components/blog/BlogSingleContent";
import React from "react";
import blogData from "@/assets/jsonData/blog/BlogData.json";
import { fetchBlogBySlug, fetchHome } from "@/lib/api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const BlogSingle = async ({ params }) => {
  const { id: slugOrId } = await params;
  const locale = "en";

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

    const currentIndex = blogData.findIndex((b) => b.id === numId);
    const prevBlog = currentIndex > 0 ? blogData[currentIndex - 1] : null;
    const nextBlog =
      currentIndex < blogData.length - 1 ? blogData[currentIndex + 1] : null;

    return (
      <LayoutStyle7
        breadCrumb={data?.title || "Blog"}
        title={data?.title || "Blog Single"}
      >
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
