"use client";
import Image from 'next/image';
import React from 'react';
import breadCrumbThumb from '@/assets/img/shape/50.png';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';

const BreadCrumb = ({ breadCrumb, title }) => {
    const t = useTranslations('common');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    return (
        <>
            <div className="breadcrumb-area bg-cover shadow dark text-center text-light" style={{ 
                backgroundImage: "url(/assets/img/banner/bb.png)" 
                // background: "#808083c4"
                }}>
                <div className="breadcrum-shape">
                    <Image src={breadCrumbThumb} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1>{title ? title : "Error 404"}</h1>
                            <ul className="breadcrumb">
                                <li><Link href="/"><i className="fas fa-home"></i> {t('home')}</Link></li>
                                <li className={isRTL ? 'me-1' : 'ms-1'}>{breadCrumb ? breadCrumb : "not-found"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;