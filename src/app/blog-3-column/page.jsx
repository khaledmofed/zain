import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import Blog3ColumnContentWrapper from "@/components/blog/Blog3ColumnContentWrapper";
import React from "react";

export const metadata = {
  title: "Zain - Consulting Business - Blog 3 Column",
};

export const dynamic = "force-dynamic";

const Blog3Column = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="blog-3-column" title="Blog 3 Column">
        <Blog3ColumnContentWrapper />
      </LayoutStyle7>
    </>
  );
};

export default Blog3Column;
