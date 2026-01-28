import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import BlogWithSidebarContentWrapper from "@/components/blog/BlogWithSidebarContentWrapper";
import React from "react";

export const metadata = {
  title: "Zain - Consulting Business - Blog With Sidebar",
};

export const dynamic = "force-dynamic";

const BlogWithSidebarPage = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="blog-with-sidebar" title="Blog With Sidebar">
        <BlogWithSidebarContentWrapper />
      </LayoutStyle7>
    </>
  );
};

export default BlogWithSidebarPage;
