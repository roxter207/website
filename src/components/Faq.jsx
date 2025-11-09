import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Roughly, how many units/day are you shipping?",
    answer:
      "We analyze your shipping volume to help you optimize carrier selection, storage, and delivery speed efficiently.",
  },
  {
    question:
      "Are you frequently shopping freight rates and carrier options to help save you money?",
    answer:
      "Yes, we regularly compare and negotiate freight rates to ensure you get the most cost-effective options.",
  },
  {
    question:
      "Do you have issues with retaining and/or scaling up staff? (ie. seasonal employment)",
    answer:
      "We can help automate and streamline processes so scaling up or down becomes smoother without staffing stress.",
  },
  {
    question:
      "Is managing fulfillment & returns taking you away from other business goals?",
    answer:
      "Our solutions minimize time spent on fulfillment and returns, letting you focus more on strategic business goals.",
  },
  {
    question:
      "If accepting returns, is your refurbishment process a manual workflow or is it automated?",
    answer:
      "We can assist in automating refurbishment workflows to reduce human error and improve turnaround times.",
  },
  {
    question: "Does making improvements to your current operations seem daunting?",
    answer:
      "We make operational improvement simple by breaking it into actionable, achievable steps tailored to your business.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    question: "",
  });
  const [emailError, setEmailError] = useState("");

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if email is invalid
    if (emailError) {
      alert("Please correct the email before submitting.");
      return;
    }

    console.log("Client profile created:", formData);
    alert("Thanks for reaching out! We’ll get back to you soon.");
    setFormData({ name: "", company: "", email: "", question: "" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-[#0b0f1a] via-[#111827] to-[#1f2937] text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Frequently Asked{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
          Questions
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left: FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right: Ask a Question Form */}
        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 text-center text-indigo-600">
            Have a Question?
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Ask us anything or tell us about your business — we’ll create a personalized client profile to help you better.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg border ${
                  emailError ? "border-red-400" : "border-gray-300"
                } focus:ring-2 ${
                  emailError ? "focus:ring-red-400" : "focus:ring-indigo-400"
                } outline-none`}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            <textarea
              name="question"
              placeholder="What would you like to ask?"
              value={formData.question}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md disabled:opacity-50 hover:cursor-pointer"
              disabled={!!emailError}
            >
              Submit Question
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Faq;
