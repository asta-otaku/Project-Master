import React from "react";
import { ReactComponent as Toggles } from "../../assets/toggles.svg";
import { ReactComponent as Mark } from "../../assets/mark.svg";
import Companies from "../../assets/Companies.png";

function Hero() {
  return (
    <div className="flex flex-col items-center mt-14">
      <h2 className="font-grotesk font-bold text-6xl text-[#0F1111] text-center w-[75%] leading-[72px]">
        Turbo charge your team workflow. Start for{" "}
        <span className="text-green">free.</span>
      </h2>
      <div className="flex items-center">
        <h6 className="">Monthly</h6>
        <Toggles />
        <h6>Annually (Save 20%)</h6>
      </div>
      <div>
        <article>
          <h3>Starter</h3>
          <h2>
            Free <span>Forever</span>
          </h2>
          <p>
            For small teams, startups, freelancers, and students who need to
            organize their tasks
          </p>
          <button className="bg-grey text-green hover:bg-green hover:text-white font-medium py-4 px-10 rounded-lg">
            Get Started
          </button>
          <hr />
          <h4>Included in Starter:</h4>
          <ul>
            <li>
              <span>
                <Mark />
              </span>
              Up to 5 users
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Unlimited project boards
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Backlog and basic roadmaps
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Reporting and insights
            </li>
            <li>
              <span>
                <Mark />
              </span>
              2 GB of storage
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Community support
            </li>
          </ul>
        </article>
        <article>
          <h3>Team</h3>
          <h2>
            $5 <span>User/month</span>
          </h2>
          <p>
            For teams that need to manage more work and scale collaboration.
          </p>
          <button className="bg-grey text-green hover:bg-green hover:text-white font-medium py-4 px-10 rounded-lg">
            Start Trial
          </button>
          <hr />
          <h4>Everything from Starter +:</h4>
          <ul>
            <li>
              <span>
                <Mark />
              </span>
              Up to 20,000 users
            </li>
            <li>
              <span>
                <Mark />
              </span>
              User roles & permissions
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Audit logs
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Data residency
            </li>
            <li>
              <span>
                <Mark />
              </span>
              250 GB of storage
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Business hour support
            </li>
          </ul>
        </article>
        <article>
          <h4>Most Popular</h4>
          <h3>Business</h3>
          <h2>
            $12 <span>User/month</span>
          </h2>
          <p>
            For organizations wanting to drive alignment across multiple teams
            and scale business processes.
          </p>
          <button className="bg-green text-white hover:bg-white hover:text-green font-medium py-4 px-10 rounded-lg">
            Start Trial
          </button>
          <hr />
          <h4>Everything from Team +:</h4>
          <ul>
            <li>
              <span>
                <Mark />
              </span>
              Advanced roadmaps
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Sandbox & release tracks
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Project archiving
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Guaranteed uptime SLA
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Unlimited storage
            </li>
            <li>
              <span>
                <Mark />
              </span>
              24/7 Premium support
            </li>
          </ul>
        </article>
        <article>
          <h3>Enteprise</h3>
          <h2>
            $20 <span>User/month</span>
          </h2>
          <p>
            For organizations that need enterprise level security, control, and
            support to manage complex processes
          </p>
          <button className="bg-grey text-green hover:bg-green hover:text-white font-medium py-4 px-10 rounded-lg">
            Start Trial
          </button>
          <hr />
          <h4>Everything from Business +:</h4>
          <ul>
            <li>
              <span>
                <Mark />
              </span>
              Unlimited sites
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Centralized security controls
            </li>
            <li>
              <span>
                <Mark />
              </span>
              Centralized user subscriptions
            </li>
            <li>
              <span>
                <Mark />
              </span>
              24/7 Enteprise support
            </li>
          </ul>
        </article>
      </div>
      <button className="bg-grey text-green hover:bg-green hover:text-white font-medium py-4 px-10 rounded-lg">
        Show Comparison table
      </button>
      <h2>Enhancing Workflow Automation at</h2>
      <img src={Companies} alt="sponsors" />
      <div className="bg-green w-[80%] py-16 mt-36 rounded-xl flex flex-col items-center mx-auto">
        <h2 className="font-grotesk font-bold text-white text-[48px] text-center w-[900px]">
          Build Products people love. Together with your team.
        </h2>
        <button className="mt-10 bg-[#D0DEDE] hover:bg-white rounded-md font-medium text-green py-[15px] px-[45px]">
          Get Started for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
