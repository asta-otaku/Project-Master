import React from "react";
import { ReactComponent as ButtonGoogle } from "../../assets/ButtonGoogle.svg";
import { ReactComponent as ButtonApple } from "../../assets/ButtonApple.svg";
import { ReactComponent as ProjectMaster } from "../../assets/Project Master.svg";
import { ReactComponent as Frame38 } from "../../assets/Frame 38.svg";
import { ReactComponent as Frame67 } from "../../assets/Frame 67.svg";
import Wave from "../../assets/Wave.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2">
      <div className="pl-24 py-16 text-[#191C1C] col-span-1">
        <h5>
          Already have an account? <span className="text-green">Log in</span>
        </h5>
        <div className="mt-12 ml-[4rem]">
          <h2 className="font-bold w-[360px] font-grotesk text-green text-[48px]">
            Create Account
          </h2>
          <h4 className="mt-2 text-[12.8px] w-[320px]">
            Welcome to ProjectMaster, create an account to get started
          </h4>
          <form className="mt-8 flex flex-col w-[360px]">
            <label name="fullName">Full Name</label>
            <input
              name="fullName"
              placeholder="Akowonjo Natalie"
              className="py-2 pl-2 border rounded-lg border-grey mt-2"
            />
            <label name="email" className="mt-6">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="yours@company.com"
              className="py-2 pl-2 border rounded-lg border-grey mt-2"
            />
            <label name="message" className="mt-6">
              Password
            </label>
            <input
              type="password"
              placeholder="******"
              className="py-2 pl-2 border rounded-lg border-grey mt-2"
            />
            <h5 className="mt-2 text-[#696B6B]">
              The password must be 8 characters or more{" "}
            </h5>
            <button className="mt-8 w-[250px] bg-grey text-green hover:bg-green hover:text-white font-medium py-4 rounded-lg">
              Create Free Account
            </button>
          </form>
          <span className="my-6 flex items-center">
            <hr className="w-[180px] text-[#979797] mr-2" />
            Or
            <hr className="w-[180px] text-[#979797] ml-2" />
          </span>
          <ButtonGoogle
            onClick={() => loginWithRedirect()}
            className="mb-4 cursor-pointer"
          />
          <ButtonApple
            onClick={() => loginWithRedirect()}
            className="cursor-pointer"
          />
        </div>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      </div>
      <div className="bg-green col-span-1 text-white">
        <h4 className="mt-16 flex justify-end mr-24">
          <ProjectMaster />
        </h4>
        <div
          className="mt-14 flex flex-col items-center"
          style={{ backgroundImage: `url(${Wave})` }}
        >
          <div>
            <h3 className="pt-10 font-bold font-grotesk text-4xl w-[450px]">
              Where all your projects are managed
            </h3>
            <h5 className="font-medium">Collaboration, Productivity</h5>
            <Frame38 className="mt-[138px]" />
            <p className="font-grotesk mt-11 font-bold text-[24px] w-[396px]">
              “With ProjectMaster, it has been easier managing my team and
              personal project. I can view all my projects in one place without
              losing track of any”
            </p>
            <Frame67 className="my-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
