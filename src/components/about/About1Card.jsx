"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Animate from "../animation/Animate";
import Counter from "../counter/Counter";
import { useApp } from "@/contexts/AppContext";

const About1Card = () => {
  const t = useTranslations("about");
  const { homeData } = useApp();
  const statistics = homeData?.statistics ?? [];
  const stat0 = statistics[0];
  const stat1 = statistics[1];

  const value0 = stat0 ? parseInt(stat0.value, 10) : 98;
  const suffix0 = stat0?.suffix ?? "%";
  const label0 = stat0?.label ?? t("consultingSuccess");

  const value1 = stat1 ? parseInt(stat1.value, 10) : 120;
  const suffix1 = stat1?.suffix ?? "+";
  const label1 = stat1?.label ?? t("worldwideClients");

  return (
    <>
      <Animate className="animate__animated animate__fadeInUp" delay="500ms">
        <div className="about-card" style={{}}>
          <ul>
            <li>
              <div className="icon">
                <i className="flaticon-license"></i>
              </div>
              <div className="fun-fact">
                <div className="counter">
                  <div className="timer">
                    <Counter end={value0} />
                  </div>
                  {suffix0 && <div className="operator">{suffix0}</div>}
                </div>
                <span className="medium">{label0}</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="flaticon-global"></i>
              </div>
              <div className="fun-fact">
                <div className="counter">
                  <div className="timer">
                    <Counter end={value1} />
                  </div>
                  {suffix1 && <div className="operator">{suffix1}</div>}
                </div>
                <span className="medium">{label1}</span>
              </div>
            </li>
          </ul>
        </div>
      </Animate>
    </>
  );
};

export default About1Card;
