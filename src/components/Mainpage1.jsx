// LandingPage.jsx

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/logo.png";

const Mainpage1 = () => {
  return (
     <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Floating particles animation */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Company Logo"
        className="w-48 h-48 object-contain mb-8 z-10"
        initial={{ scale: 0, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.2 }}
      />

      {/* Text with typewriter */}
      <motion.h1
        className="text-3xl md:text-4xl font-semibold text-center mb-6 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Solutions that deliver:{" "}
        <span className="text-blue-400">
          <Typewriter
            words={["Shipping", "Printing", "Fulfilment"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </span>
      </motion.h1>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59,130,246,0.7)" }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Get A Quote
      </motion.button>
    </div>
  );
};

export default Mainpage1;
