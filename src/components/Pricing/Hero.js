import React from "react";
import { ReactComponent as Toggles } from "../../assets/toggles.svg";
import { ReactComponent as Mark } from "../../assets/mark.svg";
import Footer from "../Home/Footer";
import Companies from "../../assets/Companies.png";

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mt-14">
        <h2 className="font-grotesk font-bold text-6xl text-[#0F1111] text-center w-[75%] leading-[72px]">
          Turbo charge your team workflow. Start for{" "}
          <span className="text-green">free.</span>
        </h2>
        <div className="flex items-center mt-6">
          <h6 className="mr-8 text-xl text-[#1E2121]">Monthly</h6>
          <Toggles />
          <h6 className="ml-8 text-[#1E2121]">Annually (Save 20%)</h6>
        </div>
        <div className="flex items-center justify-center mt-40">
          <article className="flex flex-col mr-6 items-center w-[16rem] pb-4 rounded-xl shadow-md shadow-[#979797] drop-shadow-sm">
            <h2 className="font-grotesk font-bold text-[24px] text-center w-full pt-4 pb-2 text-green bg-grey flex items-center justify-center w-full rounded-t-[10px]">
              Starter
            </h2>
            <h2 className="mt-10 font-grotesk font-bold text-4xl text-center">
              Free{" "}
              <span className="block font-normal text-[#191C1C] text-xl">
                Forever
              </span>
            </h2>
            <p className="mt-6 text-center w-[230px]">
              For small teams, startups, freelancers, and students who need to
              organize their tasks
            </p>
            <button className="my-6 bg-grey text-green hover:bg-green hover:text-white font-medium py-4 px-10 rounded-lg">
              Get Started
            </button>
            <hr className="w-[90%] text-[#D2D3D3]" />
            <h4 className="mt-[28px] text-lg text-[#191C1C]">
              Included in Starter:
            </h4>
            <ul className="mt-4">
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Up to 5 users
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Unlimited project boards
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Backlog and basic roadmaps
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Reporting and insights
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                2 GB of storage
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Community support
              </li>
            </ul>
          </article>
          <article className="flex flex-col mr-6 items-center w-[16rem] pb-4 rounded-xl shadow-md shadow-[#979797] drop-shadow-sm">
            <h3 className="font-grotesk font-bold text-[24px] text-green bg-grey text-center w-full pt-4 pb-2 rounded-t-[10px]">
              Team
            </h3>
            <h2 className="mt-10 font-grotesk font-bold text-4xl text-center">
              $5{" "}
              <span className="block font-normal text-[#191C1C] text-xl">
                User/month
              </span>
            </h2>
            <p className="mt-6 text-center w-[230px]">
              For teams that need to manage more work and scale collaboration.
            </p>
            <button className="my-6 bg-grey text-green hover:bg-green hover:text-white font-medium py-4 px-10 rounded-lg">
              Start Trial
            </button>
            <hr className="w-[90%] text-[#D2D3D3]" />
            <h4 className="mt-[28px] text-lg text-[#191C1C]">
              Everything from Starter +:
            </h4>
            <ul className="mt-4">
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Up to 20,000 users
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                User roles & permissions
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Audit logs
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Data residency
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                250 GB of storage
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Business hour support
              </li>
            </ul>
          </article>
          <article className="flex flex-col mr-6 items-center w-[16rem] pb-2 rounded-xl shadow-md shadow-[#979797] drop-shadow-sm translate-y-[-1.3rem]">
            <h4 className="text-xl py-2 w-full text-center text-white bg-green rounded-t-[10px]">
              Most Popular
            </h4>
            <h3 className="font-grotesk font-bold text-[24px] text-green bg-grey text-center w-full pt-4 pb-2">
              Business
            </h3>
            <h2 className="mt-10 font-grotesk font-bold text-4xl text-center">
              $12{" "}
              <span className="block font-normal text-[#191C1C] text-xl">
                User/month
              </span>
            </h2>
            <p className="mt-6 text-center w-[230px]">
              For organizations wanting to drive alignment across multiple teams
              and scale business processes.
            </p>
            <button className="my-6 bg-grey text-green hover:bg-green hover:text-white font-medium py-4 px-10 rounded-lg">
              Start Trial
            </button>
            <hr className="w-[90%] text-[#D2D3D3]" />
            <h4 className="mt-[28px] text-lg text-[#191C1C]">
              Everything from Team +:
            </h4>
            <ul className="mt-4">
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Advanced roadmaps
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Sandbox & release tracks
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Project archiving
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Guaranteed uptime SLA
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Unlimited storage
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                24/7 Premium support
              </li>
            </ul>
          </article>
          <article className="flex flex-col items-center w-[16.5rem] pb-4 rounded-xl shadow-md shadow-[#979797] drop-shadow-sm">
            <h3 className="font-grotesk font-bold text-[24px] text-green bg-grey w-full text-center pt-4 pb-2 rounded-t-[10px]">
              Enteprise
            </h3>
            <h2 className="mt-10 font-grotesk font-bold text-4xl text-center">
              $20{" "}
              <span className="block font-normal text-[#191C1C] text-xl">
                User/month
              </span>
            </h2>
            <p className="mt-6 text-center w-[260px]">
              For organizations that need enterprise level security, control,
              and support to manage complex processes
            </p>
            <button className="my-6 bg-grey text-green hover:bg-green hover:text-white font-medium py-4 px-10 rounded-lg">
              Start Trial
            </button>
            <hr className="w-[90%] text-[#D2D3D3]" />
            <h4 className="mt-[28px] text-lg text-[#191C1C]">
              Everything from Business +:
            </h4>
            <ul className="my-4 pb-14">
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Unlimited sites
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Centralized security controls
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                Centralized user subscriptions
              </li>
              <li className="flex items-center mb-4">
                <span className="mr-4">
                  <Mark />
                </span>
                24/7 Enteprise support
              </li>
            </ul>
          </article>
        </div>
        <button className="mt-16 bg-grey text-green hover:bg-green hover:text-white font-medium py-4 px-10 rounded-lg">
          Show Comparison table
        </button>
        <h2 className="mt-32 mb-12 font-grotesk font-bold text-[48px]">
          Enhancing Workflow Automation at
        </h2>
        <img src={Companies} alt="" />
        <div className="bg-green w-[80%] py-16 mt-60 rounded-xl flex flex-col items-center mx-auto">
          <h2 className="font-grotesk font-bold text-white text-[48px] text-center w-[900px]">
            Build Products people love. Together with your team.
          </h2>
          <button className="mt-10 bg-[#D0DEDE] hover:bg-white rounded-md font-medium text-green py-[15px] px-[45px]">
            Get Started for free
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Hero;
