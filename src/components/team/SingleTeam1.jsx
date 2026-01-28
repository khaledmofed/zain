"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';
import SocialShareStyle3 from '../utilities/SocialShareStyle3';

const SingleTeam1 = ({ team }) => {
    const t = useTranslations('team');
    const { id, memberThumb, designation, name } = team;

    // Map team ID to translation key
    const teamKeyMap = {
        1: "saif",
        2: "waleed",
        3: "abdulla",
        4: "hamad"
    };

    const teamKey = teamKeyMap[id];
    const translatedName = teamKey ? t(`members.${teamKey}.name`) : name;
    const translatedDesignation = teamKey ? t(`members.${teamKey}.designation`) : designation;

    return (
        <>
            <div className="thumb">
                <Image src={`/assets/img/teams/${memberThumb}`} width={800} height={800} className="img-team" alt="Image Not Found" />
                <div className="social">
                    <ul>
                        <SocialShareStyle3 />
                    </ul>
                </div>
            </div>
            <div className="info">
                <span>{translatedDesignation}</span>
                <h4 style={{ fontWeight: 600, textDecoration: 'none' }}>
                    {/* <Link href={`/team-details/${id}`}> */}
                    {translatedName}
                    {/* </Link> */}
                </h4>
            </div>
        </>
    );
};

export default SingleTeam1;