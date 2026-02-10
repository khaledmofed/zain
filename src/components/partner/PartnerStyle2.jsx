"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Partner2Data from "@/assets/jsonData/partner/Partner2Data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import { useApp } from "@/contexts/AppContext";

const PartnerStyle2 = () => {
  const t = useTranslations("partner");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const { homeData } = useApp();
  const clients = homeData?.clients ?? [];
  const clientLogo = clients[0]?.logo || "/assets/img/logo/clients.jpg";

  return (
    <>
      <div className="partner-style-two-area overflow-hidden   text-light default-padding">
        <div
          className="partner-shape"
          style={{ backgroundImage: `url(/assets/img/shape/map-light.png)` }}
        ></div>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-4">
              <div className="partner-heading">
                <h3
                  style={{ fontSize: "36px" }}
                  dangerouslySetInnerHTML={{ __html: t("trustedByClients") }}
                ></h3>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 partner-style-two-carousel-wrap">
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
                {Partner2Data.map((partner) => (
                  <SwiperSlide key={partner.id}>
                    <div
                      className="client-row-sprite"
                      style={{
                        backgroundImage: `url(${clientLogo})`,
                        backgroundPosition: `${isRTL ? "0%" : "100%"} ${partner.position}`,
                        backgroundSize: "90% auto",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "110px",
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
    </>
  );
};

export default PartnerStyle2;
