"use client";
import React from 'react';
import logo from '@/assets/img/zainlogo.png';
import Image from 'next/image';
import Link from 'next/link';

const HeaderLogo = ({ openMenu }) => {
    return (
        <>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                    <i className="fa fa-bars"></i>
                </button>
                <Link className="navbar-brand" href="/">
                    <Image src={logo} className="logo" alt="Logo" /> <div className="logo-text">Zain <br /> Solutions</div> 
                </Link>
            </div>
        </>
    );
};

export default HeaderLogo;