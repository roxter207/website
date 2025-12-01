import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/mdm_logo.jpg";

const Mainpage1 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-10">

      {/* TOP SECTION — LOGO + TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-10"
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="MDM Logo"
          className="w-[110px] md:w-[120px] h-auto drop-shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        />

        {/* Title Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            MDM <span>Business</span>
            <br />
            <span className="text-blue-400">Solutions</span>
          </h1>
        </motion.div>
      </motion.div>

      {/* TYPEWRITER SECTION */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
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
      </motion.h2>

      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.08, boxShadow: "0px 8px 35px rgba(139,92,246,0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => (window.location.href = "/bookmeeting")}
        className="mt-12 px-10 py-4 rounded-full font-semibold text-white
                   bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl 
                   hover:opacity-90 transition-all duration-300"
      >
        Get A Quote →
      </motion.button>
    </div>
  );
};

export default Mainpage1;
