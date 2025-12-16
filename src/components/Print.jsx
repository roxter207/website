// Equipment.jsx
import React from "react";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Print = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-[#0b0f1a] via-[#111827] to-[#1f2937] text-white relative min-h-screen overflow-hidden">
        {/* Main content */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start">
            {/* Left Side — Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 text-white"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Our Advanced <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Printing & Packing
                </span>
              </h2>

              <p className="text-white text-base md:text-lg leading-relaxed">
                Beyond standard packing slips, exchange letters, and return
                letters, MDM provides our clients with the value-added service
                of on-demand printing. Our print capabilities include:
              </p>

              <ul className="list-disc list-inside space-y-2 text-white text-base md:text-lg">
                <li className="font-semibold">Guides</li>
                <li className="font-semibold">Inserts</li>
                <li className="font-semibold">Labels / Stickers</li>
                <li className="font-semibold">Box Sleeves</li>
                <li className="font-semibold">
                  Promotional Marketing Materials
                </li>
              </ul>

              <p className="text-white text-base md:text-lg leading-relaxed">
                All operations take place in our 30,000-square-foot Oakville
                facility, equipped with cutting-edge technology to ensure
                high-quality, efficient, and precise printing along with
                packing.
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

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 4px 25px rgba(139,92,246,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/bookmeeting")}
              className="mt-8 md:mt-0 items-center px-8 py-3 rounded-full font-medium text-white 
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

export default Print;
