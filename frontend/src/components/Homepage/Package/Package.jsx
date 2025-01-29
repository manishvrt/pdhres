"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PackageCard from "./PackageCard";
import { packageData } from "./packageData";

gsap.registerPlugin(ScrollTrigger);

const ServiceSlide = () => {
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    // Ensure the `serviceCardsRef` array has the correct length
    serviceCardsRef.current = serviceCardsRef.current.slice(
      0,
      packageData.length
    );

    // Apply animations to each card
    serviceCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Cleanup ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="lg:px-6 px-2 mt-12">
      <div id="learn" className="bg-[#ffffff] rounded-[40px]  dark:bg-[#0c0c0c] h-auto">
      <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto lg:grid-cols-5">
        {/* Left Section - Sticky */}
        <div className="lg:col-span-2 gsans mt-10 px-6 lg:px-0 lg:h-screen lg:sticky lg:top-0 flex flex-col lg:justify-center items-start">
          
          <h1 className="gsans mt-10 font-semibold tracking-tight text-5xl lg:text-7xl dark:text-[#ffffff] text-[#0c0c0c]">
            The <span className="text-[#ff0000]">Entrepreneur Edge (EE)</span> Program 
          </h1>
          <h1 className="gsans mt-10 font-semibold tracking-tight text-2xl lg:text-4xl dark:text-[#ffffff] text-[#0c0c0c]">
          (Valued at $2,000)
          </h1>
        </div>

        {/* Right Section - Scrollable Content */}
        <div className="lg:col-span-3 p-2 lg:p-4 overflow-y-auto">
          <div className="flex flex-col gap-6 mt-16 lg:mt-32 mb-20">
            {packageData?.map((data, index) => (
              <div
                ref={(el) => (serviceCardsRef.current[index] = el)}
                key={index}
              >
                <PackageCard
                  imgSrc={data.imgSrc}
                  title={data.title}
                  desc={data.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ServiceSlide;
