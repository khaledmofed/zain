import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Animate from '../animation/Animate';

const SingleBlog1 = ({ blog }) => {
    const { id, thumb, date, animationDelay, author, title, btnText } = blog

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
                                        <span>By </span>
                                        <Link href="#" scroll={false}>{author}</Link>
                                    </li>
                                    <li>{date}</li>
                                </ul>
                            </div>
                            <h4>
                                <Link href={`/blog-single/${id}`}>{title}</Link>
                            </h4>
                            <Link href={`/blog-single/${id}`} className="btn-simple"><i className="fas fa-angle-right"></i>{btnText}</Link>
                        </div>
                    </div>
                </div>
            </Animate>
        </>
    );
};

export default SingleBlog1;