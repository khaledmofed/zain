"use client"
import React, { useState } from 'react';
import SinglePrice1 from './SinglePrice1';
import Price1Data from '@/assets/jsonData/price/Price1Data.json'
import PriceTitle from './PriceTitle';

const PriceStyle1 = ({ priceTitle, sectionClass }) => {

    const [activeServiceId, setActiveServiceId] = useState(Price1Data[0]?.id || null);

    const handleMouseEnter = (id) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`pricing-style-one-area default-padding bottom-less ${sectionClass}`}>
                {priceTitle ? <PriceTitle /> : <></>}
                <div className="container">
                    <div className="row">
                        {Price1Data.map(price =>
                            <div className="col-xl-3 col-md-6 mb-30" key={price.id}>
                                <div className={`pricing-style-one ${activeServiceId === price.id ? 'active' : ''}`}
                                    style={{ backgroundImage: `url(/assets/img/shape/15.webp)` }}
                                    onMouseEnter={() => handleMouseEnter(price.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <SinglePrice1 price={price} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceStyle1;