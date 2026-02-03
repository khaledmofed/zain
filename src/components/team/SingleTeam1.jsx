"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import SocialShareStyle3 from "../utilities/SocialShareStyle3";

const SingleTeam1 = ({ team }) => {
  const t = useTranslations("team");
  const { id, memberThumb, designation, name, photo, position } = team;

  const isFromApi = photo != null || position != null;
  const imgSrc = isFromApi
    ? photo
    : memberThumb
      ? `/assets/img/teams/${memberThumb}`
      : null;

  const teamKeyMap = {
    1: "saif",
    2: "waleed",
    3: "abdulla",
    4: "hamad",
  };
  const teamKey = teamKeyMap[id];
  const displayName = isFromApi
    ? name
    : teamKey
      ? t(`members.${teamKey}.name`)
      : name;
  const displayDesignation = isFromApi
    ? position
    : teamKey
      ? t(`members.${teamKey}.designation`)
      : designation;

  return (
    <>
      <div className="thumb">
        {imgSrc && (
          <Image
            src={imgSrc}
            width={800}
            height={800}
            className="img-team"
            alt={displayName || "Team member"}
          />
        )}
        <div className="social">
          <ul>
            <SocialShareStyle3 />
          </ul>
        </div>
      </div>
      <div className="info">
        <span>{displayDesignation}</span>
        <h4 style={{ fontWeight: 600, textDecoration: "none" }}>
          {displayName}
        </h4>
      </div>
    </>
  );
};

export default SingleTeam1;
