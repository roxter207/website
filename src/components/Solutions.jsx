import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import cargo from "../assets/fullfilment.json";
import {
  FaCogs,
  FaPrint,
  FaComments,
  FaShippingFast,
  FaHandsHelping,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();

  const featurePoints = [
    {
      icon: (
        <FaShippingFast className="text-purple-400 text-lg flex-shrink-0" />
      ),
      text: "Efficient and transparent shipping solutions customized for your brand.",
    },
    {
      icon: <FaCogs className="text-purple-400 text-lg flex-shrink-0" />,
      text: "Tailored distribution strategies designed around your business goals.",
    },
    {
      icon: (
        <FaHandsHelping className="text-purple-400 text-lg flex-shrink-0" />
      ),
      text: "Device refurbishment & advanced testing capabilities to keep your product in-market longer",
    },
    {
      icon: <FaComments className="text-purple-400 text-lg flex-shrink-0" />,
      text: "Seamless, automated customer communication that strengthens engagement.",
    },
    {
      icon: <FaPrint className="text-purple-400 text-lg flex-shrink-0" />,
      text: "On-demand printing and personalization—crafted with precision and speed.",
    },
  ];

  return (
    <section
      id="solutions"
      className="relative w-full bg-gradient-to-br from-[#0b0f1a] via-[#111827] to-[#1f2937] text-white py-24 pb-52 px-6 md:px-16 lg:px-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content (Image / Mockup) */}
        <motion.div
          className="flex-1 order-1 lg:order-none"
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full h-72 md:h-96  flex items-center justify-center overflow-hidden">
            <Lottie
              animationData={cargo}
              loop
              autoplay
              className="w-72 md:w-96"
            />
          </div>
        </motion.div>

        {/* Right Content (Text + Button) */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400  md:text-5xl">
              Solution{" "}
            </span>
            you’ve been searching for.
          </h2>

          <p className="text-base md:text-lg text-gray-300 mb-8">
            At{" "}
            <span className="font-semibold text-purple-400">
              MDM Business Solutions
            </span>
            , we don’t believe in one-size-fits-all solutions. We partner with
            you to
          </p>

          <motion.ul
            className="space-y-4 text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {featurePoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                {point.icon}
                <span>{point.text}</span>
              </li>
            ))}
          </motion.ul>

          <p className="text-base md:text-lg text-gray-300 mt-8">
            Discover the one-stop solution designed to move your business
            forward seamlessly and strategically.
          </p>

          <motion.button
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 4px 25px rgba(139,92,246,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/bookmeeting")}
            className="mt-7 inline-flex items-center px-8 py-3 rounded-full font-medium text-white 
                       bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Get A Quote →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
