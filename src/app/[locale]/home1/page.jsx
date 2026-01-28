import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import AboutStyle1 from '@/components/about/AboutStyle1';
import BannerStyle1 from '@/components/banner/BannerStyle1';
import BlogStyle1 from '@/components/blog/BlogStyle1';
import ChooseStyle1 from '@/components/choose/ChooseStyle1';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import ProjectStyle1 from '@/components/project/ProjectStyle1';
import RequestCallStyle1 from '@/components/request/RequestCallStyle1';
import ServicesStyle1 from '@/components/services/ServicesStyle1';
import TeamStyle1 from '@/components/team/TeamStyle1';
// import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import ProcessStyle2 from '@/components/process/ProcessStyle2';
import PartnerStyle2 from '@/components/partner/PartnerStyle2';
import React from 'react';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const tCommon = await getTranslations({ locale, namespace: 'common' });
    const baseUrl = 'https://zainom.com';
    const path = locale === 'en' ? '/home1' : `/ar/home1`;
    
    return {
        title: tCommon('siteTitle'),
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                'en': `${baseUrl}/home1`,
                'ar': `${baseUrl}/ar/home1`
            }
        }
    };
}

const Home1 = async ({ params }) => {
    return (
        <>
            <LayoutStyle1>
                <BannerStyle1 />
                <AboutStyle1 />
                <ServicesStyle1 />
                <ProcessStyle1 />
                <ChooseStyle1 />
                <PartnerStyle1 sectionClass="default-padding" />
                <PartnerStyle2 />
                <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />
                <ProjectStyle1 />
                <RequestCallStyle1 />
                {/* <TestimonialStyle1 /> */}
                <ProcessStyle2 />
                <BlogStyle1 sectionClass="bg-gray" />
            </LayoutStyle1>
        </>
    );
};

export default Home1;