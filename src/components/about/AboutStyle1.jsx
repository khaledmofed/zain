import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import anim1Thumb from '@/assets/img/shape/anim-1.png'
import anim2Thumb from '@/assets/img/shape/anim-2.png'
import anim3Thumb from '@/assets/img/shape/anim-3.png'
import anim4Thumb from '@/assets/img/shape/anim-4.png'
import aboutThumb from "@/assets/img/about/pic2.png"
import About1Card from './About1Card';
import Animate from '../animation/Animate';

const AboutStyle1 = ({ hideButton = false, showThirdParagraph = false }) => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="shape-animated-left">
                    <Image src={anim1Thumb} alt="Image Not Found" />
                    <Image src={anim2Thumb} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-one col-xl-6 col-lg-5">
                            <div className="h4 sub-heading">Company Overview</div>
                            <h2 className="title mb-25">Zain Solutions<br />Integrated Infrastructure & Digital Transformation Solutions</h2>
                            <p>
                            Zain Solutions is an Omani technology company dedicated to enabling both the public and private sectors through integrated technology solutions that combine reliable infrastructure with intelligent digital transformation.
                            </p>
                            <p>
                            Grounded in a deep understanding of the local market and its regulatory and operational context, the company applies global standards and best practices to deliver scalable solutions capable of regional and international deployment.                            </p>
                            {showThirdParagraph && (
                                <p>Zain Solutions adopts a long-term partnership approach, extending beyond technology delivery to support organizations in building secure, data-driven, and sustainable digital environments that enhance operational efficiency, decision-making, and institutional growth.</p>
                            )}
                            {!hideButton && (
                                <div className="mt-30">
                                    <Link href="/about-us" className="btn circle btn-theme btn-md radius animation">
                                        About Us
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-thumb">

                                <Animate className="animate__animated animate__fadeInRight">
                                    <Image src={aboutThumb} alt="Image Not Found" />
                                </Animate>
                                <About1Card />

                                <Animate className="animate__animated animate__fadeInDown" delay="300ms">
                                    <div className="thumb-shape-bottom">
                                        <Image src={anim3Thumb} alt="Image Not Found" className="anim3-gray" />
                                        <Image src={anim4Thumb} alt="Image Not Found" />
                                    </div>
                                </Animate>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle1;