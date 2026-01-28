import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import AboutStyle1 from '@/components/about/AboutStyle1';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import TeamStyle1 from '@/components/team/TeamStyle1';
import ProcessStyle2 from '@/components/process/ProcessStyle2';
import AboutStyle2 from '@/components/about/AboutStyle2';
import PartnerStyle2 from '@/components/partner/PartnerStyle2';                  
import React from 'react';

export const metadata = {
    title: "Zain - Consulting Business - About Us"
}

const AboutUsPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="About Us" title="About Us">
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