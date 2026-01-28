"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Animate from '../animation/Animate';

const SingleBlog1 = ({ blog }) => {
    const t = useTranslations('blog');
    const locale = useLocale();
    const isRTL = locale === 'ar';
    const { id, thumb, date, animationDelay, author, title, btnText } = blog;

    const key = String(id);
    let translatedTitle = title;
    let translatedText = blog.text;
    let translatedAuthor = author;
    try {
        translatedTitle = t(`items.${key}.title`);
        translatedText = t(`items.${key}.text`);
        translatedAuthor = t(`items.${key}.author`);
    } catch {
        // fallback to JSON
    }
    const translatedBtnText = t('common.readMore');

    return (
        <>
            <Animate className="animate__animated animate__fadeInUp" delay={[animationDelay]}>
                <div className="col-xl-4 col-md-6 mb-30">
                    <div className="blog-style-one">
                        <div className="thumb">
                            <Link href={`/blog-single/${id}`}><Image src={`/assets/img/blog/${thumb}`} alt="Thumb" width={800} height={600}  style={{ height: '269px', objectFit: 'cover' }} /></Link>
                        </div>
                        <div className="info">
                            <div className="blog-meta">
                                <ul>
                                    <li>
                                        <span>{t('common.by')} </span>
                                        <Link href="#" scroll={false}>{translatedAuthor}</Link>
                                    </li>
                                    <li>{date}</li>
                                </ul>
                            </div>
                            <h4>
                                <Link href={`/blog-single/${id}`}>{translatedTitle}</Link>
                            </h4>
                            <Link href={`/blog-single/${id}`} className="btn-simple"><i className={isRTL ? "fas fa-angle-left" : "fas fa-angle-right"}></i>{translatedBtnText || btnText}</Link>
                        </div>
                    </div>
                </div>
            </Animate>
        </>
    );
};

export default SingleBlog1;