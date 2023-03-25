import React from "react";
import { ReactComponent as Tile } from "./assets/Tile.svg";
import { ReactComponent as Done } from "./assets/Done.svg";
import { ReactComponent as Cancel } from "./assets/Cancel.svg";

function Hero() {
  return (
    <>
      <div className="bg-[#386641] h-[800px] md:h-[900px] text-white text-center">
        <h4 className="pt-14 md:pt-20 text-sm md:text-base lg:pt-[105px] font-montserrat font-bold leading-[19.5px] uppercase">
          The all-in-one CAMPGROUND MANAGEMENT software
        </h4>
        <h2 className="mt-3 font-montserrat font-bold text-3xl md:text-4xl lg:text-[52px] leading-[63px]">
          Track, Optimize & Automate
        </h2>
        <h6 className="mt-2 font-montserrat text-sm md:text-base lg:text-lg">
          your campground with the latest technologies
        </h6>
        <div className="mt-16 md:mt-20 lg:mt-24">
          <button className="mr-[10px] border border-white hover:bg-white hover:text-[#386641] text-sm font-montserrat py-4 px-10 rounded-[50px]">
            VIEW DEMO
          </button>
          <button className="border border-[#BC6C25] bg-[#BC6C25] hover:bg-white hover:text-[#BC6C25] text-sm font-montserrat py-4 px-9 rounded-[50px] shadow-md shadow-black">
            GET STARTED
          </button>
        </div>
      </div>
      <div className="w-[95%] bg-white mb-[4px] mt-[-22rem] md:mt-[-25rem] mx-auto flex flex-col items-center border shadow-lg shadow-[#A9A9A9] border-white rounded-[50px]">
        <Tile className="mt-2 w-[320px] md:w-full" />
        <div className="mt-16 w-[90%] flex justify-between flex-col md:flex-row flex-wrap">
          <article className="px-6 pt-10 text-[#191D23] hover:border hover:border-[#A9A9A9] hover:rounded-lg">
            <h3 className="font-manrope font-bold text-[22px]">Dry Camp</h3>
            <h5 className="mt-2 w-[220px] font-manrope text-[#64748B]">
              Ideal for individuals who need quick access to basic features.
            </h5>
            <div className="mt-5 flex items-center">
              <h2 className="font-manrope font-semibold text-[56px] mr-2">
                $0
              </h2>
              <h4 className="font-manrope font-light text-base">
                / User/Month
              </h4>
            </div>
            <button className="mt-6 font-semibold text-[#047857] border-[3px] border-[#047857] rounded py-[11px] px-14">
              Get Early Access
            </button>
            <ul className="mt-10 font-manrope font-medium text-[#A0ABBB]">
              <li className="flex items-center">
                <Done className="mr-4" />
                <h3 className="text-[#191D23] w-[200px]">
                  20,000+ of PNG & SVG graphics
                </h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="text-[#191D23] w-[180px]">
                  Access to 100 million stock images
                </h3>
              </li>
              <li className="flex items-center mt-3">
                <Cancel className="mr-4" />
                <h3 className="w-[200px]">Upload custom icons and fonts</h3>
              </li>
              <li className="flex items-center mt-3">
                <Cancel className="mr-4" />
                <h3 className="w-[200px]">Unlimited Sharing</h3>
              </li>
              <li className="flex items-center mt-3">
                <Cancel className="mr-4" />
                <h3 className="w-[180px]">
                  Upload graphics & video in up to 4k
                </h3>
              </li>
              <li className="flex items-center mt-3">
                <Cancel className="mr-4" />
                <h3 className="w-[200px]">Unlimited Projects</h3>
              </li>
              <li className="flex items-center mt-3">
                <Cancel className="mr-4" />
                <h3 className="w-[180px]">
                  Instant Access to our design system
                </h3>
              </li>
              <li className="flex items-center mt-3 pb-[51px]">
                <Cancel className="mr-4" />
                <h3 className="w-[180px]">
                  Create teams to collaborate on designs
                </h3>
              </li>
            </ul>
          </article>
          <article className="px-6 pt-10 text-[#191D23] hover:border hover:border-[#A9A9A9] hover:rounded-lg">
            <h3 className="font-manrope font-bold text-[22px]">
              Partial HookUp
            </h3>
            <h5 className="mt-2 w-[250px] font-manrope text-[#64748B]">
              Ideal for individuals who who need advanced features and tools
              for...
              <span className="hidden">client work.</span>
            </h5>
            <div className="mt-5 flex items-center">
              <h2 className="font-manrope font-semibold text-[56px] mr-2">
                $25
              </h2>
              <h4 className="font-manrope font-light text-base">
                / User/Month
              </h4>
            </div>
            <button className="mt-6 font-semibold bg-[#047857] text-white border-[3px] border-[#047857] rounded py-[11px] px-14">
              Get Early Access
            </button>
            <ul className="mt-10 font-manrope font-medium text-[#A0ABBB]">
              <li className="flex items-center">
                <Done className="mr-4" />
                <h3 className="text-[#191D23] w-[200px]">
                  20,000+ of PNG & SVG graphics
                </h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="text-[#191D23] w-[180px]">
                  Access to 100 million stock images
                </h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="text-[#191D23] w-[200px]">
                  Upload custom icons and fonts
                </h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="text-[#191D23] w-[200px]">Unlimited Sharing</h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="text-[#191D23] w-[180px]">
                  Upload graphics & video in up to 4k
                </h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="text-[#191D23] w-[200px]">Unlimited Projects</h3>
              </li>
              <li className="flex items-center mt-3">
                <Cancel className="mr-4" />
                <h3 className="w-[180px]">
                  Instant Access to our design system
                </h3>
              </li>
              <li className="flex items-center mt-3 pb-[51px]">
                <Cancel className="mr-4" />
                <h3 className="w-[180px]">
                  Create teams to collaborate on designs
                </h3>
              </li>
            </ul>
          </article>
          <article className="px-6 pt-10 text-white bg-[#BC6C25] hover:border hover:border-[#A9A9A9] hover:rounded-lg">
            <h3 className="font-manrope font-bold text-[22px]">Full Hook Up</h3>
            <h5 className="mt-2 w-[250px] font-manrope">
              Ideal for individuals who who need advanced features and tools
              for...
              <span className="hidden">client work.</span>
            </h5>
            <div className="mt-5 flex items-center">
              <h2 className="font-manrope font-semibold text-[56px] mr-2">
                $45
              </h2>
              <h4 className="font-manrope font-light text-base">
                / User/Month
              </h4>
            </div>
            <button className="mt-6 font-semibold border-[3px] border-[#BC6C25] bg-white text-[#047857] rounded py-[11px] px-14">
              Get Early Access
            </button>
            <ul className="mt-10 font-manrope font-medium">
              <li className="flex items-center">
                <Done className="mr-4" />
                <h3 className="w-[200px]">20,000+ of PNG & SVG graphics</h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="w-[180px]">
                  Access to 100 million stock images
                </h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="w-[200px]">Upload custom icons and fonts</h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="w-[200px]">Unlimited Sharing</h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="w-[180px]">
                  Upload graphics & video in up to 4k
                </h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="w-[200px]">Unlimited Projects</h3>
              </li>
              <li className="flex items-center mt-3">
                <Cancel className="mr-4" />
                <h3 className="w-[180px]">
                  Instant Access to our design system
                </h3>
              </li>
              <li className="flex items-center mt-3 pb-[51px]">
                <Cancel className="mr-4" />
                <h3 className="w-[180px]">
                  Create teams to collaborate on designs
                </h3>
              </li>
            </ul>
          </article>
          <article className="px-6 pt-10 text-[#191D23] hover:border hover:border-[#A9A9A9] hover:rounded-lg">
            <h3 className="font-manrope font-bold text-[22px]">Enterprise</h3>
            <h5 className="mt-2 w-[250px] h-[140px] font-manrope text-[#64748B]">
              Ideal for businesses who need personalized services and security
              for large teams.
            </h5>
            <button className="mt-6 font-semibold border-[3px] border-[#047857] text-[#047857] rounded py-[11px] px-14">
              Schedule a Demo
            </button>
            <ul className="mt-10 font-manrope font-medium text-[#191D23]">
              <li className="flex items-center">
                <Done className="mr-4" />
                <h3 className="w-[200px]">20,000+ of PNG & SVG graphics</h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="w-[180px]">
                  Access to 100 million stock images
                </h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="w-[200px]">Upload custom icons and fonts</h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="w-[200px]">Unlimited Sharing</h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="w-[180px]">
                  Upload graphics & video in up to 4k
                </h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="w-[200px]">Unlimited Projects</h3>
              </li>
              <li className="flex items-center mt-3">
                <Done className="mr-4" />
                <h3 className="w-[180px]">
                  Instant Access to our design system
                </h3>
              </li>
              <li className="flex items-center mt-3 pb-[51px]">
                <Done className="mr-4" />
                <h3 className="w-[180px]">
                  Create teams to collaborate on designs
                </h3>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
}

export default Hero;
