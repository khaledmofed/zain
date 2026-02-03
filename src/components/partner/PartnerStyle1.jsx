"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import { useApp } from "@/contexts/AppContext";

const PartnerStyle1 = ({ sectionClass }) => {
  const t = useTranslations("partner");
  const locale = useLocale();
  const { homeData } = useApp();
  const partners = homeData?.partners ?? [];
  const partnerLogo = partners[0]?.logo || "/assets/img/logo/partners.jpg";
  // 6 rows in the partners.jpg image
  const partnerRows = [
    { id: 1, position: "-5%" }, // Row 1
    { id: 2, position: "11.66%" }, // Row 2
    { id: 3, position: "30.33%" }, // Row 3
    { id: 4, position: "53%" }, // Row 4
    { id: 5, position: "75.66%" }, // Row 5
    { id: 6, position: "99.33%" }, // Row 6
  ];

  return (
    <>
      <div
        className={`partner-style-one-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5">
              <div
                className="partner-map"
                style={{ backgroundImage: `url(/assets/img/shape/map.png)` }}
              >
                <h2
                  className="mask-text"
                  style={{ backgroundImage: `url(/assets/img/banner/113.jpg)` }}
                >
                  {t("companyName")}
                </h2>
                <h4 className="mb-0">{t("technologyPartners")}</h4>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="partner-items partner-map">
                <p className="mb-0">{t("partnersDescription")}</p>
                {/* <ul>
                                    <li><Image src={logo1} alt="Image Not FOund" /></li>
                                    <li><Image src={logo2} alt="Image Not FOund" /></li>
                                    <li><Image src={logo7} alt="Image Not FOund" /></li>
                                    <li><Image src={logo4} alt="Image Not FOund" /></li>
                                    <li><Image src={logo5} alt="Image Not FOund" /></li>
                                    <li><Image src={logo6} alt="Image Not FOund" /></li>
                                    <li><Image src={logo4} alt="Image Not FOund" /></li>
                                    <li><Image src={logo5} alt="Image Not FOund" /></li>
                                    <li><Image src={logo6} alt="Image Not FOund" /></li>
                                </ul> */}
                <Swiper
                  className="clients-style-two-carousel"
                  style={{
                    direction: "ltr",
                  }}
                  modules={[Keyboard, Autoplay]}
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={1}
                  keyboard={{
                    enabled: true,
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                >
                  {partnerRows.map((row) => (
                    <SwiperSlide key={row.id}>
                      <div
                        className="partner-row-sprite"
                        dir="ltr"
                        style={{
                          backgroundImage: `url(${partnerLogo})`,
                          backgroundPosition: `100% ${row.position}`,
                          backgroundSize: "100% auto",
                          backgroundRepeat: "no-repeat",
                          width: "100%",
                          height: "80px",
                          display: "block",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerStyle1;
