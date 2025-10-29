// LandingPage.jsx
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import Solutions from "./Solutions";
import LogisticBanner from "./LogisticBanner";
import About from "./About";
import FloatingCards from "./FloatingCards";
import Contact from "./Contact";
import StockStickers from "./StockStickers";
import Testimonials from "./Testimonials";


const LandingPage = () => {
  return (
    <>
      {/* Landing Section */}
      
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        
    

      {/* Other sections */}
     
   
      <StockStickers />
      <Solutions />
      <FloatingCards />
      <About />
      <StockStickers />
      <LogisticBanner />
      <Testimonials />
      <Contact />
    </>
  );
};

export default LandingPage;
