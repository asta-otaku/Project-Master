import React from "react";
import { ReactComponent as ProjectMaster } from "../../assets/ProjectMasterDashboard.svg";
import { ReactComponent as IconDashboard } from "../../assets/IconDashboard.svg";
import { ReactComponent as IconCalendar } from "../../assets/IconCalendar.svg";
import { ReactComponent as IconChat } from "../../assets/IconChat.svg";
import { ReactComponent as IconHelp } from "../../assets/IconHelp.svg";
import { ReactComponent as IconIntegration } from "../../assets/IconIntegration.svg";
import { ReactComponent as IconLogout } from "../../assets/IconLogout.svg";
import { ReactComponent as IconProject } from "../../assets/IconProject.svg";
import { ReactComponent as IconSetting } from "../../assets/IconSetting.svg";
import { ReactComponent as IconTask } from "../../assets/IconTask.svg";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

function Sidebar() {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      className="bg-grey h-[65rem] font-medium flex flex-col w-[240px] mr-10"
    >
      <ProjectMaster className="my-10 mx-auto" />
      <ul className="my-4 cursor-pointer">
        <li className="flex py-2 hover:border-r-[3px] border-green pl-10 hover:text-green">
          <IconDashboard className="mr-2" /> Dashboard
        </li>
        <li className="flex py-2 hover:border-r-[3px] border-green pl-10 hover:text-green">
          <IconCalendar className="mr-3" /> My Calendar
        </li>
        <li className="flex py-2 hover:border-r-[3px] border-green pl-10 hover:text-green">
          <IconTask className="mr-2" /> My Tasks
        </li>
        <li className="flex py-2 hover:border-r-[3px] border-green pl-10 hover:text-green">
          <IconChat className="mr-2" /> Messages
        </li>
      </ul>
      <hr className="text-[#979797]" />
      <h4 className="mt-12 flex py-2 hover:border-r-[3px] border-green pl-10 hover:text-green cursor-pointer">
        <IconProject className="mr-2" />
        My projects
        <span className="ml-[30%]">+</span>
      </h4>
      <ul className="cursor-pointer">
        <li className="flex items-center py-2 hover:border-r-[3px] border-green pl-10 hover:text-green">
          <span className="rounded-full mr-2 w-4 h-4 bg-green" /> LifeShare
        </li>
        <li className="flex items-center py-2 hover:border-r-[3px] border-green pl-10 hover:text-green">
          <span className="rounded-full mr-2 w-4 h-4 bg-[#FACC65]" />{" "}
          PrintStudio
        </li>
      </ul>
      <ul className="mt-8 cursor-pointer">
        <li className="flex py-2 hover:border-r-[3px] border-green pl-10 hover:text-green">
          <IconIntegration className="mr-2" /> Integrations
        </li>
        <li className="flex py-2 hover:border-r-[3px] border-green pl-10 hover:text-green">
          <IconSetting className="mr-2" /> Settings
        </li>
        <li className="flex py-2 hover:border-r-[3px] border-green pl-10 hover:text-green">
          <IconHelp className="mr-2" /> Help & Support
        </li>
      </ul>
      <hr className="text-[#979797] mt-5" />
      <div
        className="mt-4 flex py-2 hover:border-r-[3px] border-green pl-10 text-[#979797] hover:text-green cursor-pointer"
        onClick={() => {
          if (isAuthenticated) {
            logout({ logoutParams: { returnTo: window.location.origin } });
          }
        }}
      >
        <IconLogout className="mr-2" /> Log Out
      </div>
    </motion.nav>
  );
}

export default Sidebar;
