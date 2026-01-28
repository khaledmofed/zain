"use client";
import React from 'react';
import SocialShare from '../utilities/SocialShare';
import { useTranslations } from 'next-intl';

const HeaderTopStyle3 = () => {
    const t = useTranslations('common');

    return (
        <>
            <div className="top-bar-area top-bar-style-three text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-7">
                            <ul className="item-flex">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i> {t('fullAddress')}
                                </li>
                                <li>
                                    <a href="tel:+96872720046" className="phone-number" dir="ltr"><i className="fas fa-phone-alt"></i> +968 7272 0046</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 text-end">
                            <div className="social">
                                <ul>
                                    <SocialShare />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopStyle3;