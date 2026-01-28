"use client";
import Image from 'next/image';
import React from 'react';

const SingleProcess1 = ({ process, translatedTitle, translatedText }) => {
    const { thumb, steps } = process

    return (
        <>
            <div className="thumb">
                <Image src={`/assets/img/about/${thumb}`} width={800} height={800} alt="Thumb" />
                <span>{steps}</span>
            </div>
            <h4>{translatedTitle || process.title}</h4>
            {/* <p>{translatedText || process.text}</p> */}
        </>
    );
};

export default SingleProcess1;