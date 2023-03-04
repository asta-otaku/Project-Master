import React from "react";
import Header from "../components/Header/Header";
import Dashboard from "../components/Home/Dashboard";
import Hero from "../components/Home/Hero";
import Integrations from "../components/Home/Integrations";
import Product from "../components/Home/Product";

function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Product />
      <Dashboard />
      <Integrations />
    </>
  );
}

export default LandingPage;
