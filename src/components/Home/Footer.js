import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Socials } from "../../assets/socials.svg";

function Footer() {
  return (
    <div>
      <div className="flex w-[80%] text-[#1E2121] mx-auto justify-between mt-24 mb-16">
        <div>
          <Logo />
          <h4 className="mt-8 mb-16 w-60 text-xl">
            Become a master. Get work done faster and smarter
          </h4>
          <Socials />
        </div>
        <div>
          <h2 className="font-grotesk font-bold text-[24px] text-[#141616] mb-[19px]">
            Company
          </h2>
          <ul>
            <li className="mb-8">About Us</li>
            <li className="mb-8">How it works</li>
            <li className="mb-8">Pricing</li>
            <li className="mb-8">Features</li>
            <li className="mb-8">Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className="font-grotesk font-bold text-[24px] text-[#141616] mb-[19px]">
            Resources
          </h2>
          <ul>
            <li className="mb-8">FAQ</li>
            <li className="mb-8">Community</li>
            <li className="mb-8">Help Center</li>
            <li className="mb-8">Blog</li>
            <li className="mb-8">Developers</li>
            <li>User guide</li>
          </ul>
        </div>
        <div>
          <h2 className="font-grotesk font-bold text-[24px] text-[#141616] mb-[19px]">
            Features
          </h2>
          <ul>
            <li className="mb-8">Integrations</li>
            <li className="mb-8">Docs</li>
            <li className="mb-8">Kanban Boards</li>
            <li className="mb-8">Automations</li>
            <li className="mb-8">Dashboards</li>
            <li>Mind Maps</li>
          </ul>
        </div>
      </div>
      <hr className="text-[#B4B5B5]" />
      <div className="flex justify-center text-[#1E2121] my-8">
        <p className="mr-16">
          Copyright © ProjectMaster 2022. All rights reserved
        </p>
        <h4 className="mr-8">Terms of Use</h4>
        <h4>Privacy Policy</h4>
      </div>
    </div>
  );
}

export default Footer;
