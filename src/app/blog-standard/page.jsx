import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import BlogStandardContent from "@/components/blog/BlogStandardContent";
import React, { Suspense } from "react";

export const metadata = {
  title: "Zain - Consulting Business - Blog Standard",
};

const BlogStandardPage = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="blog-standard" title="Blog Standard">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogStandardContent />
        </Suspense>
      </LayoutStyle7>
    </>
  );
};

export default BlogStandardPage;
