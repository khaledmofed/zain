import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import Blog2ColumnContentWrapper from "@/components/blog/Blog2ColumnContentWrapper";
import React from "react";

export const metadata = {
  title: "Zain - Consulting Business - Blog 2 Column",
};

export const dynamic = "force-dynamic";

const Blog2Column = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="blog-2-column" title="Blog 2 Column">
        <Blog2ColumnContentWrapper />
      </LayoutStyle7>
    </>
  );
};

export default Blog2Column;
