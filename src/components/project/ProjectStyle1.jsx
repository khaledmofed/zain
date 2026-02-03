"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Project1Data from "@/assets/jsonData/project/Project1Data.json";
import SingleProject1 from "./SingleProject1";
import { useApp } from "@/contexts/AppContext";

const ProjectStyle1 = () => {
  const t = useTranslations("project");
  const { homeData } = useApp();
  const apiProjects = homeData?.projects ?? [];
  const useApiData = Array.isArray(apiProjects) && apiProjects.length > 0;
  const rawList = useApiData ? apiProjects : Project1Data;
  // ترتيب المشاريع حسب order أو sort_order إن وُجد، وإلا حسب id
  const list = [...rawList].sort((a, b) => {
    const orderA = a.order ?? a.sort_order ?? a.id ?? 0;
    const orderB = b.order ?? b.sort_order ?? b.id ?? 0;
    return Number(orderA) - Number(orderB);
  });

  return (
    <>
      <div className="project-style-one-area default-padding bg-dark bottom-shape-light">
        <div className="container">
          <div className="heading-left text-light">
            <div className="row">
              <div className="col-lg-5">
                <div className="content-left">
                  <h5 className="sub-heading">{t("popularProjects")}</h5>
                  <h2 className="heading">{t("recentCompletedProjects")}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-style-one-carousel">
                <Swiper
                  style={{
                    direction: "ltr",
                  }}
                  modules={[Keyboard, Autoplay, Pagination, Navigation]}
                  freeMode={true}
                  grabCursor={false}
                  autoplay={false}
                  loop={true}
                  keyboard={{
                    enabled: true,
                  }}
                  navigation={{
                    nextEl: ".project-button-next",
                    prevEl: ".project-button-prev",
                  }}
                  pagination={{
                    el: ".project-pagination",
                    clickable: true,
                    type: "fraction",
                  }}
                >
                  {list.map((project) => (
                    <SwiperSlide key={project.id}>
                      <SingleProject1 project={project} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="project-swiper-nav">
                  <div className="project-pagination"></div>
                  <div className="project-button-prev"></div>
                  <div className="project-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectStyle1;
