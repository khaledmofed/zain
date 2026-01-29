"use client";
import React from "react";
import ZainMenu from "./ZainMenu";
import useStickyMenu from "../hooks/useStickyMenu";
import useSidebarMenu from "../hooks/useSidebarMenu";
import HeaderLogo from "./HeaderLogo";
import useSubMenuToggle from "../hooks/useSubMenuToggle";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import logo from "@/assets/img/logo.png";
import Image from "next/image";
import LanguageSwitcher from "../utilities/LanguageSwitcher";

const MainHeaderStyle7 = () => {
  const t = useTranslations("common");
  const isMenuSticky = useStickyMenu();
  const toggleSubMenu = useSubMenuToggle();
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs ${isMenuSticky ? "sticked" : "no-background"} ${isOpen ? "navbar-responsive" : ""}`}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <HeaderLogo openMenu={openMenu} />
            <div
              className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`}
              id="navbar-menu"
            >
              <Image src={logo} alt="Logo" />
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={closeMenu}
              >
                <i className="fa fa-times"></i>
              </button>
              <ZainMenu
                navbarPlacement="navbar-right"
                isOpen={isOpen}
                closeMenu={closeMenu}
                toggleSubMenu={toggleSubMenu}
              />
              <div className="attr-right-mobile attr-right">
                <LanguageSwitcher />
                <div className="attr-nav">
                  <ul>
                    <li className="button">
                      <Link href="/contact-us">{t("getConsultant")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="attr-right">
              <div className="attr-nav">
                <ul>
                  <li className="button">
                    <Link href="/contact-us">{t("getConsultant")}</Link>
                  </li>
                </ul>
              </div>
              <LanguageSwitcher />
            </div>
          </div>
          <div
            className={`overlay-screen ${isOpen ? "opened" : ""}`}
            onClick={closeMenu}
          ></div>
        </nav>
      </header>
    </>
  );
};

export default MainHeaderStyle7;
