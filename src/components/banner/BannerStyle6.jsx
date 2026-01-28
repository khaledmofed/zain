"use client"
import React from 'react';
import dashboard1 from '@/assets/img/dashboard/1.jpg'
import dashboard2 from '@/assets/img/dashboard/2.jpg'
import Image from 'next/image';
import Link from 'next/link';
import Animate from '../animation/Animate';

const BannerStyle6 = () => {
    return (
        <>
            <div className="banner-style-six-area text-light bg-cover" style={{ backgroundImage: `url(/assets/img/shape/banner-4.jpg)` }}>
                <div className="banner-style-six">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-7 pr-80 pr-md-15 pr-xs-15">
                                    <div className="information mt--100 mt-md-0 mt-xs-0">

                                        <Animate className="animate__animated animate__fadeInUp" delay="300ms" duration="200ms">
                                            <h4><strong># No1</strong> Trending Apps On Play Store</h4>
                                        </Animate>

                                        <Animate className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
                                            <h2>
                                                Get Benefit By Using Trending Apps
                                            </h2>
                                        </Animate>

                                        <Animate className="animate__animated animate__fadeInUp" delay="900ms" duration="400ms">
                                            <p>
                                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.
                                            </p>
                                        </Animate>

                                        <Animate className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                            <div className="button mt-30">
                                                <Link className="btn-animation" href="#" scroll={false}><i className="fas fa-arrow-right"></i> <span>Download Now</span></Link>
                                            </div>
                                        </Animate>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Image src={dashboard1} alt="Thumb" />
                                        <Image src={dashboard2} alt="Thumb" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default BannerStyle6;