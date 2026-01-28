"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import SocialShareStyle3 from '../utilities/SocialShareStyle3';
import Image from 'next/image';
import SingleTeamList from './SingleTeamList';
import SkillProgress from '../progress/SkillProgress';

const TeamDetailsContent = ({ teamInfo }) => {
    const t = useTranslations('team');
    const { id, memberThumb, name, designation, email, memberData, skillProgress } = teamInfo;

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
            <div className="team-single-area default-padding-top">
                <div className="container">
                    <div className="team-content-top">
                        <div className="row">
                            <div className="col-lg-5 left-info">
                                <div className="thumb">
                                    <Image src={`/assets/img/team/${[memberThumb]}`} alt="Thumb" width={800} height={900} />
                                </div>
                            </div>
                            <div className="col-lg-7 right-info">
                                <h2>{translatedName}</h2>
                                <span>{translatedDesignation}</span>
                                <p>
                                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring house in never fruit up. Pasture imagine my garrets..
                                </p>

                                <ul>
                                    <li>
                                        <strong>Email:</strong>
                                        <a href={`mailto:${email}`}> {email}</a>
                                    </li>
                                    <li>
                                        <strong>Phone:</strong>
                                        <a href="tel:+96872720046" dir="ltr">+968 7272 0046</a>
                                    </li>
                                </ul>
                                <div className="social">
                                    <a className="btn circle btn-sm btn-dark animation" href="#">Contact Me</a>
                                    <div className="share-link">
                                        <i className="fas fa-share-alt"></i>
                                        <ul>
                                            <SocialShareStyle3 />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-info bg-gray default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="team-single-list">
                                    {memberData.map(list =>
                                        <SingleTeamList list={list} key={list.id} />
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="skill-items">
                                    <h3>Personal Skills</h3>
                                    {skillProgress.map(skill =>
                                        <SkillProgress skill={skill} key={skill.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetailsContent;