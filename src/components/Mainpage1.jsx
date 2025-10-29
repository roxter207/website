import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/logo.png"; // replace with your uploaded logo

const Mainpage1 = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Floating background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Company Logo"
        className="w-[50vw] max-w-[600px] h-auto mb-12 z-10"
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 20, duration: 1.5 }}
      />

      {/* Typewriter text */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
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

      {/* Get A Quote button */}
      <motion.button
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 8px 35px rgba(139,92,246,0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = "/bookmeeting"}
        className="mt-7 px-10 py-4 rounded-full font-semibold text-white 
                   bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl hover:opacity-90 transition-all duration-300 z-10"
      >
        Get A Quote →
      </motion.button>
    </div>
  );
};

export default Mainpage1;
