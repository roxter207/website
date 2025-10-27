import React, { useState } from "react";
import {
  FaUser,
  FaFileAlt,
  FaBell,
  FaComments,
  FaDotCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Accessibilitysection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      icon: <FaUser />,
      title: "Barrier-Free Environment",
      description: (
        <>
          <FaDotCircle className="inline mr-2 text-purple-600" />
          MDM BUSINESS SOLUTIONS INC. is committed to providing a barrier-free
          environment for all stakeholders, including clients, employees, job
          applicants, suppliers, and visitors.
        </>
      ),
    },
    {
      icon: <FaFileAlt />,
      title: "Safe Environment",
      description: (
        <>
          <FaDotCircle className="inline mr-2 text-purple-600" />
          We respect and uphold the requirements under the Accessibility for
          Ontarians with Disabilities Act, 2005, and its associated regulations.
        </>
      ),
    },
    {
      icon: <FaBell />,
      title: "Accessibility Documents",
      description: (
        <>
          <FaDotCircle className="inline mr-2 text-purple-600" />
          Current accessibility documents and policies in PDF format are
          available below, including our Multi-Year Accessibility Plan and
          Customer Service Statement.
        </>
      ),
    },
    {
      icon: <FaComments />,
      title: "Feedback",
      description: (
        <>
          <FaDotCircle className="inline mr-2 text-purple-600" />
          We welcome feedback from our employees, customers, and members of the
          public to continuously improve accessibility.
        </>
      ),
    },
  ];

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <section
        id="accessibility"
        className="relative h-full bg-[#f3f4f6] text-gray-800 py-24 px-6 md:px-20 font-sans overflow-hidden"
      >
        <motion.h1
                  className="text-4xl md:text-6xl font-extrabold text-center mb-4"
                  initial={{ y: -40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Accessibility {" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Opportunity
                  </span>
                </motion.h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ratione
          odit itaque alias sed atque hic quam in explicabo aliquid quibusdam
          facilis ipsa, molestias omnis maiores, expedita laudantium veritatis
          deserunt?
        </p>

        <div className="bg-gradient-to-br from-[#e5e7eb] to-[#d1d5db] rounded-3xl shadow-lg border border-gray-200 p-6 md:p-12 space-y-8 transition-all duration-500 hover:shadow-2xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8"
            >
              {/* Left Capsule Button */}
              <motion.button
                onClick={() => toggleDescription(index)}
                className={`flex items-center gap-6 md:gap-8 px-6 py-5 cursor-pointer rounded-full w-full md:flex-1 transition-all border ${
                  activeIndex === index
                    ? "border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 shadow-md"
                    : "border-gray-300 bg-[#f9fafb]"
                }`}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 4px 20px rgba(139,92,246,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`text-4xl md:text-5xl flex-shrink-0 transition-colors ${
                    activeIndex === index
                      ? "text-purple-600"
                      : "text-purple-400"
                  }`}
                >
                  {item.icon}
                </motion.div>
                <div className="font-semibold text-lg md:text-xl text-left">
                  {item.title}
                </div>
              </motion.button>

              {/* Description */}
              <motion.div
                className="flex-1 text-gray-700 font-medium text-sm md:text-base"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  activeIndex === index
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5 }}
              >
                {item.description}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Accessibilitysection;
