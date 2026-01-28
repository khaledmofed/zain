"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

const TeamTitle = ({titleClass}) => {
    const t = useTranslations('team');
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className={`site-heading text-center ${titleClass ? titleClass : ""}`}>
                            <h4 className="sub-heading">{t('teamMembers')}</h4>
                            <h2 className="title">{t('meetOurExperts')}</h2>
                            <div className="devider"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamTitle;