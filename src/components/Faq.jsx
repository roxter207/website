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

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-[#0b0f1a] via-[#111827] to-[#1f2937] text-white">
      <div className="max-w-2xl w-full">
        <h2 className="md:text-5xl font-bold text-center mb-8">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Questions</span> 
        </h2>

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
      </div>
    </section>
  );
};

export default Faq;
