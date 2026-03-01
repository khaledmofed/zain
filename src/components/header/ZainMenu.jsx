"use client";
import React from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const ZainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    const pathname = usePathname();
    const t = useTranslations('common');

    const isActive = (path) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className={isActive('/') ? 'active' : ''}>
                    <Link href="/">{t('home')}</Link>
                </li>
                <li className={isActive('/about-us') ? 'active' : ''}>
                    <Link href="/about-us">{t('aboutUs')}</Link>
                </li>
                <li className={isActive('/projects') ? 'active' : ''}>
                    <Link href="/projects">{t('projects')}</Link>
                </li>
                <li className={isActive('/zain-infra') ? 'active' : ''}>
                    <Link href="/zain-infra">{t('zainInfra')}</Link>
                </li>
                <li className={isActive('/zain-dx') ? 'active' : ''}>
                    <Link href="/zain-dx">{t('zainDX')}</Link>
                </li>
                <li className={isActive('/blogs') ? 'active' : ''}>
                    <Link href="/blogs">{t('blogs')}</Link>
                </li>
                {/* <li className={isActive('/contact-us') ? 'active' : ''}>
                    <Link href="/contact-us">{t('contactUs')}</Link>
                </li> */}
            </ul>
        </>
    );
};

export default ZainMenu;
