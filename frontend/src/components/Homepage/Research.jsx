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
    <div id="Research" className=" px-2 pt-20 lg:pt-24 lg:px-6">
      <div className="relative h-auto  bg-[#ffffff]  rounded-[40px]">
        {/* Container */}
        <section className="bg- rounded-[40px] overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="relative flex items-center justify-center w-full lg:order-last lg:w-7/12">
              {/* <div className="absolute bottom-0 right-0 hidden lg:block">
                <img
                  className="object-contain w-auto h-48"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                  alt=""
                />
              </div> */}

              <div className="relative px-4 py-12 pb-16 text-center sm:px-6 2xl:px-12 lg:text-left">
                <span className="gsans font-semibold text-[#0c0c0c] text-3xl lg:text-2xl">
                  Research Overview
                </span>
                <h1 className="gsans  font-semibold mt-6  text-[#ff0000] text-2xl lg:text-5xl">
                  Redefining Entrepreneurial
                  <br /> Excellence
                </h1>
                <p className="small  max-w-3xl mt-8 text-sm text-justify lg:text-xl text-gray-700">
                  We’re conducting a groundbreaking study to discover what
                  drives entrepreneurial success in today’s fast-changing world.
                  Our goal is to set modern benchmarks for entrepreneur excellence by
                  analyzing the traits, behaviors, and motivators of top
                  successful entrepreneurs and business leaders. <br />
                </p>
                <p className="font-bold flex gap-4 justify-center items-center pt-3  mt-6 small text-2xl text-[#0c0c0c] rounded-3xl">
                <img src="/joinv.svg" alt="check" className="w-4 hidden lg:block lg:w-10 lg:h-10  h-4" />

              With only 1,000 spots available, we’re
              inviting successful entrepreneurs like you to join this important research.
                </p>
            <h1 className="gsans  font-semibold mt-14  text-[#ff0000] text-2xl lg:text-5xl">
              Why Now?
            </h1>
            <p className="small  mt-8 text-sm lg:text-xl text-justify text-gray-700">
              The business world has evolved rapidly and understanding what
              makes entrepreneurs thrive today is more important than ever. Your
              input will help define the traits that shape the next generation
              of successful entrepreneurs.
            </p>
                {/* <div className="flex flex-col lg:flex-row mb-6 gap-6 items-center mt-14">
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
                </div> */}
              </div>

              {/* <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                <img
                  className="w-32 h-32 md:w-40 md:h-40"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
                  alt=""
                />
              </div> */}
            </div>

            <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full"
                  src="/research.jpg"
                  alt=""
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              
            </div>
          </div>
        </section>

        {/* Decorative Icons */}
      </div>
    </div>
  );
};

export default Hero;
