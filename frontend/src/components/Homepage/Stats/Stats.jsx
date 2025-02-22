"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountingCard from "./CountingCard";
import useCountUp from "./Hooks/useCountUp";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const countUp = useCountUp();
  const [startIndex, setStartIndex] = useState(0);
  const [isCounting, setIsCounting] = useState(false); // New state to track counting
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const cardRef = React.useRef(null);

  const statsData = [
    {
      id: 1,
     
      countEnd: 35,
      description: "years of experience in ",
      descriptiont: "Entrepreneur Consulting",

      
    },
    {
      id: 2,
     
      countEnd: 1400,
      description: "Entrepreneur led businesses ",
      descriptiont: "Transformed",

    },
    {
      id: 3,
     
      countEnd: 14573,
      description: "Executives & CEOs Trained ",
      descriptiont: "and Mentored",

      
    },
    {
      id: 4,
     
      countEnd:475,
      description: "Millions of Economic value ",
      descriptiont: "generated for our clients",

    },
  ];

  const handleNext = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        opacity: 0,
        x: -100,
        duration: 0.3,
        onComplete: () => {
          setStartIndex((prevIndex) => (prevIndex + 1) % statsData.length);
          setIsCounting(false); // Reset counting flag
          gsap.fromTo(cardRef.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.3 }
          );
        }
      });
    }
  };

  const handlePrevious = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        opacity: 0,
        x: 100,
        duration: 0.3,
        onComplete: () => {
          setStartIndex((prevIndex) => (prevIndex - 1 + statsData.length) % statsData.length);
          setIsCounting(false); // Reset counting flag
          gsap.fromTo(cardRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.3 }
          );
        }
      });
    }
  };

  useEffect(() => {
    const scrollTriggerConfig = {
      trigger: ".countSection",
      start: "top bottom",
      toggleActions: "play none none reverse",
      onEnter: () => {
        if (!isCounting) { // Check if counting has not been triggered
          setIsCounting(true); // Set counting flag
          countUp(statsData[startIndex].countEnd); // Call counting function
        }
      },
    };

    const trigger = ScrollTrigger.create(scrollTriggerConfig);

    return () => {
      trigger.kill();
    };
  }, [startIndex, isCounting]); // Add isCounting to dependency array

  return (
    <div className="flex overflow-hidden   lg:px-8  mx-auto  mt-24  justify-start items-center">
      <div className="flex rounded-[40px] p-10  flex-col justify-center items-start">
      
        <h1 className="gsans mt-6 font-semibold  text-[#ff0000] text-4xl lg:text-5xl">
          Achievements
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 justify-center mt-24 lg:mt-16 gap-6 countSection">
  {isMobile ? (
    <div ref={cardRef}>
      <CountingCard
        countEnd={statsData[startIndex].countEnd}
        description={statsData[startIndex].description}
        descriptiont={statsData[startIndex].descriptiont}

        countUp={countUp}
        isLast={startIndex === statsData.length - 1} // Check if it's the last element
      />
    </div>
  ) : (
    statsData.map((stat, index) => (
      <CountingCard
        key={stat.id}
        countEnd={stat.countEnd}
        description={stat.description}
        descriptiont={stat.descriptiont}
        countUp={countUp}
        isLast={index === statsData.length - 1} // Pass true only for the last item
      />
    ))
  )}
</div>


        {/* Navigation buttons for mobile */}
        {isMobile && (
          <div className="flex justify-center lg:mt-10 gap-4 ">
            <button
              onClick={handlePrevious}
              className="text-white flex justify-center items-center bg-[#eeeeee] w-10 h-10 rounded-full disabled:opacity-50"
              disabled={startIndex === 0}
            >
              <img
                src="https://www.svgrepo.com/show/533620/arrow-sm-left.svg"
                alt="Previous"
                className="w-6 h-6"
              />
            </button>
            <button
              onClick={handleNext}
              className="text-white bg-[#eeeeee] flex justify-center items-center w-10 h-10 rounded-full disabled:opacity-50"
              disabled={startIndex >= statsData.length - 1}
            >
              <img
                src="https://www.svgrepo.com/show/533621/arrow-sm-right.svg"
                alt="Next"
                className="w-6 h-6"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;