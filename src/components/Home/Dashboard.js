import React from "react";
import DashboardBackground from "../../assets/dashboard.png";
import DashboardImage from "../../assets/dashboardimage.png";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";

function Dashboard() {
  return (
    <div
      className="mt-48  grid grid-cols-2 py-24 gap-8"
      style={{ backgroundImage: `url(${DashboardBackground})` }}
    >
      <img src={DashboardImage} alt="dashboard" />
      <div className=" flex flex-col justify-center">
        <h3 className="font-medium text-[#145858]">Dashboard</h3>
        <h2 className="font-grotesk font-bold text-4xl text-[#0F1111] w-[450px]">
          Track all your team progress from one place.
        </h2>
        <p className="mt-6 mb-10 w-[540px] text-[#1E2121]">
          See how you are doing in real time. Help everyone understand how they
          are performing against their assigned tasks and find room for
          improvement. Say goodbye to messy and time consuming reporting. With
          ProjectMaster,get real time intelligence instantly on all your
          projects anytime, anywhere.
        </p>
        <h2 className="inline-flex items-center font-medium text-[#145858]">
          Get Started
          <span className="ml-3 hover:rotate-45">
            <ArrowRight />
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Dashboard;
