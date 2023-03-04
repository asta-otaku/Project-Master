import React from "react";
import { ReactComponent as IntegartionsSvg } from "../../assets/Integrations.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRightWhite.svg";

function Integrations() {
  return (
    <div className="bg-gradient-to-r from-[#114949] to-[#0A2C2C] text-white flex justify-between">
      <div className="self-center ml-24">
        <h4 className="font-medium text-[#F8C03F]">Integrations</h4>
        <h3 className="font-grotesk font-bold text-4xl w-[400px]">
          All your favorite work tools in one place.
        </h3>
        <p className="mt-6 mb-10 w-[600px]">
          Connect all the apps your team use into your workflow. Sync your team
          calendars, messaging apps, cloud storage, and more to keep everything
          in one place. With ProjectMaster, aligning the team’s workflow and
          better manage your projects.
        </p>
        <h2 className="inline-flex items-center font-medium">
          Get Started
          <span className="ml-3 hover:rotate-45">
            <ArrowRight />
          </span>
        </h2>
      </div>

      <IntegartionsSvg />
    </div>
  );
}

export default Integrations;
