"use client";
import { useTranslations } from "next-intl";
import Counter from "../counter/Counter";
import { useApp } from "@/contexts/AppContext";

const AchievementCounter1 = () => {
  const t = useTranslations("achievement");
  const { homeData } = useApp();
  const statistics = homeData?.statistics ?? [];
  const stat3 = statistics[3];
  const stat4 = statistics[4];

  const value3 = stat3 ? parseInt(stat3.value, 10) : 100;
  const suffix3 = stat3?.suffix ?? "+";
  const label3 = stat3?.label ?? t("projectsDelivered");

  const value4 = stat4 ? parseInt(stat4.value, 10) : 50;
  const suffix4 = stat4?.suffix ?? "+";
  const label4 = stat4?.label ?? t("clientsServed");

  return (
    <>
      <div className="achivement-counter">
        <ul>
          <li>
            <div className="icon">
              <i className="flaticon-handshake"></i>
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer">
                  <Counter end={value3} />
                </div>
                <div className="operator">{suffix3}</div>
              </div>
              <span className="medium">{label3}</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="flaticon-employee"></i>
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer">
                  <Counter end={value4} />
                </div>
                <div className="operator">{suffix4}</div>
              </div>
              <span className="medium">{label4}</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AchievementCounter1;
