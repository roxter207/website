import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    portfolio: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your career application has been submitted!");
  };

  return (
    <>
      <Navbar />
      <section
        id="careersform"
        className="pt-32 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb] text-gray-900 px-6 md:px-12 py-10 font-sans"
      >
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center mb-4"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
        </motion.h1>

        <motion.p
          className="text-center text-gray-600 max-w-xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We’re always looking for passionate people. Apply below and take the next step in your career.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Role */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Position Applied For</label>
            <input
              type="text"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g. DevOps Engineer, Data Analyst"
              className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Experience & Portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Years of Experience</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g. 1, 2, 5"
                className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Portfolio / LinkedIn</label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://"
                className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Why should we hire you?</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your skills, experience, and motivation..."
              className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:shadow-xl"
          >
            Submit Application
          </motion.button>
        </motion.form>

        <p className="text-xs text-gray-500 mt-4">We’ll review your application and get back to you.</p>
      </section>
      <Footer />
    </>
  );
};

export default CareerForm;
