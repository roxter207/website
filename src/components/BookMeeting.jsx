import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const BookMeeting = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    date: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your meeting request has been sent!");
  };

  return (
    <>
      <Navbar />
      <section
        id="bookmeeting"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb] text-gray-900 px-6 md:px-12 py-20 font-sans"
      >
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center mb-4"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Book a{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meeting
          </span>
        </motion.h1>

        <motion.p
          className="text-center text-gray-600 max-w-xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Let's connect and explore how we can bring your ideas to life. Fill in
          your details, and we’ll get back to you shortly.
        </motion.p>

        {/* Form Container */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12 space-y-6 transition-all"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Email & Company */}
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
                className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name (optional)"
                className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Preferred Date</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a bit about what you’d like to discuss..."
              className="px-4 py-3 rounded-xl border border-gray-300 bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600  text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:bg-indigo-700 transition-all"
          >
            Schedule Meeting
          </motion.button>
        </motion.form>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 mt-8">
          By submitting, you agree to our privacy policy.
        </p>
      </section>
    </>
  );
};

export default BookMeeting;
