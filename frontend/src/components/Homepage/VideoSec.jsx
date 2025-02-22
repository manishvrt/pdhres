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
      <div className="px-2 lg:px-8 lg:-mt-6">
        <div className="bg-[#ffffff]  rounded-[40px] flex justify-center items-center lg:p-10">
          <div className="mx-auto p-6">
            <h1 className="lg:text-5xl text-3xl  lg:p-0 text-[#0c0c0c]   font-bold gsans">
              A Message from Our Visionary Leader on Future Entrepreneurial
              Success & Growth
            </h1>
            <p className="small lg:text-lg tracking-wide text-sm py-6 text-[#0c0c0c]">
              Hear from Business Growth Expert with{" "}
              <span className="font-bold text-sm lg:text-xl text-[#ff0000]">
                35+ Years of Experience - Former Senior Vice President at General
                Electric (GE), Stanford Entrepreneurship Mentor, and CEO of VRT
                Management Group
              </span>{" "}
              - who has empowered{" "}
              <span className="font-bold text-sm lg:text-xl text-[#ff0000]">1,400+ entrepreneurs</span> to scale
              their businesses, optimize leadership, and transform people,
              processes, and strategies for long-term success.
            </p>
            <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-14">
              {/* Video Player */}
              <div className="w-full -mt-4  order-1 lg:order-last h-[42svh] lg:h-[65vh]">
                <VideoPlayer />
              </div>

              {/* Key Points and Message */}
              <div className="w-full lg:p-0 flex flex-col justify-between rounded-[40px] h-auto  order-2 lg:order-1">
                <div>
                  <div className="order-last">
                    <h1 className="lg:text-3xl mt-4 lg:mt-8 text-2xl font-semibold text-[#ff0000] small">
                      Key points covered:
                    </h1>

                    {/* Key Points */}
                    <div className="flex mt-10 gap-4 justify-start items-center">
                      <img src="/check.svg" alt="check" className="w-5 h-5" />
                      <h1 className="lg:text-lg text-[14px] text-[#0c0c0c] small">
                        The importance of understanding what drives
                        entrepreneurial success in today’s fast-changing
                        business landscape.
                      </h1>
                    </div>

                    <div className="flex mt-2 gap-4 justify-start items-center">
                      <img src="/check.svg" alt="check" className="w-5 h-5" />
                      <h1 className="lg:text-lg text-[14px] text-[#0c0c0c] small">
                        How 35+ years of experience and insights from working
                        with 1,400+ businesses shaped this transformative
                        research.
                      </h1>
                    </div>

                    <div className="flex mt-2 gap-4 justify-start items-center">
                      <img src="/check.svg" alt="check" className="w-5 h-5" />
                      <h1 className="lg:text-lg text-[14px] text-[#0c0c0c] small">
                        The creation of a benchmark for entrepreneurial
                        excellence, redefining how leaders can scale and thrive.
                      </h1>
                    </div>

                    <div className="flex mt-2 gap-4 justify-start items-center">
                      <img src="/check.svg" alt="check" className="w-5 h-5" />
                      <h1 className="lg:text-lg text-[14px] text-[#0c0c0c] small">
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
