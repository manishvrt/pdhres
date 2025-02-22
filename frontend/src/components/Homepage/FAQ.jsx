"use client";
import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import Button from "../../components/Reusables/Button";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleCard = (index) => {
    const contentRef = contentRefs.current[index];

    if (contentRef) {
      if (openIndex === index) {
        // Close the currently open card
        gsap.to(contentRef, {
          height: 0,
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
        });
        setOpenIndex(null);
      } else {
        // Close any previously open card
        if (openIndex !== null) {
          const previousContentRef = contentRefs.current[openIndex];
          gsap.to(previousContentRef, {
            height: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power1.out",
          });
        }

        // Open the clicked card
        contentRef.style.height = "auto";
        const height = contentRef.scrollHeight; // Get the full height for animation
        contentRef.style.height = 0; // Reset height for animation

        gsap.to(contentRef, {
          height,
          opacity: 1,
          duration: 0.2,
          ease: "power1.out",
        });
        setOpenIndex(index);
      }
    }
  };

  return (
    <div className=" h-auto">
      <div className=" gap-6 max-w-7xl mx-auto">
        <div className="mt-20 space-y-2 px-3 text-center">
          <h1 className="lg:text-6xl text-4xl font-bold gsans text-[#0c0c0c] md:text-6xl ">
            Frequently Asked Questions
          </h1>
          <p className=" small px-3  lg:text-xl text-sm pt-3 text-gray-800 ">
          Get your answers and insights by exploring our FAQ section!
          </p>
        </div>
        <div className="lg:col-span-3 mt-6 px-4 overflow-y-auto">
          <div className="flex flex-col gap-4 items-end justify-start  lg:mt-20 mb-20">
            {faqData.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className="w-full p-6 flex max-w-5xl mx-auto flex-col cursor-pointer bg-[#ececec]/60  h-auto rounded-3xl"
              >
                <div className="flex justify-between items-center ">
                  <h1 className="small text-md lg:text-xl  text-[#0c0c0c]">
                    {faq.question}
                  </h1>
                  <span
                    className={`bg-[#0c0c0c] hidden lg:block 
                      lg:flex justify-center items-center h-8 w-8 rounded-full transition-transform duration-500 ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                  >
                    <img
                      src="/warrow.svg"
                      alt="arrow"
                      className={`h-4 w-4 transition-transform duration-500 ${
                        openIndex === index ? "rotate-45" : "-rotate-45"
                      }`}
                    />
                  </span>
                </div>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden"
                  style={{ height: 0, opacity: 0 }}
                >
                  <p className="mt-4 small  text-md lg:text-lg text-zinc-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "Why is this research being conducted now?",
    answer:
      "With the dramatic changes in the business landscape over the past 5-10 years, we are updating our understanding of entrepreneurial success traits for the modern era.",
  },
  {
    question: "What makes the Tri Metrix HD assessment valuable?",
    answer:
      "This comprehensive tool analyzes your behaviors, driving forces, and competencies, providing actionable insights for business growth and leadership development.",
  },
  {
    question: "How is the workshop structured?",
    answer:
      "The workshop consists of two 3-hour online sessions, typically one week apart, allowing for optimal learning and implementation.",
  },
  {
    question: "What happens after I qualify?",
    answer:
      "You will receive access to the TRI-METRIX assessment, followed by workshop enrollment and your personalized development resources.",
  },
  {
    question: "Will my responses and assessment results remain confidential?",
    answer:
      "Absolutely. All data will be anonymized and used solely for research purposes in line with ethical guidelines.",
  },
  {
    question: "Is there a fee for participating in the research?",
    answer:
      "No, participation in the research and access to the Entrepreneur Edge Program is completely complimentary for qualified participants.",
  },
];


export default FAQ;
