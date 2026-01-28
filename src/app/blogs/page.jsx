import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import React from 'react';

export const metadata = {
    title: "Zain - Consulting Business - Blogs"
}

const BlogsPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Blogs" title="Blogs">
                <Blog3ColumnContent />
            </LayoutStyle7>
        </>
    );
};

export default BlogsPage;
