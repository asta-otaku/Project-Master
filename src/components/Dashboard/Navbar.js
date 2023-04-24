import React from "react";
import { ReactComponent as IconSearch } from "../../assets/IconSearch.svg";
import { ReactComponent as IconPerson } from "../../assets/IconPerson.svg";
import { ReactComponent as IconBell } from "../../assets/IconBell.svg";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user } = useAuth0();
  return (
    <motion.nav
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="mt-6"
    >
      <div className="flex items-center">
        <div className="mr-[72px]">
          <h4 className="font-grotesk font-bold text-[24px] w-[15rem] leading-8">
            Welcome back, {user ? user.name.split(" ")[1] : "Celia"}
            <br />
            <span className="font-jost font-normal text-[12.8px]">
              It’s another great day to be worldclass 👊🏿
            </span>
          </h4>
        </div>
        <div className="flex items-center py-3 pl-4 border border-[#B1C7C7] rounded-lg mr-24">
          <IconSearch className="mr-2" />
          <input
            placeholder="Search for tasks, projects..."
            className="w-[300px] border-none stroke-none outline-none"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex mr-12">
            <IconPerson className="mr-4" />
            <h4 className="font-medium text-[#191C1C] w-[7rem] leading-6">
              {user ? user.name : "Temitope Celia"}
              <br />
              <span className="font-normal text-[12.8px]">
                Product Designer
              </span>
            </h4>
          </div>
          <IconBell className="cursor-pointer" />
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
