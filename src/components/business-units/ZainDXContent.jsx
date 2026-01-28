import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import shape11 from '@/assets/img/shape/11.png';
import anim3Thumb from '@/assets/img/shape/anim-3.png';
import anim4Thumb from '@/assets/img/shape/anim-4.png';

const ZainDXContent = () => {
    return (
        <>
            <div className="business-unit-details-area overflow-hidden default-padding position-relative">
                <div className="large-shape" style={{ maxWidth: "15%", top: "-6px"  }}>
                    <Image src={shape11} alt="Shape" className="toty-logo" />
                </div>
              
                <div className="container">
                    <div className="business-unit-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                <div className="unit-header mb-40">
                                <h4 className="sub-heading">Zain DX</h4>
                                    {/* <div className="unit-badge mb-20" style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: '#bf1d2e', color: 'white', borderRadius: '5px', fontSize: '14px', fontWeight: '600' }}>
                                        Zain DX
                                    </div> */}
                                    <h1 className="mb-20">Digital Transformation & Intelligent Solutions Business Unit</h1>
                                    <h2 className="mb-20" style={{ fontSize: '20px', fontWeight: '500', color: '#818183' }}>Unit Role</h2>
                                    <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                        Zain DX focuses on transforming technology from an operational tool into a strategic enabler through automation, data, and advanced enterprise systems.
                                    </p>
                                </div>

                                <div className="intro-section mb-50">
                                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                                        Zain Solutions operates through two fully integrated Business Units under a single organizational umbrella, ensuring clear accountability, unified contracting, and seamless execution.
                                    </p>
                                </div>

                                <div className="services-structure mb-50">
                                    <h2 className="mb-30" style={{ fontSize: '28px', fontWeight: '600' }}>Service Structure</h2>
                                    
                                    <div className="service-category mb-40">
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>Digital Transformation & Automation</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Business process analysis and assessment
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Business process reengineering (BPR)
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Operational workflow automation
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                RPA and AI-driven solutions
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="service-category mb-40">
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>Enterprise Systems (MIS & ERP)</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Management Information Systems (MIS) design and development
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                ERP system implementation and customization
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Enterprise process unification
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Integration with existing systems
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="service-category mb-40">
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>Governance, Risk & Compliance</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                GRC system design and implementation
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Operational and technology risk management
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Automation of policies and controls
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Audit and compliance support
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="service-category mb-40">
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>Data Analytics & Business Intelligence</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Executive dashboards
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                KPI frameworks
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Descriptive and predictive analytics
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Decision-support solutions
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="service-category mb-40">
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>Digital & Strategic Consulting</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Digital transformation roadmaps
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Process optimization initiatives
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Program and project governance
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="service-category mb-40">
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>Platforms & Application Development</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Enterprise web platforms
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Custom digital applications
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Scalable and integrated solutions
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="service-category mb-40">
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>Data-Driven Digital Marketing</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Digital marketing strategy development
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Digital campaign management
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Search engine optimization (SEO)
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Content and social media management
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Digital analytics and performance measurement
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="single-widget bg-dark quick-contact-widget text-light" style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}>
                                    <div className="content">
                                        <h3>Need Help?</h3>
                                        <p>
                                            Contact Zain Solutions and our team will be happy to support you.
                                        </p>
                                        <h3><a href="tel:+96872720046" style={{ color: 'white' }}>+968 7272 0046</a></h3>
                                        <h4><a href="mailto:info@zainom.com" style={{ color: 'white' }}>info@zainom.com</a></h4>
                                        <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact-us">Contact Us</Link>
                                    </div>
                                </div>

                                <div className="single-widget services-list-widget mt-40">
                                    <h4 className="widget-title">Business Units</h4>
                                    <div className="content">
                                        <ul>
                                            <li><Link href="/zain-infra">Zain Infra</Link></li>
                                            <li className="current-item"><Link href="/zain-dx">Zain DX</Link></li>
                                        </ul>
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

export default ZainDXContent;
