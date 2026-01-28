"use client";
import { Suspense } from "react";
import Blog3ColumnContent from "./Blog3ColumnContent";

const Blog3ColumnContentWrapper = () => {
  return (
    <Suspense
      fallback={
        <div className="blog-area blog-grid default-padding">
          <div className="container">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      }
    >
      <Blog3ColumnContent />
    </Suspense>
  );
};

export default Blog3ColumnContentWrapper;
