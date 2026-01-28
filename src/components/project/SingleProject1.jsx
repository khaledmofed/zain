import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleProject1 = ({ project }) => {
    const { id, thumb, tag, title, text, btnText, link } = project
    const projectLink = link || `/project-details/${id}`;
    const isExternalLink = link && link.startsWith('http');

    return (
        <>
            <div className="project-style-one">
                <div className="row align-bottom">
                    <div className="col-lg-7 pr-0 pr-md-15 pr-xs-15 pl-md-15 pl-xs-15">
                        <div className="thumb">
                            <Image src={`/assets/img/projects/${thumb}`} width={1900} height={1267} alt="Image Not Found" />
                        </div>
                    </div>
                    <div className="col-lg-5 pl-0 pl-md-15 pl-xs-15 pr-md-15 pr-xs-15">
                        <div className="info">
                            <span>{tag}</span>
                            <h3><Link href={projectLink} target="_blank">{title}</Link></h3>
                            <p>{text}</p>
                            {isExternalLink ? (
                                <a className="btn-animation dark mt-10" href={link} target="_blank" rel="noopener noreferrer"><i className="fas fa-arrow-right"></i> <span>{btnText}</span></a>
                            ) : (
                                <Link className="btn-animation dark mt-10" href={projectLink}><i className="fas fa-arrow-right"></i> <span>{btnText}</span></Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject1;