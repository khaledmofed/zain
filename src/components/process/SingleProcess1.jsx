"use client";
import Image from "next/image";
import React from "react";

const SingleProcess1 = ({ process, translatedTitle, translatedText }) => {
  const { thumb, steps, image, title } = process;
  const imgSrc = image || (thumb ? `/assets/img/about/${thumb}` : null);
  const displayTitle = title || translatedTitle;

  return (
    <>
      <div className="thumb">
        {imgSrc && (
          <Image
            src={imgSrc}
            width={800}
            height={800}
            alt={displayTitle || "Thumb"}
          />
        )}
        {steps != null && steps !== "" && <span>{steps}</span>}
      </div>
      <h4>{displayTitle}</h4>
      {/* <p>{translatedText || process.text}</p> */}
    </>
  );
};

export default SingleProcess1;
