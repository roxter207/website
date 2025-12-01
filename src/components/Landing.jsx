// LandingPage.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Solutions from "./Solutions";
import LogisticBanner from "./LogisticBanner";
import About from "./About";
import FloatingCards from "./FloatingCards";
import Contact from "./Contact";
import StockStickers from "./StockStickers";
import Testimonials from "./Testimonials";
import Mainpage1 from "./Mainpage1";
import Faq from "./Faq";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      {/* Landing Section */}

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Mainpage1 />

      {/* Other sections */}

      <StockStickers />
      <Solutions />
      <FloatingCards />
      <About />
      <StockStickers />
      <LogisticBanner />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
