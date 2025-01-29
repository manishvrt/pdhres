"use client";
import React from "react";
import Button from "../Reusables/Button";
import useScrollAnimation from "../Hooks/useScrollAnimation";
const Hero = () => {
  const getCardRef = useScrollAnimation();
  const scrollToSurvey = () => {
    const nextSection = document.getElementById("Survey");
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
    }
};

const scrollToResearch = () => {
    const nextSection = document.getElementById("Research");
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
    }
};
  return (
    <div className=" px-2 pt-20 lg:pt-24 lg:px-6">
      <div className="relative bg-[#ffffff]  rounded-[40px]">
        {/* Container */}
        <div className="flex max-w-7xl mx-auto justify-center items-center h-auto p-4 lg:p-24">
          <div className="flex flex-col justify-center items-center">
            {/* Heading Section */}
            <span className="flex border text-xs lg:text-[15px] mt-6 lg:mt-0 border-zinc-200 gap-2 justify-center items-center small bg-[#ffffff] h-6 lg:h-8 w-fit px-4 lg:px-6 rounded-3xl">
              <img
                src="/thunder.svg"
                alt="arrow"
                className="w-4 h-4 object-cover"
              />
              Entrepreneurial Success
            </span>
            <h1 className="gsans font-bold mt-12 text-[#0c0c0c] text-4xl  lg:text-7xl text-center">
              Shape the Future of Entrepreneurial Success with Us
            </h1>
            <p className="text-[#0c0c0c]/70 max-w-5xl text-center text-sm lg:text-lg mt-10 small">
              Be part of an exclusive research study led by Rajesh Tedla,
              CEO of VRT Management Group as a part of his Doctorate in Business
              Administration from Swiss School of Business aimed to identify the
              behavioral patterns that drive entrepreneurial success. Limited to
              1,000 qualified participants. Unlock premium tools and gain access
              to the Entrepreneur Edge<sup>TM</sup> Program, including Tri-Metrix
              assessments, GAP Reports, and Personal Development Plans - valued
              at $2,000.
            </p>
            {/* Buttons */}
            <div className="flex flex-col lg:flex-row mb-6 gap-6 items-center mt-14">
              <Button
              onClick={scrollToSurvey}
                text="Check Your Eligibility Now"
                className="w-fit text-[#ffffff] font-semibold text-xs lg:text-[16px] small tracking-wide bg-[#ff0000] h-14 px-6"
              />
              <Button
              onClick={scrollToResearch}
                text="Explore more"
                className="w-fit text-[#ffffff] text-xs lg:text-[16px] font-semibold small tracking-wide bg-[#0c0c0c] h-14 px-6"
              />
            </div>
          </div>
        </div>

        {/* Decorative Icons */}
        <div
          ref={getCardRef}
          className="absolute hidden lg:block border-4 border-[#ffffff] top-14 left-24 -translate-x-1/4 w-32 h-32 rounded-full overflow-hidden"
        >
          <img
            src="https://assets.lummi.ai/assets/QmeKeBhHFW3KBshwz4qih6cieenaEEPXB5jiFU7ovft2kB?auto=format&w=1500"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          ref={getCardRef}
          className="absolute hidden lg:block border-4 border-[#ffffff] bottom-40 left-32 -translate-x-1/4 w-32 h-32 rounded-full overflow-hidden"
        >
          <img
            src="https://assets.lummi.ai/assets/QmZKH2iWwBQJWHopYUtnbqvtstXytRJrmyyHLWJMKxiwPw?auto=format&w=1500"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          ref={getCardRef}
          className="absolute hidden lg:block border-4 border-[#ffffff] top-10 right-10 -translate-x-1/4 w-32 h-32 rounded-full overflow-hidden"
        >
          <img
            src="https://assets.lummi.ai/assets/QmVjbhjaBw36AKzizdNEJuHnncfGDE3XTmruJKMvBbr3rY?auto=format&w=1500"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          ref={getCardRef}
          className="absolute hidden lg:block border-4 border-[#ffffff] bottom-36 right-32 -translate-x-1/4 w-32 h-32 rounded-full overflow-hidden"
        >
          <img
            src="https://assets.lummi.ai/assets/QmRrAz9Hd3SN6yGrqid1RZBaj64QpAnH22B9qBRKBwnY1W?auto=format&w=1500"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
