"use client";
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

const PrivacyContent = () => {
    const t = useTranslations('common');
    const tPrivacy = useTranslations('privacy');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    return (
        <>
            <div className="legal-content-area default-padding" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="legal-content">
                                <h2 className="mb-30">{tPrivacy('title')}</h2>
                                
                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.introduction.title')}</h4>
                                    <p>{tPrivacy('sections.introduction.paragraph1')}</p>
                                    <p>{tPrivacy('sections.introduction.paragraph2')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.informationWeCollect.title')}</h4>
                                    <p>{tPrivacy('sections.informationWeCollect.paragraph')}</p>
                                    <ul className="list-item mb-20">
                                        <li dangerouslySetInnerHTML={{ __html: tPrivacy('sections.informationWeCollect.items.contactInfo').replace(':', ': ') }}></li>
                                        <li dangerouslySetInnerHTML={{ __html: tPrivacy('sections.informationWeCollect.items.businessInfo').replace(':', ': ') }}></li>
                                        <li dangerouslySetInnerHTML={{ __html: tPrivacy('sections.informationWeCollect.items.technicalInfo').replace(':', ': ') }}></li>
                                        <li dangerouslySetInnerHTML={{ __html: tPrivacy('sections.informationWeCollect.items.serviceData').replace(':', ': ') }}></li>
                                    </ul>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.howWeUse.title')}</h4>
                                    <p>{tPrivacy('sections.howWeUse.paragraph')}</p>
                                    <ul className="list-item mb-20">
                                        {tPrivacy.raw('sections.howWeUse.items').map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.dataSecurity.title')}</h4>
                                    <p>{tPrivacy('sections.dataSecurity.paragraph1')}</p>
                                    <ul className="list-item mb-20">
                                        {tPrivacy.raw('sections.dataSecurity.items').map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{tPrivacy('sections.dataSecurity.paragraph2')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.dataSharing.title')}</h4>
                                    <p>{tPrivacy('sections.dataSharing.paragraph')}</p>
                                    <ul className="list-item mb-20">
                                        <li dangerouslySetInnerHTML={{ __html: tPrivacy('sections.dataSharing.items.serviceProviders').replace(':', ': ') }}></li>
                                        <li dangerouslySetInnerHTML={{ __html: tPrivacy('sections.dataSharing.items.legalRequirements').replace(':', ': ') }}></li>
                                        <li dangerouslySetInnerHTML={{ __html: tPrivacy('sections.dataSharing.items.businessTransfers').replace(':', ': ') }}></li>
                                        <li dangerouslySetInnerHTML={{ __html: tPrivacy('sections.dataSharing.items.withConsent').replace(':', ': ') }}></li>
                                    </ul>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.clientData.title')}</h4>
                                    <p>{tPrivacy('sections.clientData.paragraph1')}</p>
                                    <ul className="list-item mb-20">
                                        {tPrivacy.raw('sections.clientData.items').map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{tPrivacy('sections.clientData.paragraph2')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.cookies.title')}</h4>
                                    <p>{tPrivacy('sections.cookies.paragraph')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.yourRights.title')}</h4>
                                    <p>{tPrivacy('sections.yourRights.paragraph')}</p>
                                    <ul className="list-item mb-20">
                                        {tPrivacy.raw('sections.yourRights.items').map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.dataRetention.title')}</h4>
                                    <p>{tPrivacy('sections.dataRetention.paragraph')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.internationalTransfers.title')}</h4>
                                    <p>{tPrivacy('sections.internationalTransfers.paragraph')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.childrenPrivacy.title')}</h4>
                                    <p>{tPrivacy('sections.childrenPrivacy.paragraph')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.updates.title')}</h4>
                                    <p>{tPrivacy('sections.updates.paragraph')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tPrivacy('sections.contact.title')}</h4>
                                    <p>{tPrivacy('sections.contact.paragraph')}</p>
                                    <p>
                                        <strong>{t('companyName')}</strong><br />
                                        {t('address')}<br />
                                        {tPrivacy('sections.contact.email')}<br />
                                        {tPrivacy('sections.contact.phone')} <span dir="ltr">+968 7272 0046</span><br />
                                        {tPrivacy('sections.contact.website')}
                                    </p>
                                </div>

                                <div className="content-section">
                                    <p className="text-muted">
                                        <small>{tPrivacy('sections.contact.lastUpdated')}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyContent;
