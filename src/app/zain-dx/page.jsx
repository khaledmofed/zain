import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ZainDXContent from '@/components/business-units/ZainDXContent';
import React from 'react';

export const metadata = {
    title: "Zain - Consulting Business - Zain DX"
}

const ZainDXPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Zain DX" title="Zain DX - Digital Transformation & Intelligent Solutions">
                <ZainDXContent />
            </LayoutStyle7>
        </>
    );
};

export default ZainDXPage;
