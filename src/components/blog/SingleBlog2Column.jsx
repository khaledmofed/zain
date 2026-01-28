"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

const SingleBlog2Column = ({ blog }) => {
    const t = useTranslations('blog');
    const locale = useLocale();
    const isRTL = locale === 'ar';
    const { id, thumb, date, author, authorIcon, title, btnIcon, btnText } = blog;

    const key = String(id);
    let translatedTitle = title;
    let translatedAuthor = author;
    try {
        translatedTitle = t(`items.${key}.title`);
        translatedAuthor = t(`items.${key}.author`);
    } catch {
        // fallback to JSON
    }
    const translatedBtnText = t('common.readMore');

    return (
        <>
            <div className="blog-style-one">
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb}`} width={800} height={600} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="blog-meta">
                        <ul>
                            <li>
                                <i className={authorIcon}></i>
                                <Link href="#">{translatedAuthor}</Link>
                            </li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h3>
                        <Link href={`/blog-single-with-sidebar/${id}`}>{translatedTitle}</Link>
                    </h3>
                    <Link href={`/blog-single-with-sidebar/${id}`} className="btn-simple"><i className={isRTL ? "fas fa-angle-left" : btnIcon}></i>{translatedBtnText || btnText}</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog2Column;