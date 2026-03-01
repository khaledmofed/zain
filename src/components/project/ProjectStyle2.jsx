"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ProjectTitle from './ProjectTitle';
import Link from 'next/link';
import Project2Data from '@/assets/jsonData/project/Project2Data.json';

// Dynamically import the IsotopeGallery component with SSR disabled
const IsotopeGallery = dynamic(() => import('./IsotopeGallery'), { ssr: false });

const ProjectStyle2 = ({ projectTitle, items: itemsProp }) => {

    const defaultItems = Project2Data.map((item) => ({
        id: item.id,
        thumb: `/assets/img/gallery/${item.thumb}`,
        tag: item.tag,
        title: item.title,
        link: `/project-details/${item.id}`,
    }));
    const items = Array.isArray(itemsProp) && itemsProp.length > 0 ? itemsProp : defaultItems;

    const [activeServiceId, setActiveServiceId] = useState(items[0]?.id ?? null);

    const handleMouseEnter = (id) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className="project-style-two-area bg-gray default-padding">
                {projectTitle ? <ProjectTitle /> : <></>}
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 gallery-content">
                                <div className="magnific-mix-gallery gallery-masonary">
                                    <IsotopeGallery
                                        items={items}
                                        activeServiceId={activeServiceId}
                                        handleMouseEnter={handleMouseEnter}
                                        handleMouseLeave={handleMouseLeave} />
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <div className="load-more-info text-center mt-60">
                                            <p>
                                                Are you interested to show more portfolios? <Link href="#" scroll={false}>Load More</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectStyle2;