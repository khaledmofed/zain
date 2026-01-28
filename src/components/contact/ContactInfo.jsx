"use client";
import React from 'react';
import Animate from '../animation/Animate';
import { useTranslations } from 'next-intl';

const ContactInfo = () => {
    const t = useTranslations('contact');
    const tCommon = useTranslations('common');

    return (
        <>
            <div className="contact-style-one-info">
                <h2>{t('title')}</h2>
                <p>
                    {t('description')}
                </p>
                <ul>

                    <Animate className="animate__animated animate__fadeInUp">
                        <li>
                            <div className="icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="content">
                                <h5 className="title">{tCommon('phone')}</h5>
                                <a href="tel:+96872720046" className="phone-number" dir="ltr">+968 7272 0046</a>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="300ms">
                        <li>
                            <div className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="info">
                                <h5 className="title">{tCommon('addressLabel')}</h5>
                                <p>
                                    {t('addressLine1')}<br />{t('addressLine2')}
                                </p>
                            </div>
                        </li>
                    </Animate>

                    <Animate className="animate__animated animate__fadeInUp" delay="500ms">
                        <li>
                            <div className="icon">
                                <i className="fas fa-envelope-open-text"></i>
                            </div>
                            <div className="info">
                                <h5 className="title">{tCommon('email')}</h5>
                                <a href="mailto:info@zainom.com">info@zainom.com</a>
                            </div>
                        </li>
                    </Animate>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;