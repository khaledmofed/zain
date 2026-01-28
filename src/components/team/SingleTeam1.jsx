import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialShareStyle3 from '../utilities/SocialShareStyle3';

const SingleTeam1 = ({ team }) => {
    const { id, memberThumb, designation, name } = team

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
                <span>{designation}</span>
                <h4 style={{ fontWeight: 600, textDecoration: 'none' }}>

                    {/* <Link href={`/team-details/${id}`}> */}
                    {name}
                    {/* </Link> */}
                    </h4>
            </div>
        </>
    );
};

export default SingleTeam1;