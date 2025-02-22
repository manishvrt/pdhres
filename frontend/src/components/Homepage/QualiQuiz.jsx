import React from "react";
import Button from "../Reusables/Button";
const QualiQuiz = () => {
  return (
    <div id="Survey" className="lg:px-6 px-2  mt-12">
      <div className="bg-[#ffffff]  rounded-[40px] flex justify-start   h-auto py-10 lg:py-16">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid gap-4 items-center lg:grid-cols-6">
            <div className="lg:col-span-4 order-2 lg:order-first">
              <h1 className="lg:text-5xl px-4 text-3xl text-center lg:text-start font-bold gsans text-[#0c0c0c]  ">
                Shape the Future of Entrepreneurial Success – It Starts With{" "}
                <span className="text-[#ff0000]">YOU</span>
              </h1>
            </div>
            <div className="lg:col-span-2 order-1 lg:shadow-xl p-4 rounded-3xl">
              <div className="flex justify-center items-center">
                <img
                  src="/vrtlogo.png"
                  alt="logo"
                  className="lg:w-4/5 h-40 "
                />
              </div>
            </div>
          </div>

          <h2 className="text-sm lg:text-lg text-[#0c0c0c] mt-16 small text-justify px-6">
            <span className="lg:text-2xl text-xl tracking-wide font-semibold text-[#0c0c0c]">
              Have you ever wondered what sets the most successful entrepreneurs
              apart?{" "}
            </span>
            Join this exclusive PhD research study that aims to discover the key
            behaviours and motivators that drives entrepreneur excellence. Led
            by{" "}
            <span className="lg:text-xl   tracking-wide font-semibold text-[#ff0000]">
              Rajesh Tedla, CEO of VRT Management Group
            </span>
            , who has transformed{" "}
            <span className="text-xl  tracking-wide font-bold text-[#ff0000]/90">
              1,400+
            </span>{" "}
            entrepreneur led businesses, conducting this research as part
            of his PhD study from the prestigious Swiss School of Business,
            offers you a chance to discover your unique edge while shaping the
            future of entrepreneurship. By participating, you’re not just
            gaining exclusive insights - you’re contributing to a benchmark that
            empowers entrepreneurs like you to achieve sustainable growth and
            long-term success.
          </h2>
          <div className="flex flex-col mt-14 justify-start gap-10">
            <div className="px-5">
              <h1 className="lg:text-2xl text-2xl font-semibold tracking-wide  text-[#ff0000]  small">
                Why Should You Join?
              </h1>
              <div className="flex text-[#0c0c0c] mt-10 lg:mt-6 gap-4 justify-start items-start">
                <img
                  src="/joinv.svg"
                  alt="check"
                  className="w-4 lg:w-5 lg:h-5 mt-2 h-4"
                />
                <h1 className="lg:text-xl text-sm  text-[#0c0c0c]/90 small">
                  <span className="lg:text-xl text-lg  tracking-wide font-semibold text-[#0c0c0c]/90">
                    Define the Future of Entrepreneurship:
                  </span>{" "}
                  Your insights will help establish benchmarks that guide
                  current and future entrepreneurs in building impactful,
                  thriving businesses.
                </h1>
              </div>
              <div className="flex mt-2 lg:mt-3  gap-4 justify-start items-start">
                <img
                  src="/joinv.svg"
                  alt="check"
                  className="w-4 lg:w-5 lg:h-5 mt-2 h-4"
                />

                <h1 className="lg:text-xl text-sm  text-[#0c0c0c]/90   small">
                  <span className="lg:text-xl text-lg tracking-wide font-semibold text-[#0c0c0c]/90">
                    Discover Your Unique Edge:
                  </span>{" "}
                  Receive a personalized psychometric profile that reveals your
                  leadership strengths, entrepreneurial profile, and behavioral
                  traits.
                </h1>
              </div>
              <div className="flex mt-2 lg:mt-3 gap-4 justify-start items-start">
                <img
                  src="/joinv.svg"
                  alt="check"
                  className="w-4 lg:w-5 lg:h-5 mt-2 h-4"
                />

                <h1 className="lg:text-xl text-sm  text-[#0c0c0c]/90 small">
                  <span className="lg:text-xl text-lg  tracking-wide font-semibold text-[#0c0c0c]/90">
                    Measure Yourself Against the Best:
                  </span>{" "}
                  Access the 15 key traits of highly successful entrepreneurs,
                  serving as a gold standard to measure where you stand and how
                  you can excel.
                </h1>
              </div>
              <div className="flex mt-2 lg:mt-3 gap-4 justify-start items-start">
                <img
                  src="/joinv.svg"
                  alt="check"
                  className="w-4 lg:w-5 lg:h-5 mt-2 h-4"
                />

                <h1 className="lg:text-xl text-sm  text-[#0c0c0c]/90 small">
                  <span className="lg:text-xl text-lg  tracking-wide font-semibold text-[#0c0c0c]/90">
                    Unlock Your Growth Potential:
                  </span>{" "}
                  Get a detailed GAP analysis comparing your traits to these
                  benchmarks.
                </h1>
              </div>
              <div className="flex mt-2 lg:mt-3 gap-4 justify-start items-start">
                <img
                  src="/joinv.svg"
                  alt="check"
                  className="w-4 lg:w-5 lg:h-5 mt-2 h-4"
                />

                <h1 className="lg:text-xl text-sm  text-[#0c0c0c]/90 small">
                  <span className="lg:text-xl text-lg  tracking-wide font-semibold text-[#0c0c0c]/90">
                    Achieve Strategic Success:
                  </span>{" "}
                  Gain a tailored Personal Development Plan with clear steps to sharpen
                  your decision-making, leadership, and business growth
                  strategies.
                </h1>
              </div>
            </div>

            {/* <div className="px-5">
              <h1 className="lg:text-2xl text-xl font-semibold tracking-wide  text-[#989999]  small">
                Qualification criteria includes:
              </h1>
              <div className="flex mt-6 gap-4 justify-start items-center">
                <img src="/check.svg" alt="check" className="w-5 h-5" />
                <h1 className="lg:text-xl text-[17px]  text-[#0c0c0c]/80 small">
                  Annual business revenue exceeding $500kM
                </h1>
              </div>
              <div className="flex mt-2 lg:mt-0  gap-4 justify-start items-center">
                <img src="/check.svg" alt="check" className="w-5 h-5" />

                <h1 className="lg:text-xl text-[17px] text-[#0c0c0c]/80 small">
                  Active business ownership (minimum 25% equity)
                </h1>
              </div>
              <div className="flex mt-2 lg:mt-0 gap-4 justify-start items-center">
                <img src="/check.svg" alt="check" className="w-5 h-5" />

                <h1 className="lg:text-xl text-[17px]  text-[#0c0c0c]/80 small">
                  Business operation for 1+ years
                </h1>
              </div>
            </div> */}
            <div className="px-5">
              <h1 className="lg:text-2xl text-2xl font-semibold tracking-wide text-[#ff0000]  small">
                Why This Matters to YOU
              </h1>
              <div className="flex mt-6 text-[#0c0c0c]  gap-4 justify-start items-center">
                <h1 className="lg:text-xl text-sm  text-[#0c0c0c] small">
                  Success doesn’t happen by accident. Aligning yourself with the
                  traits of top-performing entrepreneurs provides a roadmap for
                  growth, resilience, and strategic scaling in today’s
                  competitive landscape.
                </h1>
              </div>
            </div>

            <div className="px-5">
              <h1 className="lg:text-2xl text-2xl font-semibold tracking-wide text-[#ff0000]  small">
                Time Estimate:
              </h1>
              <div className="flex mt-6   gap-4 justify-start items-center">
                <h1 className="lg:text-xl text-sm  text-[#0c0c0c] small">
                  It takes just 5 minutes to complete this quick survey. In
                  return, you’ll gain complimentary access to the{" "}
                  <span className="lg:text-xl text-lg  tracking-wide font-semibold text-[#0c0c0c]/90">
                    Entrepreneur Edge™ Program (valued at $2,000)
                  </span>{" "}
                  - a transformative opportunity to improve your entrepreneurial
                  journey. Don’t wait for success to find you. Take the next
                  step in your journey today.
                </h1>
              </div>
            </div>
          </div>
          <div className=" overflow-hidden border w-full h-auto lg:h-96 rounded-[40px] mt-12">
            <div className="grid h-full  lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 lg:p-0 bg-[#ffffff] flex flex-col justify-center items-center py-10">
                <h1 className="gsans text-[#0c0c0c] text-4xl lg:text-5xl font-bold text-center ">
                  Ready to Shape the Future of Entrepreneurial Success?
                </h1>
                {/* <h1 className="gsans mt-8 text-3xl text-[#0c0c0c] lg:text-4xl font-bold tracking-tight text-center ">
                  Take the Survey Now!
                </h1> */}
                <a
                  href="https://www.surveymonkey.com/r/Entrepreneur_Edge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    text="Take the Survey Now"
                    className="w-fit hover:scale-110 duration-500 transition-all mt-12 text-[#ffffff] font-semibold text-xs lg:text-[16px] small tracking-wide bg-[#ff0000] h-14 px-6"
                  />
                </a>
              </div>

              <div className="lg:col-span-2 w-full h-full bg-[#0c0c0c]">
                <img
                  src="https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* <QualiForm /> */}
        </div>
      </div>
    </div>
  );
};

export default QualiQuiz;
