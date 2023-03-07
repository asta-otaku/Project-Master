import React from "react";
import Companies from "../../assets/Companies.png";
import { ReactComponent as Group44 } from "../../assets/group44.svg";
import { ReactComponent as Group45 } from "../../assets/group45.svg";
import { ReactComponent as Group46 } from "../../assets/group46.svg";
import { ReactComponent as Group47 } from "../../assets/group47.svg";

function Product() {
  return (
    <div className="mt-24">
      <h3 className="font-grotesk font-bold text-[28px] text-[#1E2121] text-center mb-12">
        Trusted by 10,000+ users worldwide
      </h3>
      <img src={Companies} alt="sponsors" />
      <div className="grid grid-cols-10 w-[85%] mx-auto mt-36 gap-8">
        <div className="col-span-4">
          <h6 className="font-medium text-[#145858]">Perks & Benefits</h6>
          <h4 className="font-grotesk font-bold text-4xl text-[#0F1111] w-[400px] mb-6">
            Why Teams Choose ProjectMaster
          </h4>
          <p className="w-[420px] text-[#1E2121] mb-8">
            With ProjectMaster, your project and team success is our priority.
            What better way to ensuring maximum output while building a project
            that the public not only love but use by efficiently managing it.{" "}
          </p>
          <button className="bg-green text-white hover:bg-grey hover:text-green font-medium py-4 px-10 rounded-lg">
            Get Started for free
          </button>
        </div>
        <div className="col-span-3">
          <div className="p-6 pt-4 bg-[#FFFFFF] rounded-xl shadow-md shadow-[#979797] drop-shadow-sm">
            <Group44 />
            <h4 className="font-grotesk font-bold text-[28px] text-[#0F1111] w-[300px] my-4">
              Better Collaboration and Communication
            </h4>
            <p className="w-[270px] text-[#1E2121] mb-8">
              Keep your team members in the loop about the smallest of project
              plans and details. Delegate tasks, tag members in comments and
              more.
            </p>
          </div>
          <div className="p-4 pr-6 bg-[#FFFFFF] mt-8 rounded-xl shadow-md shadow-[#979797] drop-shadow-sm">
            <Group45 />
            <h4 className="font-grotesk font-bold text-[28px] text-[#0F1111] w-[300px] my-4">
              Easy Project Planning and Scheduling
            </h4>
            <p className="w-[275px] text-[#1E2121] mb-8">
              Allocating resources, setting out and meeting deliverables,
              setting up deadlines, identifying dependencies can be conveniently
              set up in no time.
            </p>
          </div>
        </div>
        <div className="col-span-3 translate-y-20">
          <div className="pl-4 pr-6 pt-6 pb-14 bg-[#FFFFFF] rounded-xl shadow-md shadow-[#979797] drop-shadow-sm">
            <Group46 />
            <h4 className="font-grotesk font-bold text-[28px] text-[#0F1111] w-[300px] my-4">
              Boosted Productivity
            </h4>
            <p className="w-[270px] text-[#1E2121] mb-8">
              Since all the important details can be found in one place, teams
              decision making process is optimized and more can be done faster
              and better.
            </p>
          </div>
          <div className="p-6 pt-4 bg-[#FFFFFF] mt-8 rounded-xl shadow-md shadow-[#979797] drop-shadow-sm">
            <Group47 />
            <h4 className="font-grotesk font-bold text-[28px] text-[#0F1111] w-[300px] my-4">
              Better Budget Management
            </h4>
            <p className="w-[275px] text-[#1E2121] mb-8">
              ProjectMaster help teams manage every resource you have, keep
              track of everything, stay within budget and save time spent on
              each project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
