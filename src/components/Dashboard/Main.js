import React from "react";
import Navbar from "./Navbar";
import { ReactComponent as Group31 } from "../../assets/Group 31.svg";
import { ReactComponent as LifeCard } from "../../assets/LifeCard.svg";
import { ReactComponent as PrintCard } from "../../assets/PrintCard.svg";

function Main() {
  return (
    <div>
      <Navbar />
      <div className="mt-10 grid grid-cols-9 gap-4">
        <div className="col-span-6">
          <div className="p-4 bg-[#FFFFFF] rounded-xl shadow-md shadow-[#979797] drop-shadow-sm">
            <div className="flex justify-between">
              <h2 className="font-grotesk font-bold text-[24px] text-[#0F1111]">
                My Projects
              </h2>
              <Group31 />
            </div>
            <div className="mt-5 flex justify-between">
              <LifeCard />
              <PrintCard />
            </div>
          </div>
          <PrintCard />
        </div>
        <div className="col-span-3">Tough lid=fe</div>
      </div>
    </div>
  );
}

export default Main;
