import React, { useRef } from "react";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <>
      <div className=" group">
        <div className="flex bg-gradient-to-bl from-zinc-100 via-gray-100 to-zinc-50 bg-opacity-35 backdrop-blur-xl  dark:bg-[#101010] flex-col justify-between rounded-[35px] p-6 lg:p-10  h-auto lg:h-96  overflow-hidden transition ease-out active:opacity-75">
          <div>
            <img
              src={imgSrc}
              alt="service"
              className="lg:w-20 lg:h-20 w-16 h-16 group-hover:rotate-180 duration-700 transition-all object-cover"
            />
            <h1 className="text-[#0c0c0c] dark:text-[#ffffff] text-3xl lg:text-4xl font-semibold gsans mt-6">
              {title}
            </h1>
          </div>

          <p className="small text-[15px] mt-6 lg:text-lg dark:text-[#B1B1B1] tracking-tight">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
