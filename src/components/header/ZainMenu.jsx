"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ZainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    const pathname = usePathname();

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
                    <Link href="/">Home</Link>
                </li>
                <li className={isActive('/about-us') ? 'active' : ''}>
                    <Link href="/about-us">About Us</Link>
                </li>
                <li className={isActive('/zain-infra') ? 'active' : ''}>
                    <Link href="/zain-infra">Zain Infra</Link>
                </li>
                <li className={isActive('/zain-dx') ? 'active' : ''}>
                    <Link href="/zain-dx">Zain DX</Link>
                </li>
                <li className={isActive('/blogs') ? 'active' : ''}>
                    <Link href="/blogs">Blogs</Link>
                </li>
                <li className={isActive('/contact-us') ? 'active' : ''}>
                    <Link href="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </>
    );
};

export default ZainMenu;
