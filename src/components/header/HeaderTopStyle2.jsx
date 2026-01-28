"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

const HeaderTopStyle2 = () => {
    const t = useTranslations('common');

    return (
        <>
            <div className="top-bar-area top-bar-style-two">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-8">
                            <ul className="item-flex">
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info">
                                        <strong>{t('addressLabel')}</strong>
                                        {t('fullAddress')}
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-user-headset"></i>
                                    </div>
                                    <div className="info">
                                        <strong>Phone</strong>
                                        <a href="tel:+96872720046" dir="ltr">+968 7272 0046</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className="call-entry">
                                <div className="icon">
                                    <i className="fas fa-comments-alt-dollar"></i>
                                </div>
                                <div className="info">
                                    <p>Have any Questions?</p>
                                    <h5><a href="mailto:info@zainom.com">info@zainom.com</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopStyle2;