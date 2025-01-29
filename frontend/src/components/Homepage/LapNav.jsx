"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Button from "../Reusables/Button";
import Link from "next/link";

const DropdownItem = ({ title }) => (
  <div className="w-full h-auto py-4 flex justify-start p-2 items-center rounded-3xl bg-[#ffffff] border border-zinc-200">
    <div className="flex gap-4 justify-center items-center ml-4">
      <span className="w-3 rounded-full bg-[#ff0000] h-3"></span>
      <h1 className="small text-[#0c0c0c] text-lg">{title}</h1>
    </div>
  </div>
);

const Navbar = () => {
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const dropdownRefs = {
    solutions: useRef(null),
    resources: useRef(null),
    aboutUs: useRef(null),
  };
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCurrentDropdown(dropdown);
    gsap.fromTo(
      dropdownRefs[dropdown].current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.3 }
    );
  };

  const handleMouseLeave = (dropdown) => {
    timeoutRef.current = setTimeout(() => {
      setCurrentDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCurrentDropdown(dropdown);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setCurrentDropdown(null);
    }, 200);
  };

  const handleClickOutside = (event) => {
    const dropdownKeys = Object.keys(dropdownRefs);
    const isOutside = dropdownKeys.every(
      (key) => !dropdownRefs[key].current?.contains(event.target)
    );

    if (isOutside) {
      setCurrentDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const dropdownContent = {
    solutions: (
      <div
        ref={dropdownRefs.solutions}
        className="absolute  left-1/2 transform z-10 -translate-x-1/2 mt-6 w-[50svw] p-5 bg-[#ffffff] bg-opacity-45 backdrop-blur-xl border border-zinc-200 rounded-3xl"
        onMouseEnter={() => handleDropdownMouseEnter("solutions")}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <h1 className="text-lg text-zinc-600">Solutions</h1>
        <div className="grid mt-4 grid-cols-2 gap-4">
          <a
            href="https://vrtmanagementgroup.com/entrepreneur-growth-alliance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownItem title="Entrepreneur Growth Alliance™" />
          </a>
          <a
            href="https://vrtmanagementgroup.com/entrepreneur-edge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownItem title="Entrepreneur's EDGE™" />
          </a>
          <a
            href="https://vrtmanagementgroup.com/7-stages-of-growth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownItem title="Business Stages of Growth" />
          </a>
        </div>
      </div>
    ),
    resources: (
      <div
        ref={dropdownRefs.resources}
        className="absolute left-1/2 transform z-10 -translate-x-1/2 mt-6 w-[50svw] p-5 bg-[#ffffff] bg-opacity-45 backdrop-blur-xl border border-zinc-200 rounded-3xl"
        onMouseEnter={() => handleDropdownMouseEnter("resources")}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <h1 className="text-lg text-zinc-600">Resources</h1>
        <div className="grid mt-4 grid-cols-3 gap-4">
          <a
            href="https://www.youtube.com/@vrt-management-group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownItem title="Videos" />
          </a>
          <a
            href="https://vrtpodcast.buzzsprout.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownItem title="Podcasts" />
          </a>
          <a
            href="https://vrtmanagementgroup.com/blogs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownItem title="Blog" />
          </a>
        </div>
      </div>
    ),
    aboutUs: (
      <div
        ref={dropdownRefs.aboutUs}
        className="absolute left-1/2 transform z-10 -translate-x-1/2 mt-6 w-[50svw] p-5 bg-[#ffffff] bg-opacity-45 backdrop-blur-xl border border-zinc-200 rounded-3xl"
        onMouseEnter={() => handleDropdownMouseEnter("aboutUs")}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <h1 className="text-lg text-zinc-600">About Us</h1>
        <div className="grid mt-4 grid-cols-3 gap-4">
          <a
            href="https://vrtmanagementgroup.com/who-we-are"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownItem title="Who We Are" />
          </a>
          <a
            href="https://vrtmanagementgroup.com/our-team-of-consultants"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownItem title="Our Team" />
          </a>
          
        </div>
      </div>
    ),
  };

  return (
    <div className="relative hidden lg:block z-10 max-w-7xl mx-auto">
      <div className="flex absolute top-0 left-0 right-0 max-w-7xl bg-transparent justify-between items-center h-24">
        <Link
          href="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <img
            src="https://vrtpage.vercel.app/vrtl.png"
            alt="logo"
            className="w-full h-16"
          />
        </Link>
        <ul className="hidden small md:flex space-x-8 text-gray-800">
          <li>
            <Link
              href="/"
              className="text-blue-500 font-medium hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          {["solutions", "resources", "aboutUs"].map((item) => (
            <li
              key={item}
              ref={dropdownRefs[item]}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={() => handleMouseLeave(item)}
            >
              <button className="hover:text-blue-500">
                {item.charAt(0).toUpperCase() +
                  item.slice(1).replace(/([A-Z])/g, " $1")}
              </button>
              {currentDropdown === item && dropdownContent[item]}
            </li>
          ))}
        </ul>
        <div>
          <a
            href="https://vrtmanagementgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text="Talk to Rajesh Tedla"
              className="bg-[#ff0000] small gap-2 flex justify-center items-center text-[#ffffff] h-12 px-5 rounded-[35px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
