import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="flex flex-col pt-8 md:pt-14 lg:pt-28 m px-4 md:px-12 lg:px-[6.25rem] h-[900px] footer_bg text-white">
      <div className="flex justify-between pb-[15px] border-b border-white">
        <div className="">
          <p className="font-montserrat font-bold md:text-[24px] lg:text-[32px]  leading-[39px] pb-4">
            Control all your <br /> advertising from just one <br /> platform!
          </p>
          <button className="text-black hover:bg-[#929292] w-[150px] md:w-[203px] h-[50px] bg-[#FEFAE0] rounded-[50px]">
            Get Started{" "}
            <img className="inline pl-2" src="/assets/icons/Vector.svg" />
          </button>
        </div>
        <div>
          <p className="font-montserrat text-[12px] md:text-[15px] w-[120px] md:w-full leading-[18px] uppercase">
            MANAGE YOUR PLAYGROUND ON THE go
          </p>
          <div>
            <img className="inline-block pr-2" src="/assets/icons/google.svg" />
            <img className="inline-block" src="/assets/icons/apple.svg" />
          </div>
        </div>
      </div>
      <div className="flex ustify-center md:justify-between pt-16 pb-[65px] border-b border-white">
        <div className="w-[25%] md:w-[30%] content-center">
          <div className="flex py-4">
            <img className="pr-2" src="/assets/icons/campguide.svg" />
            <p className="font-montserrat font-bold text-[9px] text-[12px] leading-4 self-center">
              CAMPGUIDE
            </p>
          </div>
          <p className="font-montserrat text-[9px] text-[12px] leading-6">
            JOIN OUR COMMUNITIES OF <br /> CAMPGROUND OWNERS ON
          </p>
          <div className="flex py-4">
            <img className="pr-2" src="/assets/images/facebook.png" />
            <p className="font-montserrat text-sm leading-6">facebook</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-between w-[65%]">
          <div className="mr-2 md:mr-0">
            <p className="font-montserrat text-[9px] md:text-base font-bold leading-5 text-[#F2F4F7] pb-[5px]">
              Company
            </p>
            <div className="flex flex-col">
              <ul className="font-montserrat text-[9px] md:text-base leading-8 text-[#F2F4F7]">
                <li>
                  <a href="#"> About</a>
                </li>
                <li>
                  <a href="#"> Become a partner</a>
                </li>
                <li>
                  <a href="#"> Referral Program</a>
                </li>
                <li>
                  <a href="#"> Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-2 md:mr-0">
            <p className="font-montserrat text-[9px] md:text-base font-bold leading-5 text-[#F2F4F7] pb-[5px]">
              Features
            </p>
            <div className="flex flex-col">
              <ul className="font-montserrat text-[9px] md:text-base leading-8 text-[#F2F4F7]">
                <li>
                  <a href="#"> Automizer</a>
                </li>
                <li>
                  <a href="#"> Traffic Distribution AI</a>
                </li>
                <li>
                  <a href="#"> Anti-Fraud Kit</a>
                </li>
                <li>
                  <a href="#"> Mobile Notification</a>
                </li>
                <li>
                  <a href="#"> Collaboration Tools</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-2 md:mr-0">
            <p className="font-montserrat text-[9px] md:text-base font-bold leading-5 text-[#F2F4F7] pb-[5px]">
              Integrations
            </p>
            <div className="flex flex-col">
              <ul className="font-montserrat text-[9px] md:text-base leading-8 text-[#F2F4F7]">
                <li>
                  <a href="#"> Taboola</a>
                </li>
                <li>
                  <a href="#"> MGID</a>
                </li>
                <li>
                  <a href="#"> RevContent</a>
                </li>
                <li>
                  <a href="#"> PropellerAds</a>
                </li>
                <li>
                  <a href="#"> ExoClick</a>
                </li>
                <li>
                  <a href="#"> Zeropark</a>
                </li>
                <li>
                  <a href="#"> Outbrain</a>
                </li>
                <li>
                  <a href="#"> Content.ad </a>
                </li>
                <li>
                  <a href="#"> Adsterra</a>
                </li>
                <li>
                  <a href="#"> TrafficJunky</a>
                </li>
                <li>
                  <a href="#"> and more!</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="font-montserrat text-[9px] md:text-base font-bold leading-5 text-[#F2F4F7] pb-[5px]">
              Resources
            </p>
            <div className="flex flex-col">
              <ul className="font-montserrat text-[9px] md:text-base leading-8 text-[#F2F4F7]">
                <li>
                  <a href="#"> Beginner AM Guide</a>
                </li>
                <li>
                  <a href="#"> Webinars</a>
                </li>
                <li>
                  <a href="#"> Video Tutorials</a>
                </li>
                <li>
                  <a href="#"> Documentation</a>
                </li>
                <li>
                  <a href="#"> Case Studies</a>
                </li>
                <li>
                  <a href="#"> Comaprison</a>
                </li>
                <li>
                  <a href="#"> Blog</a>
                </li>
                <li>
                  <a href="#">Affliate Network</a>
                </li>
                <li>
                  <a href="#"> Change Log</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="w-[30%] font-montserrat text-[8px] md:text-sm leading-6">
          <p>&#169;Campguide by Geek Frontier 2023</p>
        </div>
        <div className="flex flex-row justify-between w-[70%] font-montserrat text-[8px] md:text-sm leading-6">
          <div> End User Privacy Policy</div>
          <div> Privacy Policy</div>
          <div> Cookies Policy</div>
          <div> Terms &#38; Conditions</div>
          <div> DPA</div>
          <div> Security</div>
        </div>
        <div className="flex justify-evenly w-[10%] font-montserrat text-sm leading-6">
          <img
            className="w-[1.13875rem] h-[1.09375rem]"
            src="/assets/icons/facebook.svg"
          />
          <img
            className="w-[1.13875rem] h-[1.09375rem]"
            src="/assets/icons/linkedin.svg"
          />
          <img
            className="w-[1.13875rem] h-[1.09375rem]"
            src="/assets/icons/youtube.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
