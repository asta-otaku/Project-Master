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

function Sidebar() {
  return (
    <div className="bg-grey flex flex-col items-center">
      <ProjectMaster />
      <div>
        <ul className="text-green font-medium">
          <li className="flex">
            <IconDashboard /> Dashboard
          </li>
          <li>
            <IconCalendar /> My Calendar
          </li>
          <li>
            <IconTask /> My Tasks
          </li>
          <IconChat /> Messages
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;
