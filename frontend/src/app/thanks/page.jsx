import React from "react";

const page = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-5">
      <div className="col-span-2">
          <div className="">
            <img
              className="object-cover w-full lg:h-screen"
              src="/heropic.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-3 bg-[#ffffff] flex flex-col justify-center h-screen items-start w-full p-16">
          <div>
            <img src="/vrtlogo.png" className="w-44 h-24" alt="Logo" />
          </div>
          <h1 className="text-4xl text-[#0c0c0c] mt-12 gsans font-semibold w-full">
            Congratulations 🎉, <span className="text-[#ff0000]"></span> !
            <br /> You’ve Successfully Unlocked Your Entrepreneur Edge™ Program
            Access!
          </h1>
          <h1 className="text-center mt-16 gsans tracking-wide text-3xl font-semibold text-[#0c0c0c]">
            What’s Next?
          </h1>
          <div className="flex mt-10 items-center gap-4">
            <img src="/check.svg" alt="" className="w-5 h-5" />
            <h2 className="small text-lg tracking-tight text-[#0c0c0c]">
              You’ll receive an email shortly with your official confirmation
              and the Zoom meeting invite for Entrepreneur Edge™ Program.
            </h2>
          </div>
          <div className="flex mt-3 items-center gap-4">
            <img src="/check.svg" alt="" className="w-5 h-5" />
            <h2 className="small text-lg tracking-tight text-[#0c0c0c]">
              Accept the invite to secure your spot in the Entrepreneur Edge™
              Live Mentoring Session on{" "}
              <strong className="text-[#ff0000]">
                March 6th, 2025, at 10 AM EST With Rajesh Tedla
              </strong>
              .
            </h2>
          </div>
          <span className="text-xl gsans font-semibold mt-16 text-[#0c0c0c] tracking-wide">
            🚀 See you in the session!{" "}
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default page;
