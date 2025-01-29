"use client";
import React from "react";
import VideoPlayer from "./VideoPlayer";
import Button from "../Reusables/Button";

const VideoSec = () => {
  const scrollToSurvey = () => {
    const nextSection = document.getElementById("Survey");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="px-2 lg:px-8 mt-12">
        <div className="bg-[#ffffff]  rounded-[40px] flex justify-center items-center lg:p-10">
          <div className="mx-auto">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-14">
              {/* Video Player */}
              <div className="w-full order-1 lg:order-last h-[42svh] lg:h-[65vh] lg:mt-10">
                <VideoPlayer />
              </div>

              {/* Key Points and Message */}
              <div className="w-full p-6 lg:p-0 flex flex-col justify-between rounded-[40px] h-auto lg:mt-10 order-2 lg:order-1">
                <div>
                  <h1 className="lg:text-5xl text-3xl lg:p-0 text-[#0c0c0c] font-bold gsans">
                    A Message from Our Research Leader
                  </h1>
                  <p className="small lg:text-lg text-sm py-6 text-[#858585]">
                    Hear from entrepreneurs who’ve benefited from the
                    Entrepreneur Edge Program
                  </p>
                  <div className="order-last">
                    <h1 className="lg:text-3xl mt-4 lg:mt-8 text-2xl font-semibold text-[#ff0000] small">
                      Key points covered:
                    </h1>
                    
                    {/* Key Points */}
                    <div className="flex mt-10 gap-4 justify-start items-center">
                      <img src="/check.svg" alt="check" className="w-5 h-5" />
                      <h1 className="lg:text-lg text-[15px] text-[#0c0c0c] small">
                        The importance of understanding what drives
                        entrepreneurial success in today’s fast-changing business
                        landscape.
                      </h1>
                    </div>
                    
                    <div className="flex mt-2 gap-4 justify-start items-center">
                      <img src="/check.svg" alt="check" className="w-5 h-5" />
                      <h1 className="lg:text-lg text-[15px] text-[#0c0c0c] small">
                        How 35+ years of experience and insights from working with
                        1,400+ entrepreneurs shaped this transformative research.
                      </h1>
                    </div>

                    <div className="flex mt-2 gap-4 justify-start items-center">
                      <img src="/check.svg" alt="check" className="w-5 h-5" />
                      <h1 className="lg:text-lg text-[15px] text-[#0c0c0c] small">
                        The creation of a benchmark for entrepreneurial
                        excellence, redefining how leaders can scale and thrive.
                      </h1>
                    </div>

                    <div className="flex mt-2 gap-4 justify-start items-center">
                      <img src="/check.svg" alt="check" className="w-5 h-5" />
                      <h1 className="lg:text-lg text-[15px] text-[#0c0c0c] small">
                        The exclusive benefits for participants, including a
                        complimentary $2,000 Entrepreneur Edge™ Program to help
                        entrepreneurs grow and succeed.
                      </h1>
                    </div>
                  </div>

                  <Button
                    onClick={scrollToSurvey}
                    text="Discover if you qualify"
                    className="w-fit mt-12 text-[#ffffff] font-semibold small tracking-wide bg-[#ff0000] h-14 px-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSec;
