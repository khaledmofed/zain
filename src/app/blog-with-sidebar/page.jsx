import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import BlogWithSidebarContent from "@/components/blog/BlogWithSidebarContent";
import React, { Suspense } from "react";

export const metadata = {
  title: "Zain - Consulting Business - Blog With Sidebar",
};

const BlogWithSidebarPage = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="blog-with-sidebar" title="Blog With Sidebar">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogWithSidebarContent />
        </Suspense>
      </LayoutStyle7>
    </>
  );
};

export default BlogWithSidebarPage;
