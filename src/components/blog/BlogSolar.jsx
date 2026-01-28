"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import BlogData from '@/assets/jsonData/blog/BlogData.json'
import SingleBlog1 from './SingleBlog1';

const BlogSolar = ({ sectionClass }) => {
    const t = useTranslations('blog');
    
    return (
        <>
            <div className={`home-blog-area default-padding bottom-less ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading">{t('latestBlog')}</h4>
                                <h2 className="title">{t('blogsNews')}</h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {BlogData.slice(6, 9).map(blog =>
                            <SingleBlog1 blog={blog} key={blog.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSolar;