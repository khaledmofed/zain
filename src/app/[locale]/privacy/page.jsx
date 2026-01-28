import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import PrivacyContent from '@/components/legal/PrivacyContent';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'privacy' });
    const tCommon = await getTranslations({ locale, namespace: 'common' });
    const baseUrl = 'https://zainom.com';
    const path = locale === 'en' ? '/privacy' : `/ar/privacy`;
    
    return {
        title: `${tCommon('siteTitle')} - ${t('title')}`,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                'en': `${baseUrl}/privacy`,
                'ar': `${baseUrl}/ar/privacy`
            }
        }
    };
}

const PrivacyPage = async ({ params }) => {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'privacy' });

    return (
        <>
            <LayoutStyle7 breadCrumb={t('breadcrumb')} title={t('title')}>
                <PrivacyContent />
            </LayoutStyle7>
        </>
    );
};

export default PrivacyPage;
