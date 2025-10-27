// Contact.jsx
import React, { use } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-[#0b0f1a] via-[#111827] to-[#1f2937] text-white py-5 px-6 md:px-20"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-purple-600 to-purple-200 bg-clip-text text-transparent">
          CONTACT US
        </h1>
        <div className="w-24 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mt-3 rounded"></div>
      </div>

      {/* Contact Card */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Info Card */}
        <div className="p-8 transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
            MDM BUSINESS SOLUTIONS INC.
          </h2>

          <div className="space-y-1 text-lg">
            <p>6-2300 Bristol Circle</p>
            <p>Oakville, ON</p>
            <p className="mb-6">L6H 5S3</p>
          </div>

          <div className="space-y-2">
            <p className="text-lg font-medium">
              Toll Free:{" "}
              <span className="font-normal text-purple-400">1-800-668-5650</span>
            </p>
            <p className="text-lg font-medium">
              Local:{" "}
              <span className="font-normal text-purple-400">905-829-0922</span>
            </p>
            <p className="text-lg font-medium">
              Email:{" "}
              <a
                href="mailto:customerservice@mdmgroup.ca"
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold hover:underline"
              >
                customerservice@mdmgroup.ca
              </a>
            </p>
          </div>
          <motion.button
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 4px 25px rgba(139,92,246,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>navigate("/bookmeeting")}
            className="mt-10 inline-flex items-center px-8 py-3 rounded-full font-medium text-white 
                       bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:opacity-90 transition-all duration-300"
          >
           Book A Meeting →
          </motion.button>
          
        </div>
      
          
      

        {/* Map */}
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300">
          <iframe
            title="MDM Business Solutions Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.285533003933!2d-79.71101928450914!3d43.500052879126294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4567a8dbd7b7%3A0x62a5c6227ee7c327!2s2300%20Bristol%20Cir%2C%20Oakville%2C%20ON%20L6H%205S3%2C%20Canada!5e0!3m2!1sen!2sca!4v1695999999999!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>



      {/* Copyright Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm md:text-base text-white">
          © {year}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold">
            MDM Business Solutions Inc.
          </span>{" "}
          — All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
