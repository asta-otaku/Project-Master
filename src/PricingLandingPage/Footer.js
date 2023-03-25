import React from "react";
import { ReactComponent as ArrowRight } from "./assets/ArrowRight.svg";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { ReactComponent as FacebookTile } from "./assets/FacebookTile.svg";
import { ReactComponent as YoutubeIcon } from "./assets/u_youtube.svg";
import { ReactComponent as LinkedinICon } from "./assets/u_linkedin.svg";
import { ReactComponent as FacebookIcon } from "./assets/u_facebook-f.svg";
import { ReactComponent as IconSms } from "./assets/IconSms.svg";

function Footer() {
  return (
    <>
      <div className="bg-white border shadow-md shadow-[#A9A9A9] border-white text-[#218465] rounded-[50px] pl-12 md:pl-[130px] pr-8 md:pr-[66px] pt-8 md:pt-[55px]">
        <div className="flex justify-between items-start md:items-center">
          <div className="ml-0 md:ml-[4%]">
            <h2 className="font-montserrat font-bold text-2xl md:text-[28px] lg:text-[32px] w-[200px] md:w-[400px]">
              Control all your advertising from just one platform!
            </h2>
            <button className="mt-4 bg-[#BC6C25] px-5 md:px-10 py-3 text-sm md:text-base text-white rounded-[50px]">
              GET STARTED{" "}
              <ArrowRight className="inline ml-2 hover:rotate-[-45deg]" />
            </button>
          </div>
          <h4 className="uppercase font-montserrat text-[12px] md:text-[15px] mr-0 md:mr-[4%]">
            manage your campground on the go
          </h4>
        </div>
        <hr className="mt-[30px] mb-[55px] w-[92%] mx-auto" />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-[20%] ml-0 md:ml-[4%] align-self-center">
            <Logo />
            <h4 className="mt-5 uppercase w-[200px] font-montserrat text-[12px] ">
              Join our communities of CAMPGROUND OWNERS on
            </h4>
            <FacebookTile />
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-[60%] mr-0 ml-0 md:mr-[2%] md:lg:mr-[4%]">
            <div>
              <h4 className="font-montserrat font-bold">COMPANY</h4>
              <ul className="mt-5 font-montserrat">
                <li className="mb-2 font-montserrat">About Us</li>
                <li className="mb-2 font-montserrat">Become a partner</li>
                <li className="mb-2 font-montserrat">Referral Program</li>
                <li className="mb-2 font-montserrat">Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-bold">FEATURES</h4>
              <ul className="mt-5 font-montserrat">
                <li className="mb-2 font-montserrat">Automizer</li>
                <li className="mb-2 font-montserrat">
                  Traffic Distribution AI
                </li>
                <li className="mb-2 font-montserrat">Anti-Fraud Kit</li>
                <li className="mb-2 font-montserrat">Mobile Notifications</li>
                <li className="mb-2 font-montserrat">Collaboration Tools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-bold">INTEGRATIONS</h4>
              <ul className="mt-5 font-montserrat">
                <li className="mb-2 font-montserrat">Taboola</li>
                <li className="mb-2 font-montserrat">MGID</li>
                <li className="mb-2 font-montserrat">Revcontent</li>
                <li className="mb-2 font-montserrat">PropellerAds</li>
                <li className="mb-2 font-montserrat">ExoClick</li>
                <li className="mb-2 font-montserrat">Zeropark</li>
                <li className="mb-2 font-montserrat">Outbrain</li>
                <li className="mb-2 font-montserrat">Content.ad</li>
                <li className="mb-2 font-montserrat">Adsterra</li>
                <li className="mb-2 font-montserrat">TrafficJunky</li>
                <li className="mb-2 font-montserrat">and more!</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-bold">RESOURCES</h4>
              <ul className="mt-5 font-montserrat">
                <li className="mb-2 font-montserrat">Beginner AM Guide</li>
                <li className="mb-2 font-montserrat">Webinars</li>
                <li className="mb-2 font-montserrat">Video Tutorials</li>
                <li className="mb-2 font-montserrat">Documentation</li>
                <li className="mb-2 font-montserrat">Case Studies</li>
                <li className="mb-2 font-montserrat">Comparison</li>
                <li className="mb-2 font-montserrat">Blog</li>
                <li className="mb-2 font-montserrat">Affiliate Networks</li>
                <li className="mb-2 font-montserrat">Change Log</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-[110px] mb-3 w-[92%] mx-auto" />
        <div className="flex justify-center lg:justify-between pb-4">
          <h5 className="w-[20%] ml-[2%] lg:ml-[4%] font-montserrat text-[8px] md:text-[12px] lg:text-sm text-[#218465]">
            © CampGuide by Geek Frontier 2023
          </h5>
          <div className="w-[70%] lg:w-[60%] flex justify-center lg:justify-between mr-[2%] lg:mr-[4%]">
            <h5 className="font-montserrat text-[8px] md:text-[12px] lg:text-sm text-[#218465]">
              End User Privacy Policy
            </h5>
            <h5 className="font-montserrat text-[8px] md:text-[12px] lg:text-sm text-[#218465]">
              Privacy Policy
            </h5>
            <h5 className="font-montserrat text-[8px] md:text-[12px] lg:text-sm text-[#218465]">
              Cookies policy
            </h5>
            <h5 className="font-montserrat text-[8px] md:text-[12px] lg:text-sm text-[#218465]">
              Terms & Conditions
            </h5>
            <h5 className="font-montserrat text-[8px] md:text-[12px] lg:text-sm text-[#218465]">
              DPA
            </h5>
            <h5 className="font-montserrat text-[8px] md:text-[12px] lg:text-sm text-[#218465]">
              Security
            </h5>
            <div className="flex">
              <FacebookIcon className="mr-3" />
              <LinkedinICon className="mr-3" />
              <YoutubeIcon className="mr-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-[78%] mx-auto flex justify-between items-center py-4 md:py-[30px] pl-2 md:pl-9 pr-3 md:pr-[42px] bg-[#047857] rounded text-white">
        <div className="w-[25%] md:w-[48%]">
          <h3 className="font-manrope font-semibold text-[10px] md:text-sm text-lg">
            Newsletter
          </h3>
          <p className="font-manrope text-[8px] md:text-sm lg:text-base">
            Be the first one to know about discounts, offers and events
          </p>
        </div>
        <div className="bg-[#065F46] flex items-center w-[62%] h-6 md:w-[48%]">
          <IconSms className="ml-[2px] md:ml-4 ml-6 mr-0 md:mr-2" />
          <input
            placeholder="Enter your email"
            className="bg-[#065F46] w-[74%] font-manrope text-sm text-white"
          />
          <button className="bg-white px-2 md:px-4 lg:px-[22.5px] py-[2px] md:py-[4px] lg:py-[8.5px] text-green text-[8px] md:text-sm lg:text-base font-manrope font-semibold rounded">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
