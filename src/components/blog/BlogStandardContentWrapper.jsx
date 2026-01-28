"use client";
import { Suspense } from "react";
import BlogStandardContent from "./BlogStandardContent";

const BlogStandardContentWrapper = () => {
  return (
    <Suspense
      fallback={
        <div className="blog-area full-blog blog-standard default-padding">
          <div className="container">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      }
    >
      <BlogStandardContent />
    </Suspense>
  );
};

export default BlogStandardContentWrapper;
