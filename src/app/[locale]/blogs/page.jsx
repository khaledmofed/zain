import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'blogs' });
    const tCommon = await getTranslations({ locale, namespace: 'common' });
    const baseUrl = 'https://zainom.com';
    const path = locale === 'en' ? '/blogs' : `/ar/blogs`;
    
    return {
        title: `${tCommon('siteTitle')} - ${t('title')}`,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                'en': `${baseUrl}/blogs`,
                'ar': `${baseUrl}/ar/blogs`
            }
        }
    };
}

const BlogsPage = async ({ params }) => {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'blogs' });

    return (
        <>
            <LayoutStyle7 breadCrumb={t('breadcrumb')} title={t('title')}>
                <Blog3ColumnContent />
            </LayoutStyle7>
        </>
    );
};

export default BlogsPage;
