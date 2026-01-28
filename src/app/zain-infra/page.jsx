import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ZainInfraContent from '@/components/business-units/ZainInfraContent';
import React from 'react';

export const metadata = {
    title: "Zain - Consulting Business - Zain Infra"
}

const ZainInfraPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Zain Infra" title="Zain Infra - Infrastructure, Systems & Security">
                <ZainInfraContent />
            </LayoutStyle7>
        </>
    );
};

export default ZainInfraPage;
