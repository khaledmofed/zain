"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

const ProjectTitle = () => {
    const t = useTranslations('project');
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-heading">{t('popularProjects')}</h4>
                            <h2 className="title">{t('recentCompletedProjects')}</h2>
                            <div className="devider"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectTitle;