import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex justify-around items-center h-20">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex">
          <Link to="/">
            <li className="mr-6">Features</li>
          </Link>
          <Link to="/pricing">
            <li className="mr-6">Pricing</li>
          </Link>
          <li className="mr-6">Resources</li>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
        <div>
          <Link to="/signup">
            <button className="bg-grey text-green hover:bg-green hover:text-white font-medium py-4 px-10 rounded-lg mr-6">
              Login
            </button>
          </Link>
          <Link to="/get-started">
            <button className="bg-green text-white hover:bg-grey hover:text-green font-medium py-4 px-10 rounded-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
