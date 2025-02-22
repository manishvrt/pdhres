"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
// Importing Button might not be necessary unless you're actually using it; you can remove it if not used.

function NavMob() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const [openDropdown, setOpenDropdown] = useState(null); // Store which dropdown is open
  const [selectedMenu, setSelectedMenu] = useState(null); // Store the selected menu index

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index)); // Toggle dropdown
  };

  const handleMenuClick = (index) => {
    if (index === 0) {
      // If Home is clicked, reset selectedMenu
      setSelectedMenu(null);
    } else {
      // Set the clicked menu as selected
      setSelectedMenu(index);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Lock scrolling and animate open
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: "0%",
        ease: "power3.out",
      });
      gsap.fromTo(
        itemsRef.current,
        { y: 50, autoAlpha: 0 },
        {
          duration: 0.5,
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    } else {
      // Unlock scrolling and reset menu position on close
      document.body.style.overflow = "auto";
      gsap.set(menuRef.current, { x: "100%" });
      gsap.set(itemsRef.current, { y: 50, autoAlpha: 0 });
    }
  }, [isOpen]);

  return (
    <div className="max-w-7xl block lg:hidden mx-auto">
      <header
        className={`fixed max-w-7xl ${
          isOpen ? "backdrop-blur-none" : "backdrop-blur"
        } mx-auto top-0 w-full z-50 bg-transparent backdrop-blur text-white p-4 flex items-center justify-between`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <img
            src="/vrtlogo.png"
            alt="logo"
            className="w-full h-12"
          />
        </Link>

        {/* Right side buttons */}
        <div className="flex items-center space-x-2">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full  bg-white border border-zinc-200 transition duration-300"
            onClick={toggleMenu}
          >
            <span className="text-sm  text-[#0c0c0c]">
              ☰
            </span>
          </button>
        </div>

        {/* Fullscreen Menu Overlay */}
        <div
          ref={menuRef}
          className={`fixed inset-0 bg-[#faf9f6]  text-black z-50`}
          style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
          {/* Top bar with logo and close button */}
          <div className="flex justify-between items-center p-4 border-b  border-zinc-200">
            <Link
              href="/"
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <img
                src="/vrtlogo.png"
                alt="logo"
                className="w-full h-12"
              />
            </Link>

            <button
              className="h-10 w-10 rounded-full border  border-zinc-200  text-[#0c0c0c]"
              onClick={toggleMenu}
            >
              ✕
            </button>
          </div>

          {/* Right side navigation links */}
          <div className="px-6 py-10 flex lg:mt-0 flex-col items-start small font-bold justify-end flex-1 space-y-1 lg:space-y-0 text-4xl lg:text-7xl">
            {[
              { name: "Home", path: "/" },
              {
                name: "Solutions",
                path: "/career",
                subItems: [
                  {
                    name: "Entrepreneur Growth Alliance™",
                    path: "https://vrtmanagementgroup.com/entrepreneur-growth-alliance",
                  },
                  {
                    name: "Entrepreneur's EDGE™",
                    path: "https://vrtmanagementgroup.com/entrepreneur-edge",
                  },
                  {
                    name: "Business Stages of Growth",
                    path: "https://vrtmanagementgroup.com/7-stages-of-growth",
                  },
                ],
              },
              {
                name: "Resources",
                path: "/about-us",
                subItems: [
                  {
                    name: "Videos",
                    path: "https://www.youtube.com/@vrt-management-group",
                  },
                  {
                    name: "Podcasts",
                    path: "https://vrtpodcast.buzzsprout.com",
                  },
                  {
                    name: "Blog",
                    path: "https://vrtmanagementgroup.com/blogs",
                  },
                ],
              },
              {
                name: "About Us",
                path: "/contact",
                subItems: [
                  {
                    name: "Who We Are",
                    path: "https://vrtmanagementgroup.com/who-we-are",
                  },
                  {
                    name: "Our Team",
                    path: "https://vrtmanagementgroup.com/our-team-of-consultants",
                  },
                ],
              },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div>
                  <button
                    className={`hover:text-[#ff0000] transition w-full text-left ${
                      selectedMenu !== null && index !== selectedMenu
                        ? "grayscale opacity-20"
                        : ""
                    }`}
                    onClick={() => {
                      handleMenuClick(index);
                      if (item.subItems) toggleDropdown(index);
                      else window.location.href = item.path;
                    }}
                  >
                    {item.name}
                  </button>
                </div>
                {item.subItems && openDropdown === index && (
                  <div className="ml-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-teal-500  transition"
                        onClick={() => handleMenuClick(index)}
                      >
                        <span className="text-lg">{subItem.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Contact details - moved to the bottom */}
          <div className="px-6 mt-4 flex flex-col ">
            <h2 className="text-[#989999]  uppercase small text-sm mb-8">
              Get in touch
            </h2>

            <div className="lg:text-lg flex items-center gap-4 mb-4  text-[#0c0c0c] text-lg small">
              <img
                src="https://www.svgrepo.com/show/488920/email.svg"
                alt="email"
                className="lg:h-6 w-4 h-4 lg:w-6"
              />
              <a
                href="mailto:coachraj@vrt9.com"
                className="text-inherit hover:underline"
              >
                coachraj@vrt9.com
              </a>
            </div>

            <div className="lg:text-lg flex items-center gap-4 mb-4  text-[#0c0c0c] text-lg small">
              <img
                src="/phone.svg"
                alt="call"
                className="lg:h-8 w-5 h-5 lg:w-8"
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
                className="lg:h-6 w-4 h-4 lg:w-6"
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
      </header>
    </div>
  );
}

export default NavMob;
