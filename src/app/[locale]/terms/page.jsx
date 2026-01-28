import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import TermsContent from '@/components/legal/TermsContent';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'terms' });
    const tCommon = await getTranslations({ locale, namespace: 'common' });
    const baseUrl = 'https://zainom.com';
    const path = locale === 'en' ? '/terms' : `/ar/terms`;
    
    return {
        title: `${tCommon('siteTitle')} - ${t('title')}`,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                'en': `${baseUrl}/terms`,
                'ar': `${baseUrl}/ar/terms`
            }
        }
    };
}

const TermsPage = async ({ params }) => {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'terms' });

    return (
        <>
            <LayoutStyle7 breadCrumb={t('breadcrumb')} title={t('title')}>
                <TermsContent />
            </LayoutStyle7>
        </>
    );
};

export default TermsPage;
