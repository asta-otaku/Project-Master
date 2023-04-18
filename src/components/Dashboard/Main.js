import React from "react";
import Navbar from "./Navbar";
import { ReactComponent as Group31 } from "../../assets/Group 31.svg";
import { ReactComponent as LifeCard } from "../../assets/LifeCard.svg";
import { ReactComponent as PrintCard } from "../../assets/PrintCard.svg";
import { ReactComponent as TaskOverview } from "../../assets/TaskOverview.svg";
import { ReactComponent as TaskPerformance } from "../../assets/TaskPerformance.svg";
import { ReactComponent as OverallPerformance } from "../../assets/OverallProgress.svg";
import { ReactComponent as Tasks } from "../../assets/Tasks.svg";
import { ReactComponent as Jemimah } from "../../assets/Jemimah.svg";
import { ReactComponent as Clint } from "../../assets/Clint.svg";
import { ReactComponent as Uri } from "../../assets/Uri.svg";
import { ReactComponent as Mckay } from "../../assets/Mckay.svg";
import { motion } from "framer-motion";

function Main() {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 grid grid-cols-9 gap-4"
      >
        <div className="col-span-6">
          <div className="p-4 bg-[#FFFFFF] rounded-xl shadow-md shadow-[#979797] drop-shadow-sm">
            <div className="flex justify-between">
              <h2 className="font-grotesk font-bold text-[24px] text-[#0F1111]">
                My Projects
              </h2>
              <Group31 />
            </div>
            <div className="mt-5 flex justify-between">
              <LifeCard className="mr-4" />
              <PrintCard />
            </div>
          </div>
          <TaskOverview className="mt-8 w-[99%] mx-auto" />
          <TaskPerformance className="my-8 w-[99%] mx-auto" />
        </div>
        <div className="col-span-3">
          <OverallPerformance className="" />
          <Tasks className="mt-8 " />
          <div className="p-4 mt-8 bg-[#FFFFFF] rounded-xl shadow-md shadow-[#979797] drop-shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-grotesk font-bold text-[24px] leading-8">
                Activity Feed
              </h3>
              <h3 className="text-[24px]">...</h3>
            </div>
            <div className="mt-4">
              <Jemimah />
              <Clint />
              <Uri />
              <Mckay />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Main;
