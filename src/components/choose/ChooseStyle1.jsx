import Image from 'next/image';
import React from 'react';
import shape17 from '@/assets/img/shape/17.png'
import Animate from '../animation/Animate';
import IndustriesData from '@/assets/jsonData/choose/IndustriesData.json';

const ChooseStyle1 = () => {
    // Ensure IndustriesData is an array
    const industries = Array.isArray(IndustriesData) ? IndustriesData : [];

    return (
        <>
            <div className="choose-us-style-one-area default-padding text-light">
                <div className="cover-bg" style={{ backgroundImage: `url(/assets/img/banner/7.jpg)` }}></div>
                <div className="shape-left-top">
                    <Image src={shape17} alt="Shape" className="toty-logo" style={{ filter: 'grayscale(100%) brightness(1.5)' }} />
                </div>
                <div className="text-invisible">Zain</div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                            <div className="choose-us-style-one">
                                <h2 className="title mb-20">Industries We Serve</h2>
                                <p className="mb-40">
                                    Zain Solutions supports a broad range of industries with tailored solutions aligned to sector-specific operational and regulatory needs:
                                </p>
                                <ul className="list-item industries-list">
                                    {industries.map((industry, index) => (
                                        <Animate 
                                            key={industry.id}
                                            className="animate__animated animate__fadeInUp" 
                                            delay={`${(index % 2) * 150}ms`}
                                        >
                                            <li className="industry-item" style={{}}>
                                                <h4>{industry.title}</h4>
                                            </li>
                                        </Animate>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseStyle1;
