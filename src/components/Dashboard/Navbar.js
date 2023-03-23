import React from "react";
import { ReactComponent as IconSearch } from "../../assets/IconSearch.svg";
import { ReactComponent as IconPerson } from "../../assets/IconPerson.svg";
import { ReactComponent as IconBell } from "../../assets/IconBell.svg";

function Navbar() {
  return (
    <div className="mt-6">
      <div className="flex items-center">
        <div className="mr-[72px]">
          <h4 className="font-grotesk font-bold text-[24px] leading-8">
            Welcome back, Celia <br />
            <span className="font-jost font-normal text-[12.8px]">
              It’s another great day to be worldclass 👊🏿
            </span>
          </h4>
        </div>
        <div className="flex items-center py-3 pl-4 border border-[#B1C7C7] rounded mr-24">
          <IconSearch className="mr-2" />
          <input
            placeholder="Search for tasks, projects..."
            className="w-[300px] border-none stroke-none outline-none"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex mr-40">
            <IconPerson className="mr-4" />
            <h4 className="font-medium text-[#191C1C] leading-6">
              Temitope Celia
              <br />
              <span className="font-normal text-[12.8px]">
                Product Designer
              </span>
            </h4>
          </div>
          <IconBell />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
