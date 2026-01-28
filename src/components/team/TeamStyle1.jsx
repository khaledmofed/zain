"use client"
import { useState } from 'react';
import TeamData from '@/assets/jsonData/team/TeamData.json'
import SingleTeam1 from './SingleTeam1';
import TeamTitle from './TeamTitle';

const TeamStyle1 = ({ sectionClass, fullTeam, teamTitle, titleClass }) => {

    const [activeServiceId, setActiveServiceId] = useState(TeamData[0]?.id || null);

    const handleMouseEnter = (id) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`team-style-one-area default-padding-top pb-70 pb-xs-0 bg-contain-center ${sectionClass ? sectionClass : ""}`} style={{ backgroundImage: `url(/assets/img/shape/18.png)` }}>

                {teamTitle ? <TeamTitle titleClass={titleClass} /> : <></>}

                <div className="container">
                    <div className="row">
                        {fullTeam ?
                            <>
                                {TeamData.map(team =>
                                    <div className="col-xl-3 col-md-6" key={team.id}>
                                        <div className={`team-style-one ${activeServiceId === team.id ? 'active' : ''}`}
                                            onMouseEnter={() => handleMouseEnter(team.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <SingleTeam1 team={team} />
                                        </div>
                                    </div>
                                )}
                            </> :
                            <>
                                {TeamData.slice(0, 4).map(team =>
                                    <div className="col-xl-3 col-md-6" key={team.id}>
                                        <div className={`team-style-one ${activeServiceId === team.id ? 'active' : ''}`}
                                            onMouseEnter={() => handleMouseEnter(team.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <SingleTeam1 team={team} />
                                        </div>
                                    </div>
                                )}
                            </>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamStyle1;