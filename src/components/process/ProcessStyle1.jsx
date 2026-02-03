"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import shape11 from "@/assets/img/shape/11.png";
import Image from "next/image";
import Process1Data from "@/assets/jsonData/process/Process1Data.json";
import SingleProcess1 from "./SingleProcess1";
import { useApp } from "@/contexts/AppContext";

const ProcessStyle1 = ({ sectionClass }) => {
  const t = useTranslations("process");
  const { settings, homeData } = useApp();

  const solutions = homeData?.solutions ?? [];
  const useApiData = Array.isArray(solutions) && solutions.length > 0;
  const list = useApiData ? solutions : Process1Data;

  const [activeServiceId, setActiveServiceId] = useState(list[0]?.id ?? null);

  const sectionTitle =
    settings?.projects_section_title ?? t("projectsProducts");
  const sectionSubtitle =
    settings?.projects_section_subtitle ?? t("projectsDescription");

  const handleMouseEnter = (id) => {
    setActiveServiceId(id);
  };

  const handleMouseLeave = () => {
    // Do nothing on mouse leave to keep the active item
  };

  return (
    <>
      <div
        className={`process-style-one-area text-center default-padding ${sectionClass ? sectionClass : ""}`}
      >
        <div className="large-shape">
          <Image src={shape11} alt="Shape" className="toty-logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-heading">{t("solutionsPortfolio")}</h4>
                <h2 className="title">{sectionTitle}</h2>
                <p className="mt-20 mb-0">{sectionSubtitle}</p>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {list.map((process) => {
              const processKeyMap = {
                1: "mis",
                2: "automation",
                3: "analytics",
                4: "portals",
              };
              const processKey = processKeyMap[process.id];
              const translatedTitle = useApiData
                ? process.title
                : processKey
                  ? t(`items.${processKey}.title`)
                  : process.title;
              const translatedText = useApiData
                ? (process.description ?? "")
                : processKey
                  ? t(`items.${processKey}.text`)
                  : process.text;

              return (
                <div className="col-lg-3 col-md-6" key={process.id}>
                  <div
                    className={`process-style-one ${activeServiceId === process.id ? "active" : ""}`}
                    onMouseEnter={() => handleMouseEnter(process.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <SingleProcess1
                      process={process}
                      translatedTitle={translatedTitle}
                      translatedText={translatedText}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessStyle1;
