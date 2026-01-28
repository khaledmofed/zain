import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import PrivacyContent from '@/components/legal/PrivacyContent';
import React from 'react';

export const metadata = {
    title: "Zain - Consulting Business - Privacy Policy"
}

const PrivacyPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Privacy" title="Privacy Policy">
                <PrivacyContent />
            </LayoutStyle7>
        </>
    );
};

export default PrivacyPage;
