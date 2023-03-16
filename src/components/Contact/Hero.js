import React from "react";
import { ReactComponent as YoungMan } from "../../assets/youngman.svg";

function Hero() {
  return (
    <div className="bg-[#FDF0D1] flex justify-between items-center">
      <div className="mx-auto">
        <h2 className="font-grotesk font-bold text-6xl text-[#0F1111] w-[500px]">
          We had love to hear from you
        </h2>
        <p className="mt-6 text-xl text-[#1E2121] w-[500px]">
          Need support? Have a question? Running into a problem? We're here to
          help you every step of your journey
        </p>
      </div>
      <div className="translate-y-[5rem]">
        <YoungMan />
      </div>
    </div>
  );
}

export default Hero;
