import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import BlogSingleContent from '@/components/blog/BlogSingleContent';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import blogData from '@/assets/jsonData/blog/BlogData.json';

export async function generateMetadata({ params }) {
    const { locale, id } = await params;
    const t = await getTranslations({ locale, namespace: 'blogSingle' });
    const tBlog = await getTranslations({ locale, namespace: 'blog' });
    const tCommon = await getTranslations({ locale, namespace: 'common' });
    const baseUrl = 'https://zainom.com';
    const path = locale === 'en' ? `/blog-single/${id}` : `/ar/blog-single/${id}`;
    
    // Get translated title
    const key = String(id);
    let blogTitle = t('breadcrumb');
    try {
        blogTitle = tBlog(`items.${key}.title`);
    } catch {
        const data = blogData.find(blog => blog.id === parseInt(id));
        blogTitle = data?.title || t('breadcrumb');
    }
    
    return {
        title: `${tCommon('siteTitle')} - ${blogTitle}`,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                'en': `${baseUrl}/blog-single/${id}`,
                'ar': `${baseUrl}/ar/blog-single/${id}`
            }
        }
    };
}

const BlogSingle = async ({ params }) => {
    const { id, locale } = await params;
    const data = blogData.find(blog => blog.id === parseInt(id));
    const t = await getTranslations({ locale, namespace: 'blogSingle' });
    const tBlog = await getTranslations({ locale, namespace: 'blog' });

    // Get translated title
    const key = String(id);
    let blogTitle = t('breadcrumb');
    try {
        blogTitle = tBlog(`items.${key}.title`);
    } catch {
        blogTitle = data?.title || t('breadcrumb');
    }

    return (
        <>
            <LayoutStyle7 breadCrumb={blogTitle} title={blogTitle}>
                {data && <BlogSingleContent blogInfo={data} totalBlogs={blogData.length} />}
            </LayoutStyle7>
        </>
    );
};

export default BlogSingle;