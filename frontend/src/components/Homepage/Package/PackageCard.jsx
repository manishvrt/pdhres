import React from "react";

const ServiceCard = ({ imgSrc, title, desc, trait1, trait2, trait3,desc2,desc3,traitheading1,traitheading2,traitheading3 }) => {
  return (
    <div className="group">
      <div className="flex bg-[#e7e7e7]  bg-opacity-35 backdrop-blur-xl flex-col justify-between rounded-[35px] p-6 lg:p-10 h-auto lg:h-auto overflow-hidden transition ease-out active:opacity-75">
        <div>
          <img
            src={imgSrc}
            alt="service"
            className="lg:w-20 lg:h-20 w-16 h-16 group-hover:scale-110 duration-700 transition-all object-cover"
          />
          <h1 className="text-[#0c0c0c] text-3xl lg:text-4xl font-semibold gsans mt-6">
            {title}
          </h1>
        </div>

        <p className="small text-[15px] mt-6 lg:text-lg tracking-tight">
          {desc}
        </p>
        <p className="small text-[15px] mt-6 lg:text-lg tracking-tight">
          {desc2}
        </p>
        <p className="small text-[15px] mt-6 lg:text-lg tracking-tight">
          {desc3}
        </p>

        {/* Conditional Rendering for Traits */}
        {trait1 && (
          <div className="flex mt-10 gap-4 justify-start items-center">
            <img src="/check.svg" alt="check" className="w-5 h-5" />
            <h1 className="lg:text-lg text-[15px] text-[#0c0c0c] small">
              <span className="font-semibold tracking-wide">{traitheading1}</span>{trait1}
            </h1>
          </div>
        )}
        {trait2 && (
          <div className="flex mt-4 gap-4 justify-start items-center">
            <img src="/check.svg" alt="check" className="w-5 h-5" />
            <h1 className="lg:text-lg text-[15px] text-[#0c0c0c] small">
            <span className="font-semibold tracking-wide">{traitheading2}</span>{trait2}
            </h1>
          </div>
        )}
        {trait3 && (
          <div className="flex mt-4 gap-4 justify-start items-center">
            <img src="/check.svg" alt="check" className="w-5 h-5" />
            <h1 className="lg:text-lg text-[15px] text-[#0c0c0c] small">
            <span className="font-semibold tracking-wide">{traitheading3}</span>{trait3}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
