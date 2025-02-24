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
      <div id="learn" className="bg-[#ffffff] rounded-[40px]   h-auto">
        <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto lg:grid-cols-5">
          {/* Left Section - Sticky */}
          <div className="lg:col-span-2 gsans mt-10 px-6 lg:px-0 lg:h-screen lg:sticky lg:top-0 flex flex-col lg:justify-center items-start">
            <img
              src="/eelogo.png"
              alt="arrow"
              className="lg:w-64 w-60 h-28  lg:h-32 rounded-3xl object-fill"
            />
            <h1 className="gsans mt-10 font-semibold  tracking-wider text-5xl lg:text-5xl  text-[#0c0c0c]">
              The{" "}
              <span className="text-[#ff0000]">Entrepreneur Edge™ (EE)</span>{" "}
              Program
            </h1>
            <h1 className="small mt-10 font-semibold text-2xl lg:text-[20px] text-[#0c0c0c]">
              Don’t miss out! Complete the survey now to get{" "}
              <span className="text-[#ff0000] ">
                Complimentary access to the EE Program.{" "}
              </span>{" "}<br/>
              $2,000 applies after July 1, 2025!{" "}
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
                    trait1={data.trait1}
                    trait2={data.trait2}
                    trait3={data.trait3}
                    traitheading1={data.traitheadin1}
                    traitheading2={data.traitheadin2}
                    traitheading3={data.traitheadin3}
                    desc={data.desc}
                    desc1={data.desc1}
                    desc2={data.desc2}
                    desc3={data.desc3}
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
