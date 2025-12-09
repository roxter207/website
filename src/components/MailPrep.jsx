// Equipment.jsx
import React from "react";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MailPrep = () => {
  const navigage = useNavigate();
  return (
    <>
      <Navbar />
      <div  id="mail"className=" bg-gradient-to-br from-[#0b0f1a] via-[#111827] to-[#1f2937] text-white relative min-h-screen overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
            {/* Left Side — Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 text-white"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Our Advanced <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Mail Center
                </span>
              </h2>

              <p className="text-white text-base md:text-lg leading-relaxed">
                Our{" "}
                <span className="font-semibold text-white">
                  30,000-square-foot facility
                </span>
                in Oakville is strategically located near major transportation
                corridors and equipped with state-of-the-art technology to
                deliver
                <span className="text-white font-semibold">
                  {" "}
                  high-quality, large-scale printing and finishing solutions.
                </span>
              </p>

              <p className="text-white text-base md:text-lg leading-relaxed">
                Our production floor features{" "}
                <span className="font-semibold text-white">
                  Xerox 700 and Versant colour printers, a Xante envelope
                  printer, Duplo cutter/scanner, digital trimmer,
                </span>{" "}
                and{" "}
                <span className="font-semibold text-white">
                  multiple Pitney Bowes inserter/folder stations
                </span>{" "}
                to ensure efficiency and precision.
              </p>

              <p className="text-white text-base md:text-lg leading-relaxed">
                For packaging and fulfillment, we utilize{" "}
                <span className="font-semibold text-white">
                  automated shrinkwrap tunnels, poly wrap systems,
                </span>{" "}
                and an{" "}
                <span className="font-semibold text-white">
                  advanced poly bag assembly station.
                </span>
                All operations are secured with{" "}
                <span className="font-semibold text-white">
                  biometric access control
                </span>{" "}
                across all entry points.
              </p>
            </motion.div>

            {/* Right Side — Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 relative"
            >
              <motion.img
                src={image1}
                alt="Facility equipment 1"
                className="w-full h-64 sm:h-80 lg:h-64 rounded-3xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
                whileHover={{ y: -5 }}
              />
              <motion.img
                src={image2}
                alt="Facility equipment 2"
                className="w-full h-64 sm:h-80 lg:h-64 rounded-3xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
                whileHover={{ y: -5 }}
              />
            </motion.div>
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 4px 25px rgba(139,92,246,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/bookmeeting")}
              className="  items-center px-8 py-3 rounded-full font-medium text-white 
                                 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Book A Meeting →
            </motion.button>
          </div>
        </section>
      </div>
    </>
  );
};

export default MailPrep;
