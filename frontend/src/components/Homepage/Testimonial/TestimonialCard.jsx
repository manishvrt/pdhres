import React from "react";

const TestimonialCard = ({ description, name, post }) => {
  // Function to get initials from the name
  const getInitials = (fullName) => {
    const nameParts = fullName.split(" ");
    const initials = nameParts.map((part) => part[0]).join("").toUpperCase();
    return initials.length > 2 ? initials.slice(0, 2) : initials;
  };

  return (
    <div className="bg-white border border-zinc-100 hover:-translate-y-3 duration-500 transition-all p-6 lg:p-10 w-full h-auto rounded-[35px] flex flex-col justify-between">
      {/* Description */}
      <p className="small lg:text-lg text-md text-[#101010] flex-grow overflow-hidden">
        {description}
      </p>

      {/* Bottom Section */}
      <div>
        <div className="border-t border-zinc-200 my-4"></div>
        <div className="flex mt-6 items-center">
          {/* Circular Avatar with Initials */}
          <div className="flex gsans items-center justify-center bg-[#ff0000] text-white w-10 h-10 rounded-full text-sm font-bold">
            {getInitials(name)}
          </div>
          <div className="heading flex text-[#0c0c0c] flex-col ml-4">
            <span className="font-medium text-[#0c0c0c] text-md">{name}</span>
            <span className="small text-zinc-700 text-md">{post}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
