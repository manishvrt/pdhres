"use client";
import React from "react";

const Impact = () => {
  return (
    <div id="Research" className=" px-2 lg:px-8 mx-auto">
      <div className="bg-[#ffffff] dark:bg-[#0c0c0c] p-6 lg:p-10  my-12 w-full h-auto py-16 rounded-[40px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 flex text-center justify-center items-center">
            <img
              src="https://www.svgrepo.com/show/304720/star-prize-award.svg"
              alt="impact"
              className="lg:w-80 w-40 h-40 lg:h-80 object-cover"
            />
          </div>
          <div className="lg:col-span-3">
            <span className="gsans font-semibold text-[#0c0c0c] text-3xl lg:text-2xl">
              Research Overview
            </span>
            <h1 className="gsans dark:text-[#ffffff] font-semibold mt-6  text-[#ff0000] text-2xl lg:text-5xl">
              Redefining Entrepreneurial
              <br /> Excellence
            </h1>
            <p className="small dark:text-[#989999] max-w-3xl mt-8 text-sm text-justify lg:text-xl text-gray-700">
              We’re conducting a groundbreaking study to discover what drives
              entrepreneurial success in today’s fast-changing world. Our goal
              is to set modern benchmarks for excellence by analyzing the
              traits, behaviors, and motivations of top successful entrepreneurs
              and business leaders. <br/> 
            </p>
            <p className="font-bold bg-[#ff0000] p-8 mt-6 small text-2xl text-[#ffffff] rounded-3xl">
              With only 1,000 spots available, we’re
              inviting entrepreneurs like you to join this important research.
                </p>
            <h1 className="gsans dark:text-[#ffffff] font-semibold mt-14  text-[#0c0c0c] text-2xl lg:text-5xl">
              Why Now?
            </h1>
            <p className="small dark:text-[#989999] mt-8 text-sm lg:text-xl text-justify text-gray-700">
              The business world has evolved rapidly and understanding what
              makes entrepreneurs thrive today is more important than ever. Your
              input will help define the traits that shape the next generation
              of successful entrepreneurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
