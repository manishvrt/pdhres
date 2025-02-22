"use client";
// components/CountingCard.js
import React, { useRef, useEffect } from "react";

const CountingCard = ({
  iconSrc,
  countEnd,
  title,
  description,
  descriptiont,
  iconBgColor,
  countUp,
  isLast, // New prop to determine if it's the last element
}) => {
  const countRef = useRef(null);

  useEffect(() => {
    countUp(countRef, 0, countEnd, 2); // Call the countUp function
  }, [countUp, countEnd]);

  return (
    <div className="bg-transparent backdrop-blur-3xl flex flex-col justify-between w-full lg:w-96 h-60 lg:h-80 rounded-3xl">
      <div className="flex flex-col mt-3 lg:mt-10 justify-start">
        <h1 className="gsans font-black text-6xl lg:text-7xl text-[#0c0c0c] flex items-center">
          {
            isLast ? "$" : ""
          }
         
          <span ref={countRef}>0</span>
          <span>+</span>
        </h1>
        <p className="small text-md lg:text-lg mt-6">
          {description}
          <br />
          {descriptiont}
        </p>
      </div>
    </div>
  );
};

export default CountingCard;
