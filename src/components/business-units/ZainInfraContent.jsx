"use client";
import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import shape11 from '@/assets/img/shape/11.png';
import anim1Thumb from '@/assets/img/shape/anim-1.png';
import anim2Thumb from '@/assets/img/shape/anim-2.png';
import ServiceAccordionItem from './ServiceAccordionItem';

const ZainInfraContent = () => {
    const t = useTranslations('zainInfra');
    const tCommon = useTranslations('common');
    const tServices = useTranslations('services');

    const accordionServices = [
        'coreInfrastructure',
        'systemsIntegration',
        'cybersecurity',
        'physicalSecurity',
        'businessContinuity'
    ];

    return (
        <>
            <div className="business-unit-details-area overflow-hidden default-padding position-relative">
                <div className="large-shape" style={{ maxWidth: "15%", top: "-6px" }}>
                    <Image src={shape11} alt="Shape" className="toty-logo" />
                </div>
                <div className="shape-animated-left">
                    <Image src={anim1Thumb} alt="Image Not Found" />
                    <Image src={anim2Thumb} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="business-unit-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                <div className="unit-header mb-40">
                                <h4 className="sub-heading">{t('subHeading')}</h4>
                                    {/* <div className="unit-badge mb-20" style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: '#bf1d2e', color: 'white', borderRadius: '5px', fontSize: '14px', fontWeight: '600' }}>
                                        Zain Infra
                                    </div> */}
                                    <h1 className="mb-20">{t('mainTitle')}</h1>
                                    <h2 className="mb-20" style={{ fontSize: '20px', fontWeight: '500', color: '#818183' }}>{t('unitRole')}</h2>
                                    <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                        {t('unitRoleText')}
                                    </p>
                                </div>

                                <div className="intro-section mb-50">
                                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                                        {t('introText')}
                                    </p>
                                </div>

                                <div className="services-structure mb-50 faq-style-one">
                                    <h2 className="mb-30" style={{ fontSize: '28px', fontWeight: '600' }}>{t('serviceStructure')}</h2>
                                    
                                    <div className="accordion" id="servicesAccordion">
                                        {accordionServices.map((serviceKey, index) => (
                                            <ServiceAccordionItem
                                                key={serviceKey}
                                                serviceKey={serviceKey}
                                                title={t(`services.${serviceKey}.title`)}
                                                items={t.raw(`services.${serviceKey}.items`)}
                                                index={index}
                                                isFirst={index === 0}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="single-widget bg-dark quick-contact-widget text-light" style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}>
                                    <div className="content">
                                        <h3>{tCommon('needHelp')}</h3>
                                        <p>
                                            {tServices('contactSupportText')}
                                        </p>
                                        <h3><a href="tel:+96872720046" style={{ color: 'white' }} dir="ltr">+968 7272 0046</a></h3>
                                        <h4><a href="mailto:info@zainom.com" style={{ color: 'white' }}>info@zainom.com</a></h4>
                                        <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact-us">{tCommon('contactUs')}</Link>
                                    </div>
                                </div>

                                <div className="single-widget services-list-widget mt-40">
                                    <h4 className="widget-title">{tServices('businessUnits')}</h4>
                                    <div className="content">
                                        <ul>
                                            <li className="current-item"><Link href="/zain-infra">{tCommon('zainInfra')}</Link></li>
                                            <li><Link href="/zain-dx">{tCommon('zainDX')}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ZainInfraContent;
