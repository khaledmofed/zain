"use client";
import React from "react";
import SocialShare from "../utilities/SocialShare";
import { useTranslations } from "next-intl";
import { useApp } from "@/contexts/AppContext";

const HeaderTopStyle1 = () => {
  const t = useTranslations("common");
  const { settings } = useApp();
  const address = settings?.address || t("fullAddress");
  const phone = settings?.phone || "+968 7272 0046";
  const phoneHref = (phone || "").replace(/\s+/g, "");

  return (
    <>
      <div className="top-bar-area top-bar-style-one bg-dark-gray text-light">
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-6 col-lg-8 offset-xl-3 pl-30 pl-md-15 pl-xs-15">
              <ul className="item-flex">
                <li>
                  <i className="fas fa-map-marker-alt"></i> {address}
                </li>
                <li>
                  <a
                    href={phoneHref ? `tel:${phoneHref}` : "#"}
                    className="phone-number"
                    dir="ltr"
                  >
                    <i className="fas fa-phone-alt"></i> {phone}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-4 text-end">
              <div className="social">
                <ul>
                  <SocialShare />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopStyle1;
