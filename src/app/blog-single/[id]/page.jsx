import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import BlogSingleContent from '@/components/blog/BlogSingleContent';
import React from 'react';
import blogData from '@/assets/jsonData/blog/BlogData.json';

export const metadata = {
    title: "Zain - Consulting Business - Blog Single"
}

const BlogSingle = async ({ params }) => {

    const { id } = await params;
    const data = blogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutStyle7 breadCrumb={data?.title || "Blog"} title={data?.title || "Blog Single"}>
                {data && <BlogSingleContent blogInfo={data} totalBlogs={blogData.length} />}
            </LayoutStyle7>
        </>
    );
};

export default BlogSingle;