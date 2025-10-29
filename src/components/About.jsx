import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import team from "../assets/cargoanimaiton.json";

const About = () => {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="bg-white text-gray-800 min-h-screen flex items-center justify-center px-6 md:pt-10 pb-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-4xl font-extrabold mt-16 leading-tight mb-3">
            We’re{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent  md:text-5xl">
              LEADERS
            </span>{" "}
            driving innovation in distribution and logistics.
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Founded in 1999,{" "}
            <span className="font-semibold text-blue-700">
              MDM Business Solutions
            </span>{" "}
            has evolved to meet the growing distribution demands of digital and
            internet & netwokring equipments. We specialize in both B2B and B2C
            distribution — delivering excellence in outbound and reverse
            logistics.
            <br />
            <br />
            Based in Oakville, our full 360 product lifecycle management
            approach enables us to provide seamless, end-to-end inventory and
            distribution solutions that empower your businesses to grow with
            confidence and efficiency.
          </p>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/aboutus")}
            className=" px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg transition-all duration-300 cursor-pointer"
          >
            ABOUT US →
          </motion.button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 flex items-center justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-[300px] md:w-[520px] lg:w-[560px]">
            <div className="absolute inset-x-0 bottom-0 h-5 bg-gray-200/70 rounded-full blur-md scale-90"></div>
            <Lottie
              animationData={team}
              loop
              autoplay
              className="relative z-10 drop-shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
