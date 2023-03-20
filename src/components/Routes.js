import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Pricing from "../pages/Pricing";
import LandingPage from "../pages/LandingPage";
import Contact from "../pages/Contact";

function AppRoutes() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
