import React from "react";
import Header from "../components/Header/Header";
import Dashboard from "../components/Home/Dashboard";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Integrations from "../components/Home/Integrations";
import Product from "../components/Home/Product";
import Testimonials from "../components/Home/Testimonials";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Product />
        <Dashboard />
        <Integrations />
        <Testimonials />
        <Footer />
      </motion.div>
    </>
  );
}

export default LandingPage;
