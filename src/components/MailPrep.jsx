import React from "react";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Truck, RotateCcw, FileText, Megaphone } from "lucide-react";

const MailPrep = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div
        id="mail"
        className="bg-gradient-to-br from-[#0b0f1a] via-[#111827] to-[#1f2937] text-white relative min-h-screen overflow-hidden"
      >
        <Navbar />

        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-19 items-center">
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
                  Mail Center
                </span>
              </h2>

              <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-200">
                <div className="space-y-2">
                  <p>
                    MDM is fully equipped to support your{" "}
                    <span className="font-semibold text-white">
                      customized direct communication
                    </span>{" "}
                    needs — from SMS messages and emails to mailed letters — all
                    aligned with your corporate branding.
                  </p>
                </div>

                {/* ---------------- ICON LIST ---------------- */}
                <div className="space-y-4">
                  <p className="font-semibold text-white">
                    Automated Client Communications
                  </p>

                  <div className="space-y-3">

                    {/* 1. Ship Notifications */}
                    <div className="flex gap-3 items-start">
                      <div className="w-5 h-5 flex justify-center items-center">
                        <Truck className="w-4 h-4 text-purple-400" />
                      </div>
                      <p>
                        Ship notifications to your customers, including
                        real-time carrier status updates
                      </p>
                    </div>

                    {/* 2. Return Requests */}
                    <div className="flex gap-3 items-start">
                      <div className="w-5 h-5 flex justify-center items-center">
                        <RotateCcw className="w-4 h-4 text-purple-400" />
                      </div>
                      <p>
                        Return requests with automated reminders when return
                        waybills have not yet been received by the carrier
                      </p>
                    </div>

                    {/* 3. Billing Email / Mail */}
                    <div className="flex gap-3 items-start">
                      <div className="w-5 h-5 flex justify-center items-center">
                        <FileText className="w-4 h-4 text-purple-400" />
                      </div>
                      <p>Billing mailings and emails</p>
                    </div>

                    {/* 4. Other Communications */}
                    <div className="flex gap-3 items-start">
                      <div className="w-5 h-5 flex justify-center items-center">
                        <Megaphone className="w-4 h-4 text-purple-400" />
                      </div>
                      <p>
                        Other client-side communications such as service changes
                        or promotional initiatives
                      </p>
                    </div>

                  </div>
                </div>

                {/* ---------------- RETURNS PROGRAM ---------------- */}
                <div className="space-y-2">
                  <p className="font-semibold text-white">MDM Returns Program</p>
                  <p>
                    Our Returns Program provides your customers with an{" "}
                    <span className="font-semibold text-white">
                      easy and flexible way to return products
                    </span>
                    . Choose SMS text, email, or mailed letter — each containing
                    embedded return waybill information. Enjoy complete
                    visibility into communication delivery, carrier receipt of
                    the return waybill, and full shipment tracking.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ---------------- IMAGE SECTION ---------------- */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 relative"
            >
              <motion.img
                src={image1}
                alt="Mail center equipment 1"
                className="w-full h-64 sm:h-80 lg:h-64 rounded-3xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
                whileHover={{ y: -5 }}
              />
              <motion.img
                src={image2}
                alt="Mail center equipment 2"
                className="w-full h-64 sm:h-80 lg:h-64 rounded-3xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
                whileHover={{ y: -5 }}
              />
            </motion.div>

            {/* ---------------- BUTTON ---------------- */}
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 4px 25px rgba(139,92,246,0.4)",
              }}
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

export default MailPrep;
