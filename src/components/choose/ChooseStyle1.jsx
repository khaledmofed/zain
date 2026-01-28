"use client";
import Image from 'next/image';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import shape17 from '@/assets/img/shape/17.png'
import Animate from '../animation/Animate';
import IndustriesData from '@/assets/jsonData/choose/IndustriesData.json';

const ChooseStyle1 = () => {
    const t = useTranslations('choose');
    const locale = useLocale();
    const isRTL = locale === 'ar';
    const bannerImage = isRTL ? '/assets/img/banner/banner2-ar.webp' : '/assets/img/banner/banner2.jpg';
    
    // Ensure IndustriesData is an array
    const industries = Array.isArray(IndustriesData) ? IndustriesData : [];

    // Map industry ID to translation key
    const industryKeyMap = {
        1: "government",
        2: "banking",
        3: "oilGas",
        4: "industry",
        5: "logistics",
        6: "healthcare",
        7: "education",
        8: "hospitality",
        9: "retail",
        10: "construction",
        11: "enterprises"
    };

    return (
        <>
            <div className="choose-us-style-one-area default-padding text-light">
                <div className="cover-bg" style={{ backgroundImage: `url(${bannerImage})` }}></div>
                <div className="shape-left-top">
                    <Image src={shape17} alt="Shape" className="toty-logo" style={{ filter: 'grayscale(100%) brightness(1.5)' }} />
                </div>
                <div className="text-invisible">{t('companyName')}</div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                            <div className="choose-us-style-one">
                                <h2 className="title mb-20">{t('industriesWeServe')}</h2>
                                <p className="mb-40">
                                    {t('industriesDescription')}
                                </p>
                                <ul className="list-item industries-list">
                                    {industries.map((industry, index) => {
                                        const industryKey = industryKeyMap[industry.id];
                                        const translatedTitle = industryKey ? t(`industries.${industryKey}`) : industry.title;
                                        
                                        return (
                                            <Animate 
                                                key={industry.id}
                                                className="animate__animated animate__fadeInUp" 
                                                delay={`${(index % 2) * 150}ms`}
                                            >
                                                <li className="industry-item" style={{}}>
                                                    <h4>{translatedTitle}</h4>
                                                </li>
                                            </Animate>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseStyle1;
