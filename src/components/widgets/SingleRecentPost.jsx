"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';



const SingleRecentPost = ({ blog }) => {
    const t = useTranslations('blog');
    const { id, thumbFull, title, date } = blog

    const key = String(id);
    let translatedTitle = title;
    try {
        translatedTitle = t(`items.${key}.title`);
    } catch {
        // fallback to JSON
    }

    const truncateString = (str) => {
        if (str.length <= 30) {
            return str;
        }
        return `${str.slice(0, 30)} ...`;
    };

    const truncatedTitle = truncateString(translatedTitle);

    return (
        <>
            <li>
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumbFull}`} width={1900} height={995} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta-title">
                        <span className="post-date">{date}</span>
                    </div>
                    <Link href={`/blog-single-with-sidebar/${id}`}>{truncatedTitle}</Link>
                </div>
            </li>
        </>
    );
};

export default SingleRecentPost;