import React from "react";
import Form from "../components/Contact/Form";
import Hero from "../components/Contact/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Home/Footer";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Form />
        <Footer />
      </motion.div>
    </div>
  );
}

export default Contact;
