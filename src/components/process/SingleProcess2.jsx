"use client";
import React from "react";
import { useTranslations } from "next-intl";

const SingleProcess2 = ({ process }) => {
  const t = useTranslations("process");
  const { id, title, steps, icon } = process;
  const isFromApi = Object.prototype.hasOwnProperty.call(
    process,
    "description",
  );

  const keyMap = {
    1: "integratedDelivery",
    2: "localExpertise",
    3: "secureScalable",
    4: "strategicPartnership",
  };
  const k = keyMap[id];
  const displayTitle = isFromApi
    ? title
    : k
      ? t(`differentiators.${k}`)
      : title;

  return (
    <>
      <div className="process-style-two">
        <div className="thumb">
          <div className="icon-wrapper">
            <i className={icon}></i>
          </div>
          <span>{steps}</span>
        </div>
        <h3>{displayTitle}</h3>
      </div>
    </>
  );
};

export default SingleProcess2;
