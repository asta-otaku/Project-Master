import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function Header() {
  return (
    <div className="flex justify-around items-center h-20">
      <Logo />
      <ul className="flex">
        <li className="mr-6">Features</li>
        <li className="mr-6">Pricing</li>
        <li className="mr-6">Resources</li>
        <li>Contact Us</li>
      </ul>
      <div>
        <button className="bg-grey text-green hover:bg-green hover:text-white font-medium py-4 px-10 rounded-lg mr-6">
          Login
        </button>
        <button className="bg-green text-white hover:bg-grey hover:text-green font-medium py-4 px-10 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Header;
