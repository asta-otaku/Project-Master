import React from "react";
import Header from "../components/Header/Header";
import Dashboard from "../components/Home/Dashboard";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Integrations from "../components/Home/Integrations";
import Product from "../components/Home/Product";
import Testimonials from "../components/Home/Testimonials";

function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Product />
      <Dashboard />
      <Integrations />
      <Testimonials />
      <Footer />
    </>
  );
}

export default LandingPage;
