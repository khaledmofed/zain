import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import Blog2ColumnContent from "@/components/blog/Blog2ColumnContent";
import React, { Suspense } from "react";

export const metadata = {
  title: "Zain - Consulting Business - Blog 2 Column",
};

const Blog2Column = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="blog-2-column" title="Blog 2 Column">
        <Suspense fallback={<div>Loading...</div>}>
          <Blog2ColumnContent />
        </Suspense>
      </LayoutStyle7>
    </>
  );
};

export default Blog2Column;
