import React from "react";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ReverseLogistics = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div
        id="reverselogistics"
        className="bg-gradient-to-br from-[#0b0f1a] via-[#111827] to-[#1f2937] text-white relative min-h-screen overflow-hidden"
      >
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
            
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 text-white"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Our Advanced <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Reverse Logistics
                </span>
              </h2>

              <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
                <p>
                  Our Reverse Logistics process gives you <span className="font-semibold text-white">full visibility of your customers’ returns</span>. Know when a product is in-transit, when it has been received, and how it was dispositioned.
                </p>

                <p>
                  For our ISP clients, the Reverse Logistics process ensures <span className="font-semibold text-white">full traceability of the specific serial numbers</span> that were sent and returned, giving you maximum visibility into your products’ lifecycle.
                </p>

                <p>
                  All returned products are <span className="font-semibold text-white">inspected for physical defects</span> before being redeployed.
                </p>

                <p>
                  ISP clients can have peace of mind knowing that your products follow our{" "}
                  <a
                    href="/device-testing-refurbishment"
                    className="font-semibold text-purple-400 hover:text-purple-500 underline"
                  >
                    Device Testing & Refurbishment
                  </a>{" "}
                  process so that every device is ready for redeployment.
                </p>
              </div>
            </motion.div>

            {/* Image Section */}
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

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: "0px 4px 25px rgba(139,92,246,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/bookmeeting")}
              className="items-center px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Book A Meeting →
            </motion.button>

          </div>
        </section>
      </div>
    </>
  );
};

export default ReverseLogistics;
