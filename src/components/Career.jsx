import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Career = () => {
  // Animation variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
    <Navbar/>
    <section
      id="career"
      className="bg-[#f3f4f6] min-h-screen text-gray-800 py-16 px-4 sm:px-8 md:px-20"
    >
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center mb-4"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Career{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Opportunity
          </span>
        </motion.h1>

        <motion.h3
          className="text-purple-700 font-bold text-lg sm:text-xl md:text-2xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          JOIN THE TEAM!
        </motion.h3>

        <motion.p
          className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg font-light mb-10 px-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          MDM is passionate about enriching the employee experience by offering
          the most relevant and diversified resources available in the industry.
          Our organization clearly communicates its values and expectations,
          holds its employees to the highest standards, and provides a safe and
          healthy workplace.
        </motion.p>
      </div>

      {/* Card Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 justify-items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Card 1 */}
        <motion.div
          variants={fadeUp}
          className="bg-red-200 w-64 sm:w-72 h-64 sm:h-72 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center p-6"
        >
          <h4 className="text-xl sm:text-2xl font-semibold mb-2">
            Competitive Salary
          </h4>
          <p className="text-gray-800 text-sm sm:text-base">
            We offer competitive compensation that matches or exceeds industry
            averages for the manufacturing sector.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeUp}
          className="bg-green-200 w-64 sm:w-72 h-64 sm:h-72 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center p-6"
        >
          <h4 className="text-xl sm:text-2xl font-semibold mb-2">
            Benefits Package
          </h4>
          <p className="text-gray-800 text-sm sm:text-base">
            Our comprehensive benefits package offers 100% employer
            contribution, protecting your salary for what’s most important.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeUp}
          className="bg-blue-200 w-64 sm:w-72 h-64 sm:h-72 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center p-6"
        >
          <h4 className="text-xl sm:text-2xl font-semibold mb-2">
            Career Development
          </h4>
          <p className="text-gray-800 text-sm sm:text-base">
            We support the career development of all staff through diverse work
            experiences and training.
          </p>
        </motion.div>
      </motion.div>

      {/* Footer Note */}
      <motion.p
        className="pt-12 text-center text-gray-700 text-sm sm:text-base font-light max-w-3xl mx-auto px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        MDM Business Solutions Inc. is an equal opportunity employer committed
        to diversity and inclusion within the workplace. Accommodation will be
        provided in accordance with the Accessibility for Ontarians with
        Disabilities Act (AODA) and Ontario’s Human Rights Code.
      </motion.p>
    </section>
    </>
  );
};

export default Career;
