"use client";
import { Suspense } from "react";
import Blog2ColumnContent from "./Blog2ColumnContent";

const Blog2ColumnContentWrapper = () => {
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
      <Blog2ColumnContent />
    </Suspense>
  );
};

export default Blog2ColumnContentWrapper;
