"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Process2Data from "@/assets/jsonData/process/Process2Data.json";
import SingleProcess2 from "./SingleProcess2";
import { useApp } from "@/contexts/AppContext";

const ProcessStyle2 = () => {
  const t = useTranslations("process");
  const { homeData } = useApp();
  const apiFeatures = homeData?.features ?? [];
  const useApiData = Array.isArray(apiFeatures) && apiFeatures.length > 0;
  const rawList = useApiData ? apiFeatures : Process2Data;
  const list = [...rawList].sort(
    (a, b) => (a.order ?? a.id ?? 0) - (b.order ?? b.id ?? 0),
  );
  const defaultIcons = Process2Data.slice(0, 4).map((p) => p.icon);
  const displayList = list.map((item, i) => ({
    ...item,
    title: item.title,
    steps: item.steps ?? String(i + 1).padStart(2, "0"),
    icon: useApiData ? (defaultIcons[i] ?? "flaticon-network") : item.icon,
  }));

  return (
    <>
      <div
        className="process-style-two-area text-center default-padding"
        style={{ backgroundImage: `url(/assets/img/shape/map-large.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-heading">{t("whatSetsUsApart")}</h4>
                <h2 className="title">{t("keyDifferentiators")}</h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="process-style-two-items">
            <div className="row">
              {displayList.map((process) => (
                <div className="col-lg-3 col-md-6" key={process.id}>
                  <SingleProcess2 process={process} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessStyle2;
