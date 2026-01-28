"use client";
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

const TermsContent = () => {
    const t = useTranslations('common');
    const tTerms = useTranslations('terms');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    return (
        <>
            <div className="legal-content-area default-padding" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="legal-content">
                                <h2 className="mb-30">{tTerms('title')}</h2>
                                
                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tTerms('sections.introduction.title')}</h4>
                                    <p>{tTerms('sections.introduction.paragraph1')}</p>
                                    <p>{tTerms('sections.introduction.paragraph2')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tTerms('sections.servicesDescription.title')}</h4>
                                    <p>{tTerms('sections.servicesDescription.paragraph1')}</p>
                                    <ul className="list-item mb-20">
                                        <li><strong>{t('zainInfra')}:</strong> {tTerms('zainInfraDescription')}</li>
                                        <li><strong>{t('zainDX')}:</strong> {tTerms('zainDXDescription')}</li>
                                    </ul>
                                    <p>{tTerms('sections.servicesDescription.paragraph2')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tTerms('sections.serviceAgreements.title')}</h4>
                                    <p>{tTerms('sections.serviceAgreements.paragraph')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tTerms('sections.intellectualProperty.title')}</h4>
                                    <p>{tTerms('sections.intellectualProperty.paragraph')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tTerms('sections.dataProtection.title')}</h4>
                                    <p>{tTerms('sections.dataProtection.paragraph')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tTerms('sections.limitationLiability.title')}</h4>
                                    <p>{tTerms('sections.limitationLiability.paragraph')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tTerms('sections.compliance.title')}</h4>
                                    <p>{tTerms('sections.compliance.paragraph')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tTerms('sections.modifications.title')}</h4>
                                    <p>{tTerms('sections.modifications.paragraph')}</p>
                                </div>

                                <div className="content-section mb-40">
                                    <h4 className="mb-20">{tTerms('sections.contact.title')}</h4>
                                    <p>{tTerms('sections.contact.paragraph')}</p>
                                    <p>
                                        <strong>{t('companyName')}</strong><br />
                                        {t('address')}<br />
                                        {tTerms('sections.contact.email')}<br />
                                        {tTerms('sections.contact.phone')} <span dir="ltr">+968 7272 0046</span><br />
                                        {tTerms('sections.contact.website')}
                                    </p>
                                </div>

                                <div className="content-section">
                                    <p className="text-muted">
                                        <small>{tTerms('sections.contact.lastUpdated')}</small>
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

export default TermsContent;
