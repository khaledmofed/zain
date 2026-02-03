"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination, EffectFade } from "swiper/modules";
import SingleBanner1 from "./SingleBanner1";
import Banner1Data from "@/assets/jsonData/banner/Banner1Data.json";

const BannerStyle1 = ({ sliders }) => {
  const list =
    Array.isArray(sliders) && sliders.length > 0 ? sliders : Banner1Data;
  return (
    <>
      <div className="banner-area banner-style-one shadow navigation-custom-large zoom-effect overflow-hidden text-light">
        <div className="banner-fade">
          <Swiper
            modules={[Keyboard, Autoplay, Pagination, EffectFade]}
            direction={"horizontal"}
            autoplay={false}
            loop={true}
            effect={"fade"}
            fadeEffect={{
              crossFade: true,
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
          >
            {list.map((banner) => (
              <SwiperSlide key={banner.id} className="banner-style-one">
                <SingleBanner1 banner={banner} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};

export default BannerStyle1;
