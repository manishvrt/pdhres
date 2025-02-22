"use client";
import React from "react";
import Button from "../Reusables/Button";

import SubscribeToNewsLetter from "./SubscribeToNewsLetter";
import Link from "next/link";

const Footer = () => {
  const backgroundImage = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1642270057580-1b5d62982bea?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    backgroundSize: "fill",
  };

  const scrollToSurvey = () => {
    const nextSection = document.getElementById("Solutions");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" h-auto lg:py-0 bg-[#ffffff]   ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 m-4  lg:m-0 lg:grid-cols-5 items-center gap-6">
          <div className="flex lg:col-span-2 flex-col">
            <div className="flex mt-12 lg:mt-16 flex-col">
              <h1 className="gsans font-semibold text-4xl lg:text-5xl  text-[#0c0c0c]">
                Let’s talk about
                <br />
                your vision
              </h1>
              <div className="flex mt-8 items-center gap-8">
                <a
                  href="https://vrtmanagementgroup.com/#letstalk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    customImage="/rarrow.svg"
                    text="Get in touch"
                    customImageSize={{ width: "30px", height: "30px" }}
                    className="w-fit h-10 text-[#ffffff] bg-[#ff0000] px-4 "
                  />
                </a>
              </div>
            </div>
            <div className="lg:mt-16 mt-10 flex flex-col items-start justify-end">
              <h2 className="text-[#989999]  uppercase small text-sm mb-8">
                Get in touch
              </h2>

              <div className="lg:text-lg flex items-center gap-4 mb-4  text-[#0c0c0c] text-lg small">
                <img
                  src="https://www.svgrepo.com/show/488920/email.svg"
                  alt="email"
                  className="lg:h-6 w-5 h-5 lg:w-6"
                />
                <a
                  href="mailto:coachraj@vrt9.com"
                  className="text-inherit hover:underline"
                >
                  coachrajesh@vrt9.com
                </a>
              </div>

              <div className="lg:text-lg flex items-center gap-4 mb-4  text-[#0c0c0c] text-lg small">
                <img
                  src="/phone.svg"
                  alt="call"
                  className="lg:h-6 w-5 h-5 lg:w-6"
                />
                <a
                  href="tel:+12033041918"
                  className="text-inherit hover:underline"
                >
                  +1-203-304-1918
                </a>
              </div>

              <div className="lg:text-lg flex items-center gap-4 mb-4  text-[#0c0c0c] text-lg small">
                <img
                  src="https://www.svgrepo.com/show/497239/location.svg"
                  alt="location"
                  className="lg:h-6 w-5 h-5 lg:w-6"
                />
                <a
                  href="https://www.google.com/maps?q=1+Botsford+Hill+Road+PO+BOX+150+Botsford,+CT+06404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit hover:underline"
                >
                  1 Botsford Hill Road PO BOX 150 Botsford, CT 06404
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <SubscribeToNewsLetter />
          </div>
        </div>
        <div className="flex mt-6 mb-8 lg:justify-between lg:flex-row flex-col">
          <div className="flex justify-center items-center gap-8">
            <Link
              href="/"
              className="small  lg:text-[18px] text-[16px]   text-[#787878]"
            >
              Home
            </Link>

            <a
              href="https://vrtmanagementgroup.com/results"
              target="_blank"
              rel="noopener noreferrer"
              className="small   text-[18px]   text-[#787878]"
            >
              Clients
            </a>

            <a
              href="https://vrtmanagementgroup.com/blogs"
              target="_blank"
              rel="noopener noreferrer"
              className="small   text-[18px]   text-[#787878]"
            >
              Blog
            </a>
            <a
              href="https://vrtmanagementgroup.com/who-we-are"
              target="_blank"
              rel="noopener noreferrer"
              className="small   text-[18px]    text-[#787878]"
            >
              About Us
            </a>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-6  justify-center lg:mt-0 mt-6 items-center ">
            <h1 className="small mb-6 lg:mb-0 mt-3 lg:mt-0 lg:text-[17px] text-xs  text-[#787878]">
              Follow us on
            </h1>
            <div className="flex justify-center items-center gap-5 lg:gap-2">
              <a
                href="https://www.linkedin.com/in/rajeshtedla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex justify-center items-center rounded-full h-10 w-10">
                  <img
                    src="/linkedin.svg"
                    alt="chat"
                    className="h-8 w-8 object-cover"
                  />
                </span>
              </a>
              <a
                href="https://www.youtube.com/@vrt-management-group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex justify-center items-center rounded-full h-10  w-10">
                  <img
                    src="https://www.svgrepo.com/show/354592/youtube-icon.svg"
                    alt="chat"
                    className=" h-7 w-7 object-cover "
                  />
                </span>{" "}
              </a>
              <a
                href="https://www.facebook.com/vrtmgmt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className=" flex justify-center items-center rounded-full h-10  w-10">
                  <img
                    src="https://www.svgrepo.com/show/448224/facebook.svg"
                    alt="chat"
                    className=" h-8 w-8 object-cover "
                  />
                </span>
              </a>
              <a
                href="https://www.instagram.com/vrt_management"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className=" flex justify-center items-center rounded-full h-10  w-10">
                  <img
                    src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg"
                    alt="chat"
                    className=" h-6 w-6 object-cover "
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1]  flex justify-center items-center h-16">
        <div className="flex flex-col max-w-7xl mx-auto w-full lg:flex-row items-center justify-center">
          {/* Left Section */}
          <div className="flex small items-center gap-2 lg:gap-2">
            <h1 className="text-center">
              <span className="text-[#0c0c0c]/50 text-sm lg:text-[15px]">
                &copy; 2025 VRT Management.
              </span>
            </h1>
            <span className="text-[#0c0c0c]/50 block lg:hidden">|</span>
            <h1 className="text-center">
              <span className="text-[#0c0c0c]/50 text-sm lg:text-[15px]">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
