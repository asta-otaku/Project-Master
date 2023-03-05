import React from "react";
import { ReactComponent as RedStar } from "../../assets/redStar.svg";
import { ReactComponent as YellowStar } from "../../assets/yellowStar.svg";
import { ReactComponent as GreenStar } from "../../assets/greenStar.svg";
import { ReactComponent as BrightGreenStar } from "../../assets/brightGreenStar.svg";
import { ReactComponent as HOP } from "../../assets/HOP.svg";
import { ReactComponent as Cutie } from "../../assets/cutie.svg";
import { ReactComponent as Dude } from "../../assets/dude.svg";
import { ReactComponent as Quote } from "../../assets/startQuote.svg";
import { ReactComponent as Frame } from "../../assets/frame.svg";

function Testimonials() {
  return (
    <div className="mt-40 flex flex-col items-center relative">
      <h6 className="font-medium text-[#145858]">Testimonials</h6>
      <h4 className="font-grotesk font-bold text-[48px] text-[#0F1111] mb-10">
        What Teams who love ProjectMaster Says
      </h4>
      <div>
        <HOP className="mx-auto" />
        <h5 className="mt-4 text-xl text-[#191C1C]">Animashaun Nicholas</h5>
        <h6 className="text-[#444646]">Head of Product, CreditVillage</h6>
      </div>
      <div className="relative my-16">
        <p className="font-grotesk font-bold text-[28px] text-[#1E2121] w-[600px] text-center">
          With ProjectMaster, it has been easier managing my team and personal
          project. I can view all my projects in one place without losing track
          of any
        </p>
        <Quote className="absolute top-[-2rem] left-[-6rem]" />
        <Quote className="absolute bottom-[-2rem] right-[-6rem] rotate-180" />
      </div>
      <Frame />
      <RedStar className="absolute top-24 left-24" />
      <YellowStar className="absolute bottom-[15%] right-[5%]" />
      <BrightGreenStar className="absolute top-40 right-96" />
      <GreenStar className="absolute bottom-[20%] left-[20%]" />
      <Dude className="absolute top-[50%] left-32" />
      <Cutie className="absolute top-36 right-36" />
    </div>
  );
}

export default Testimonials;
