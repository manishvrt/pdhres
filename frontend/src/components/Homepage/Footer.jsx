"use client";
import React from "react";
import Button from "../Reusables/Button";

import SubscribeToNewsLetter from "./SubscribeToNewsLetter";

const Footer = () => {
  const backgroundImage = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1642270057580-1b5d62982bea?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    backgroundSize: "fill",
  };

  return (
    <div className=" h-auto  bg-[#0c0c0c] dark:bg-[#0c0c0c] dark:border-t dark:border-zinc-900 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 m-6 lg:m-0 lg:grid-cols-5 items-center gap-6">
          <div className="flex lg:col-span-2 flex-col">
            <div className="flex mt-3 lg:mt-16 flex-col">
              <h1 className="gsans font-semibold text-4xl lg:text-5xl dark:text-[#ffffff] text-[#ffffff]">
                Let’s talk about
                <br />
                your vision
              </h1>
              <div className="flex mt-8 items-center gap-8">
                <Button
                  customImage="/rarrow.svg"
                  text="Get in touch"
                  customImageSize={{ width: "30px", height: "30px" }}
                  className="w-fit h-10 text-[#ffffff] bg-[#ff0000] px-4 "
                />
                  
            
              </div>
            </div>
            <div className="lg:mt-16 mt-10 flex flex-col items-start justify-end">
              <h2 className="text-[#989999] dark:text-[#ffffff] uppercase small text-sm mb-8">
                Get in touch
              </h2>
              <div className="lg:text-2xl flex items-center gap-4 mb-4 dark:text-[#ffffff] text-[#ffffff] text-xl  small">
                <img
                  src="/email.svg"
                  alt="chat"
                  className="lg:h-6 w-5 h-5 lg:w-6"
                />
                <h1>contact@vrt9.com</h1>
              </div>
              <div className="lg:text-2xl flex items-center gap-4 mb-4 dark:text-[#ffffff] text-[#ffffff] text-xl  small">
                <img
                  src="/phone.svg"
                  alt="chat"
                  className="lg:h-6 w-5 h-5 lg:w-6"
                />
                <h1 className="flex items-center">+44 123 456 7890</h1>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <SubscribeToNewsLetter />
          </div>
        </div>
        <div className="flex mt-6 mb-8 lg:justify-between lg:flex-row flex-col">
          <div className="flex justify-center items-center gap-8">
            <h1 className="small  lg:text-[18px] text-[16px]  dark:text-gray-300 text-[#787878]">
              Home
            </h1>
            <h1 className="small   text-[18px]  dark:text-gray-300 text-[#787878]">
              Events
            </h1>
            <h1 className="small   text-[18px]  dark:text-gray-300  text-[#787878]">
              Careers
            </h1>
            <h1 className="small   text-[18px]  dark:text-gray-300  text-[#787878]">
              About
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-6  justify-center lg:mt-0 mt-6 items-center ">
            <h1 className="small mb-6 lg:mb-0 mt-3 lg:mt-0 lg:text-[17px] text-xs dark:text-[#ffffff] text-[#787878]">
              Follow us on 
            </h1>
            <div className="flex justify-center items-center gap-5 lg:gap-2">
              <span className=" flex justify-center items-center rounded-full h-10  w-10">
                <img
                  src="/linkedin.svg"
                  alt="chat"
                  className=" h-8 w-8 object-cover "
                />
              </span>
              <span className="flex justify-center items-center rounded-full h-10  w-10">
                <img
                  src="/x.svg"
                  alt="chat"
                  className=" h-7 w-7 object-cover "
                />
              </span>
              <span className=" flex justify-center items-center rounded-full h-10  w-10">
                <img
                  src="https://www.svgrepo.com/show/448224/facebook.svg"
                  alt="chat"
                  className=" h-8 w-8 object-cover "
                />
              </span>
              <span className=" flex justify-center items-center rounded-full h-10  w-10">
                <img
                  src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg"
                  alt="chat"
                  className=" h-6 w-6 object-cover "
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#010200] dark:bg-[#141414] flex justify-between items-center h-16">
        <div className="flex flex-col max-w-7xl mx-auto w-full lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="flex small items-center gap-2 lg:gap-2">
            <h1 className="text-center">
              <span className="text-[#989999] text-sm lg:text-[15px]">
                &copy; 2025 VRT Management.
              </span>
            </h1>
            <span className="text-[#0c0c0c] block lg:hidden">|</span>
            <h1 className="text-center">
              <span className="text-[#989999] text-sm lg:text-[15px]">
                All Rights Reserved.
              </span>
            </h1>
          </div>

          {/* Center Section */}
          {/* <div className="">
      <h1 className="gsans text-2xl font-semibold  text-[#cfcfcf]">
        Developing since 2020
      </h1>
    </div> */}

          {/* Right Section */}
          <div className="flex small items-center gap-2 lg:gap-6">
            <h1 className="text-center">
              <span className="text-[#989999] text-sm lg:text-[15px]">
                Privacy Policy
              </span>
            </h1>
            <span className="text-[#989999] block lg:hidden">|</span>
            <h1 className="text-center">
              <span className="text-[#989999] text-sm lg:text-[15px]">
                Terms and Conditions
              </span>
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
