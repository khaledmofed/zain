"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import AchievementCounter1 from './AchievementCounter1';

const RequestCallStyle1 = () => {
    const t = useTranslations('common');
    
    return (
        <>
            <div className="request-call-back-area text-light default-padding" style={{ backgroundImage: `url(/assets/img/banner/13.jpg)` }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <h2 className="title">{t('readyToTransform')}</h2>
                            <p className="mt-20 mb-20">
                            {t('buildDigitalFuture')}
                            </p>
                            <Link className="btn circle btn-light mt-10 mt-md-15 mt-xs-10 btn-md radius animation" href="/contact-us">{t('requestCallBack')}</Link>
                        </div>
                        <div className="col-lg-6 text-end">
                            <AchievementCounter1 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestCallStyle1;