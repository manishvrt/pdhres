import { useState } from "react";
import Input from "../Reusables/Input";
import Button from "../Reusables/Button";

const SubscribeToNewsLetter = () => {
  const backgroundImage = {
    backgroundImage:
      "url(https://assets.lummi.ai/assets/QmXUCRRXzKw2GAwnLyW8stCfkKBkahMsw72EyGUUPAm36o?auto=format&w=1500)",
    backgroundSize: "cover",
  };

  return (
    <div
      className="relative flex p-5 lg:p-10 my-6 lg:-mt-8 border bg-[#ffffff] border-zinc-200 justify-center items-center rounded-[35px] w-full h-auto lg:h-72 flex-col overflow-hidden"
      style={{
        maskImage: "radial-gradient(circle, white, black)", // Ensures no black/white edges
        WebkitMaskImage: "radial-gradient(circle, white, black)",
      }}
    >
      {/* Background Image */}

      {/* Blurred Overlay */}

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
        <img
          src="/vrtlogo.png"
          alt="subscribe"
          className="lg:w-52  lg:h-28"
        />
        <h1 className="small text-[#0c0c0c] text-sm lg:text-lg">
          VRT Management Group helps build and develop impact players,
          high-performance leaders, and management teams by focusing on
          strategic advisory, consulting, mentoring, training, and coaching to
          strategize, innovate, execute, and accelerate growth.
        </h1>
      </div>
    </div>
  );
};

export default SubscribeToNewsLetter;
