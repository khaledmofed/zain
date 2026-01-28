import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import AboutStyle1 from '@/components/about/AboutStyle1';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import TeamStyle1 from '@/components/team/TeamStyle1';
import ProcessStyle2 from '@/components/process/ProcessStyle2';
import AboutStyle2 from '@/components/about/AboutStyle2';
import PartnerStyle2 from '@/components/partner/PartnerStyle2';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'about' });
    const tCommon = await getTranslations({ locale, namespace: 'common' });
    const baseUrl = 'https://zainom.com';
    const path = locale === 'en' ? '/about-us' : `/ar/about-us`;
    
    return {
        title: `${tCommon('siteTitle')} - ${t('title')}`,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                'en': `${baseUrl}/about-us`,
                'ar': `${baseUrl}/ar/about-us`
            }
        }
    };
}

const AboutUsPage = async ({ params }) => {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'about' });

    return (
        <>
            <LayoutStyle7 breadCrumb={t('breadcrumb')} title={t('title')}>
                <AboutStyle1 hideButton={true} showThirdParagraph={true} />
                <AboutStyle2 />
                {/* <ProcessStyle1 sectionClass="bg-gray" /> */}
                <PartnerStyle1 sectionClass="default-padding" />
                <PartnerStyle2/>    
                <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />
                <ProcessStyle2 />
                {/* <TestimonialStyle1 /> */}
            </LayoutStyle7>
        </>
    );
};

export default AboutUsPage;