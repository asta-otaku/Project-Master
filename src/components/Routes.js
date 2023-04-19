import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Pricing from "../pages/Pricing";
import LandingPage from "../pages/LandingPage";
import Contact from "../pages/Contact";
import SignUp from "./Login/SignUp";
import GetStarted from "../pages/GetStarted";
import Profile from "../pages/Profile";

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
      <Route path="/signup" element={<SignUp />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
