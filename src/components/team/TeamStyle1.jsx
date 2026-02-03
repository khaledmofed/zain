"use client";
import { useState } from "react";
import TeamData from "@/assets/jsonData/team/TeamData.json";
import SingleTeam1 from "./SingleTeam1";
import TeamTitle from "./TeamTitle";
import { useApp } from "@/contexts/AppContext";

const TeamStyle1 = ({ sectionClass, fullTeam, teamTitle, titleClass }) => {
  const { homeData } = useApp();
  const apiTeam = homeData?.team ?? [];
  const useApiData = Array.isArray(apiTeam) && apiTeam.length > 0;
  const rawList = useApiData ? apiTeam : TeamData;
  const list = [...rawList].sort((a, b) => {
    const orderA = a.order ?? a.sort_order ?? a.id ?? 0;
    const orderB = b.order ?? b.sort_order ?? b.id ?? 0;
    return Number(orderA) - Number(orderB);
  });
  const displayList = fullTeam ? list : list.slice(0, 4);

  const [activeServiceId, setActiveServiceId] = useState(list[0]?.id ?? null);

  const handleMouseEnter = (id) => {
    setActiveServiceId(id);
  };

  const handleMouseLeave = () => {
    // Do nothing on mouse leave to keep the active item
  };

  return (
    <>
      <div
        className={`team-style-one-area default-padding-top pb-70 pb-xs-0 bg-contain-center ${sectionClass ? sectionClass : ""}`}
        style={{ backgroundImage: `url(/assets/img/shape/18.png)` }}
      >
        {teamTitle ? <TeamTitle titleClass={titleClass} /> : <></>}

        <div className="container">
          <div className="row">
            {displayList.map((team) => (
              <div className="col-xl-3 col-md-6" key={team.id}>
                <div
                  className={`team-style-one ${activeServiceId === team.id ? "active" : ""}`}
                  onMouseEnter={() => handleMouseEnter(team.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <SingleTeam1 team={team} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamStyle1;
