"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';

const SingleProject1 = ({ project }) => {
    const t = useTranslations('project');
  const locale = useLocale();
    const { id, thumb, tag, title, text, btnText, link } = project;
    const projectLink = link || `/project-details/${id}`;
    const isExternalLink = link && link.startsWith('http');

    const projectKeyMap = {
        1: 'strawberryGarden',
        2: 'businessProgramManagement'
    };

    const projectKey = projectKeyMap[id];
    const translatedTag = projectKey ? t(`items.${projectKey}.tag`) : tag;
    const translatedTitle = projectKey ? t(`items.${projectKey}.title`) : title;
    const translatedText = projectKey ? t(`items.${projectKey}.text`) : text;
    const translatedBtnText = projectKey ? t(`items.${projectKey}.btnText`) : btnText;

  // Locale-specific thumbnails (keep JSON as base structure)
  const thumbOverrideByLocale = {
    1: { ar: 'strwbary.jpeg' }
  };
  const resolvedThumb = thumbOverrideByLocale[id]?.[locale] || thumb;

    return (
        <>
            <div className="project-style-one">
                <div className="row align-bottom">
                    <div className="col-lg-7 pr-0 pr-md-15 pr-xs-15 pl-md-15 pl-xs-15">
                        <div className="thumb">
              <Image src={`/assets/img/projects/${resolvedThumb}`} width={1900} height={1267} alt="Image Not Found" />
                        </div>
                    </div>
                    <div className="col-lg-5 pl-0 pl-md-15 pl-xs-15 pr-md-15 pr-xs-15">
                        <div className="info">
                            <span>{translatedTag}</span>
                            <h3><Link href={projectLink} target="_blank">{translatedTitle}</Link></h3>
                            <p>{translatedText}</p>
                            {isExternalLink ? (
                                <a className="btn-animation dark mt-10" href={link} target="_blank" rel="noopener noreferrer"><i className="fas fa-arrow-right"></i> <span>{translatedBtnText}</span></a>
                            ) : (
                                <Link className="btn-animation dark mt-10" href={projectLink}><i className="fas fa-arrow-right"></i> <span>{translatedBtnText}</span></Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject1;