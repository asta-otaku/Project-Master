import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Pricing/Hero";
import Footer from "../components/Home/Footer";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Footer />
      </motion.div>
    </div>
  );
}

export default Pricing;
