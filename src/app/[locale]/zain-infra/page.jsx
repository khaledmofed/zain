import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ZainInfraContent from '@/components/business-units/ZainInfraContent';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'zainInfra' });
    const tCommon = await getTranslations({ locale, namespace: 'common' });
    const baseUrl = 'https://zainom.com';
    const path = locale === 'en' ? '/zain-infra' : `/ar/zain-infra`;
    
    return {
        title: `${tCommon('siteTitle')} - ${t('title')}`,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                'en': `${baseUrl}/zain-infra`,
                'ar': `${baseUrl}/ar/zain-infra`
            }
        }
    };
}

const ZainInfraPage = async ({ params }) => {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'zainInfra' });

    return (
        <>
            <LayoutStyle7 breadCrumb={t('breadcrumb')} title={t('title')}>
                <ZainInfraContent />
            </LayoutStyle7>
        </>
    );
};

export default ZainInfraPage;
