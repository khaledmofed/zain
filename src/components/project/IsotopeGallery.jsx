"use client"
import { useEffect, useRef, useState, useId } from 'react';
import Isotope from 'isotope-layout';
import Image from 'next/image';
import Link from 'next/link';
import Project2Data from '@/assets/jsonData/project/Project2Data.json';
import shape35 from '@/assets/img/shape/35.png';

// ألوان الفلتر: أسود → #6c6c6c، أحمر → #bf1d2e
const SHAPE_FILTER = {
  gray: [108 / 255, 108 / 255, 108 / 255],
  red: [191 / 255, 29 / 255, 46 / 255],
};

// Normalize Project2Data to gallery item shape: { id, thumb, tag, title, link }
const defaultItems = Project2Data.map((item) => ({
    id: item.id,
    thumb: `/assets/img/gallery/${item.thumb}`,
    tag: item.tag,
    title: item.title,
    link: `/project-details/${item.id}`,
}));

const IsotopeGallery = ({ handleMouseLeave, handleMouseEnter, activeServiceId, items: itemsProp }) => {
    const galleryRef = useRef(null);
    const shapeFilterId = `shape-recolor-${useId().replace(/:/g, '')}`;
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const items = Array.isArray(itemsProp) && itemsProp.length > 0 ? itemsProp : defaultItems;
    const totalImages = items.length;

    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        if (loadedImagesCount === totalImages && galleryRef.current) {
            const iso = new Isotope(galleryRef.current, {
                itemSelector: '.gallery-item',
                layoutMode: 'masonry',
            });

            setTimeout(() => {
                iso.layout();
            }, 500);

            return () => {
                iso.destroy();
            };
        }
    }, [loadedImagesCount, totalImages]);

    return (
        <div id="gallery-masonary" className="gallery-items colums-2" ref={galleryRef}>
            <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} focusable="false">
                <defs>
                    <filter
                        id={shapeFilterId}
                        colorInterpolationFilters="sRGB"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                    >
                        <feColorMatrix
                            type="matrix"
                            values="1 0 0 0 0  1 0 0 0 0  1 0 0 0 0  0 0 0 1 0"
                            result="grayMask"
                        />
                        <feComponentTransfer in="grayMask" result="recolor">
                            <feFuncR type="discrete" tableValues={`${SHAPE_FILTER.gray[0]} ${SHAPE_FILTER.red[0]}`} />
                            <feFuncG type="discrete" tableValues={`${SHAPE_FILTER.gray[1]} ${SHAPE_FILTER.red[1]}`} />
                            <feFuncB type="discrete" tableValues={`${SHAPE_FILTER.gray[2]} ${SHAPE_FILTER.red[2]}`} />
                        </feComponentTransfer>
                    </filter>
                </defs>
            </svg>
            {items.map(item => {
                const thumbSrc = item.thumb || '';
                const isExternal = thumbSrc.startsWith('http');
                return (
                    <div className={`gallery-item ${activeServiceId === item.id ? 'active' : ''} `} key={item.id}
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="gallery-style-two">
                            {item.link.startsWith('http') ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {isExternal ? (
                                        <img src={thumbSrc} alt={item.title || 'Thumb'} onLoad={handleImageLoad} width={800} height={900} />
                                    ) : (
                                        <Image src={thumbSrc} width={800} height={900} alt="Thumb" onLoad={handleImageLoad} />
                                    )}
                                </a>
                            ) : (
                                <Link href={item.link}>
                                    {isExternal ? (
                                        <img src={thumbSrc} alt={item.title || 'Thumb'} onLoad={handleImageLoad} width={800} height={900} />
                                    ) : (
                                        <Image src={thumbSrc} width={800} height={900} alt="Thumb" onLoad={handleImageLoad} />
                                    )}
                                </Link>
                            )}
                            <div className="shape">
                                {item.link.startsWith('http') ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <span className="shape-recolor" style={{ filter: `url(#${shapeFilterId})` }}>
                                            <Image src={shape35} alt="" />
                                        </span>
                                    </a>
                                ) : (
                                    <Link href={item.link}>
                                        <span className="shape-recolor" style={{ filter: `url(#${shapeFilterId})` }}>
                                            <Image src={shape35} alt="" />
                                        </span>
                                    </Link>
                                )}
                            </div>
                            <div className="overlay">
                                <div className="content">
                                    <span>{item.tag}</span>
                                    <h4>
                                        {item.link.startsWith('http') ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                                        ) : (
                                            <Link href={item.link}>{item.title}</Link>
                                        )}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default IsotopeGallery;
