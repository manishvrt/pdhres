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
    <div className=" px-2 pt-20 lg:pt-28 lg:px-6">
      <div className="relative bg-[#ffffff]  rounded-[40px]">
        {/* Container */}
        <section className="bg- rounded-[40px] overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch h-auto ">
            <div className="relative order-last lg:order-1 flex items-center justify-center w-full  lg:w-7/12">
              <div className="absolute bottom-0 right-0 hidden lg:block">
                {/* <img
                  className="object-contain w-auto h-48"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                  alt=""
                /> */}
              </div>

              <div className="relative  lg:py-12   text-center  2xl:px-12 lg:text-left">
                <h1 className="text-3xl mt-12 lg:mt-0 gsans font-bold text-black  xl:text-5xl">
                  Shape the future of Entrepreneurial success with us through
                  research
                </h1>
                <p className="mt-8 px-4 tracking-tight lg:px-0 text-sm lg:text-lg text-justify small text-black">
                  Did you know that{" "}
                  <span className="text-[#ff0000] font-bold tracking-wide">
                    80% of entrepreneur - led businesses fail within five years,
                    and only 5% survive beyond ten?
                  </span>{" "}
                  That’s a shocking number - but we can work together to change
                  it.
                </p>
                <p className="mt-4 tracking-tight px-4 lg:px-0 text-sm lg:text-lg text-justify small text-black">
                  We’re inviting successful entrepreneurs like you to join a
                  groundbreaking PhD research study that aims to find out what
                  truly makes an entrepreneur successful to thrive in Business
                  Growth. By sharing your experiences, you won’t just be helping
                  one researcher - you’ll be helping countless future
                  entrepreneurs understand the secrets to long-term success.
                </p>
                <p className="mt-4 tracking-tight px-4 lg:px-0 text-sm lg:text-lg text-justify small text-black">
                  When you participate in the survey, you’re not just giving
                  your insights; you’re shaping the way tomorrow’s entrepreneurs
                  build and grow their businesses. Your Insights matters.
                  Together, let’s make a real difference and raise the success
                  rate for everyone who dares to dream big. Will you join us?
                </p>

                <div className="flex flex-col lg:flex-row mb-6 gap-6 items-center mt-14">
                  <a
                    href="https://www.surveymonkey.com/r/Entrepreneur_Edge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      text="Let's get the Survey done!"
                      className="w-fit text-[#ffffff] font-semibold text-xs lg:text-[16px] small tracking-wide bg-[#ff0000] h-14 px-6"
                    />
                  </a>
                  <Button
                    onClick={scrollToResearch}
                    text="Explore more"
                    className="w-fit text-[#ffffff] text-xs lg:text-[16px] font-semibold small tracking-wide bg-[#0c0c0c] h-14 px-6"
                  />
                </div>
              </div>

              {/* <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                <img
                  className="w-32 h-32 md:w-40 md:h-40"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
                  alt=""
                />
              </div> */}
            </div>

            <div className="relative w-full overflow-hidden lg:order-last h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className=" object-cover object-center"
                  src="/RajeshTedla.jpg"
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
