 "use client";
import Image from 'next/image';
import React from 'react';
import about7Thumb from '@/assets/img/about/6.png'
import about8Thumb from '@/assets/img/about/8.webp'
import anim5Shape from '@/assets/img/shape/anim-5.png'
import shape11 from '@/assets/img/shape/11.png'
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

const AboutStyle2 = ({ sectionClass }) => {
    const locale = useLocale();
    const isRTL = locale === 'ar';
    const t = useTranslations('about');

    return (
        <>
            <div
                dir={isRTL ? 'rtl' : 'ltr'}
                className={`about-style-two-area bg-gray bg-contain default-padding ${sectionClass ? sectionClass : ''}`}
                style={{ backgroundImage: `url(/assets/img/shape/29.png)` }}>
                
                <div className="large-shape">
                    <Image src={shape11} alt="Shape" className="toty-logo" />
                </div>
                <div className="container">
                    <div className="row align-center">

                        <div className={`col-lg-5 about-style-two ${isRTL ? 'order-lg-2' : ''}`}>
                            <div className="thumb">
                                <Image src={about7Thumb} alt="Image Not Found" />
                                <Image src={about8Thumb} alt="Image Not Found" />
                                <div className="experience">
                                    <h2><strong>15</strong> {t('yearsExperienceLabel')}</h2>
                                </div>
                                <div className="shape">
                                    <Image src={anim5Shape} alt="Shape" className="toty-logo" />
                                </div>
                            </div>
                        </div>
                        <div className={`about-style-two col-lg-6 ${isRTL ? 'order-lg-1' : 'offset-lg-1'}`}>
                            <h2 className="title">{t('visionTitle')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: t('visionText') }} />
                            <h2 className="title">{t('missionTitle')}</h2>
                            <p>{t('missionText')}</p>
                            {/* <div className="default-features mt-30">
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-investment-3"></i>
                                        <h4>Targeting & <br /> Positioning</h4>
                                    </Link>
                                </div>
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-progress"></i>
                                        <h4>Unique Ideas <br /> & Solution</h4>
                                    </Link>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle2;