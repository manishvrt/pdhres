import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "./testimonialData";
const Testimonial = () => {
  return (
    <div>
      <div className="bg-[#fafafa] pb-20">
        <div className="max-w-7xl mx-auto">
          <div className=" pt-20">
            <div className=" text-gray-600 ">
              <div className="pb-16 space-y-2 px-3 text-center">
                <h2 className="lg:text-6xl text-4xl font-bold gsans text-[#0c0c0c] md:text-6xl ">
                  Stories of Transformation
                </h2>
                <p className=" small  lg:text-xl text-sm pt-3 text-gray-800 ">
                  Hear from entrepreneurs who’ve benefited from the Entrepreneur
                  Edge<sup>TM</sup> Program
                </p>
              </div>
              <div className="grid px-2 lg:px-12 gap-4 lg:grid-cols-2 ">
                {testimonialData.map((testimonial, index) => (
                  <TestimonialCard
                    id={testimonial.id}
                    key={index}
                    description={testimonial.description}
                    name={testimonial.name}
                    post={testimonial.post}
                    rating={testimonial.rating}
                    imgSrc={testimonial.imgSrc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
