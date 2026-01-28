import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import TermsContent from '@/components/legal/TermsContent';
import React from 'react';

export const metadata = {
    title: "Zain - Consulting Business - Terms of Service"
}

const TermsPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Terms" title="Terms of Service">
                <TermsContent />
            </LayoutStyle7>
        </>
    );
};

export default TermsPage;
