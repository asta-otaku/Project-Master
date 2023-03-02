import React from "react";
import { ReactComponent as Lightning } from "../../assets/lightning.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";
import { ReactComponent as Tiles } from "../../assets/tiles.svg";

function Hero() {
  return (
    <>
      <div className="bg-[#FDF0D1] flex flex-col items-center">
        <h3 className="font-grotesk font-bold text-6xl pt-14 w-[800px] leading-[72px]">
          Better <span className="text-green">Collaborations</span>. Build
          master projects together.{" "}
          <span className="inline-flex">
            <Lightning />
          </span>
        </h3>
        <h4 className="text-[#1E2121] text-2xl my-6 w-[800px] text-center">
          Increase your team’s productivity, meet your project and product
          goals,exceed them and build worldclass products. Collaborate, manage
          your projects. Build it out with ProjectMaster.
        </h4>
        <div>
          <button className="bg-green text-white hover:bg-grey hover:text-green font-medium py-4 px-10 rounded-lg">
            Get Started for free
          </button>
          <h2 className="inline-flex items-center ml-6">
            Learn More
            <span className="ml-3">
              <ArrowRight />
            </span>
          </h2>
        </div>
        <Tiles />
      </div>
    </>
  );
}

export default Hero;
