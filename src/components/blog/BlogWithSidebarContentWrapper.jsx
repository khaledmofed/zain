"use client";
import { Suspense } from "react";
import BlogWithSidebarContent from "./BlogWithSidebarContent";

const BlogWithSidebarContentWrapper = () => {
  return (
    <Suspense
      fallback={
        <div className="blog-area full-blog default-padding">
          <div className="container">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      }
    >
      <BlogWithSidebarContent />
    </Suspense>
  );
};

export default BlogWithSidebarContentWrapper;
