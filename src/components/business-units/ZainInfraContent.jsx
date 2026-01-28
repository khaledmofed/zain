import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import shape11 from '@/assets/img/shape/11.png';
import anim1Thumb from '@/assets/img/shape/anim-1.png';
import anim2Thumb from '@/assets/img/shape/anim-2.png';

const ZainInfraContent = () => {
    return (
        <>
            <div className="business-unit-details-area overflow-hidden default-padding position-relative">
                <div className="large-shape" style={{ maxWidth: "15%", top: "-6px" }}>
                    <Image src={shape11} alt="Shape" className="toty-logo" />
                </div>
                <div className="shape-animated-left">
                    <Image src={anim1Thumb} alt="Image Not Found" />
                    <Image src={anim2Thumb} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="business-unit-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                <div className="unit-header mb-40">
                                <h4 className="sub-heading">Zain Infra</h4>
                                    {/* <div className="unit-badge mb-20" style={{ display: 'inline-block', padding: '8px 20px', backgroundColor: '#bf1d2e', color: 'white', borderRadius: '5px', fontSize: '14px', fontWeight: '600' }}>
                                        Zain Infra
                                    </div> */}
                                    <h1 className="mb-20">Infrastructure, Systems & Security Business Unit</h1>
                                    <h2 className="mb-20" style={{ fontSize: '20px', fontWeight: '500', color: '#818183' }}>Unit Role</h2>
                                    <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                        Zain Infra is responsible for establishing and operating the core technology foundations that support day-to-day and mission-critical operations, with a focus on stability, security, and scalability.
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
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>Core Infrastructure Services</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Enterprise network design and implementation (LAN / WAN / WLAN)
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Data centers and infrastructure environments
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Cloud readiness and hybrid infrastructures
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Enterprise connectivity and communication systems
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="service-category mb-40">
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>Systems & Environment Integration</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Enterprise systems and application integration
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Multi-vendor hardware and infrastructure interoperability
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Management of complex IT environments
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Performance and operational stability optimization
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="service-category mb-40">
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>Cybersecurity & Information Protection</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Network and system security
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Data protection and access control
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Security risk assessment and mitigation
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Compliance and regulatory support
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="service-category mb-40">
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>CCTV & Physical Security Systems</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Site assessment and risk analysis
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Indoor and outdoor surveillance system design
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Centralized recording and storage systems
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Intelligent video analytics and monitoring
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Integration with access control and alarm systems
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="service-category mb-40">
                                        <h3 className="mb-20" style={{ fontSize: '22px', fontWeight: '600', color: '#bf1d2e' }}>Business Continuity & Managed Services</h3>
                                        <ul className="service-list" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Power continuity and UPS solutions
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Managed IT services
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                System monitoring and incident response
                                            </li>
                                            <li style={{ padding: '10px 0', paddingLeft: '25px', position: 'relative', lineHeight: '1.8' }}>
                                                <span style={{ position: 'absolute', left: '0', color: '#bf1d2e', fontWeight: 'bold' }}>•</span>
                                                Continuous technical and operational support
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
                                            <li className="current-item"><Link href="/zain-infra">Zain Infra</Link></li>
                                            <li><Link href="/zain-dx">Zain DX</Link></li>
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

export default ZainInfraContent;
