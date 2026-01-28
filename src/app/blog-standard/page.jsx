import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import BlogStandardContentWrapper from "@/components/blog/BlogStandardContentWrapper";
import React from "react";

export const metadata = {
  title: "Zain - Consulting Business - Blog Standard",
};

export const dynamic = "force-dynamic";

const BlogStandardPage = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="blog-standard" title="Blog Standard">
        <BlogStandardContentWrapper />
      </LayoutStyle7>
    </>
  );
};

export default BlogStandardPage;
