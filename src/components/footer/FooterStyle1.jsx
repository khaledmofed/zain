"use client";
import Image from 'next/image';
import React from 'react';
import shape7 from '@/assets/img/shape/7.png';
import shape9 from '@/assets/img/shape/9.png';
import logoLight from '@/assets/img/logo-light.png';
import logo2040 from '@/assets/img/logo/2040.webp';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import SocialShare from '../utilities/SocialShare';
import FooterNewsLetter from '../form/FooterNewsLetter';

const FooterStyle1 = ({ shape, shapeClass, logo, formStyle }) => {
    const t = useTranslations('common');
    const tFooter = useTranslations('footer');
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="footer-shape">
                    <div className={`item ${shapeClass}`}>
                        {shape ? <Image src={shape} alt="Shape" className="toty-logo" /> : <Image src={shape7} alt="Shape" className="toty-logo" />}
                    </div>
                    <div className="item">
                        <Image src={shape9} alt="Shape" className="toty-logo" />
                    </div>
                </div>
                <div className="container">
                    <div className="f-items relative pt-40 pb-40 pt-xs-0 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                    <div className="logos-container">
                                    <Link href="/" className="logo-container-text">
                                        {logo ? <Image className="logo" src={logo} alt="Logo " /> : <Image className="logo" src={logoLight} alt="Logo" />}
                                        <div className="logo-text">{t('companyNameLine1')} <br /> {t('companyNameLine2')}</div>
                                    </Link>
                                    <Image src={logo2040} alt="Logo 2040" className="logo2040" />
                                    </div>
                                    <p className='mb-0'>
                                        {tFooter('description')}
                                    </p>
                                    {/* <div className="opening-hours">
                                        <h5>Opening Hours</h5>
                                        <ul>
                                            <li>
                                                <div className="working-day">Monday – Sunday:</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">2pm – 2pm</div>
                                            </li>
                                            <li>
                                                <div className="working-day">Sunday:</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">Off Day</div>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    {/* <h4 className="widget-title">Our Company</h4> */}
                                    <ul>
                                        <li>
                                            <a href="mailto:info@zainom.com" target='_blank'>info@zainom.com</a>
                                        </li>
                                        {/* <li>
                                            <Link href="/contact-us">Help Center</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">Career</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">Plans & Pricing</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-us">Contact</Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    {/* <h4 className="widget-title">Our Services</h4> */}
                                    <ul>
                                        <li>
                                            <a href="tel:+96872720046" target='_blank' dir="ltr">+968 7272 0046</a>
                                        </li>
                                        {/* <li>
                                            <Link href="/services-details/1">Business planning</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/1">Financial advices</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/1">Tax strategy</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/1">Insurance strategy</Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                {/* <h4 className="widget-title">Newsletter</h4>
                                <p>
                                    Join our subscribers list to get the latest <br /> news and special offers.
                                </p>
                                <div className={`f-item newsletter ${formStyle}`}>
                                    <FooterNewsLetter />
                                </div> */}
                                <ul className="footer-social">
                                    <SocialShare />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; {t('copyright')} {(new Date().getFullYear())}. {t('allRightsReserved')} <a href="#" target='_blank'>{t('companyName')}</a></p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <Link href="/terms">{t('terms')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy">{t('privacy')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">{t('support')}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterStyle1;