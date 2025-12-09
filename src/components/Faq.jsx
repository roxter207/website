import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Roughly, how many units do you ship per day?",
    type: "text",
    placeholder: "e.g., Around 200–500 units",
  },
  {
    question: "Do you regularly compare freight rates to save on costs?",
    type: "radio",
    options: ["Yes, frequently", "Occasionally", "Not really", "Not sure"],
  },
  {
    question: "Do you face challenges scaling staff during busy seasons?",
    type: "radio",
    options: ["Often", "Sometimes", "Rarely", "Never"],
  },
  {
    question: "Does managing fulfillment or returns take up too much time?",
    type: "radio",
    options: ["Yes, significantly", "Somewhat", "Not really"],
  },
  {
    question: "If you accept returns, is your refurbishment process automated?",
    type: "radio",
    options: ["Fully automated", "Partially automated", "Manual process", "Not applicable"],
  },
  {
    question: "Do operational improvements feel overwhelming or hard to start?",
    type: "radio",
    options: ["Yes", "Somewhat", "No"],
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    responses: {},
  });
  const [emailError, setEmailError] = useState("");

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      responses: { ...formData.responses, [name]: value },
    });
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? "" : "Please enter a valid email address.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) {
      alert("Please correct the email before submitting.");
      return;
    }

    console.log("Client responses:", formData);
    alert("Thanks for sharing your details! Our team will reach out soon with insights tailored to your business.");
    setFormData({
      name: "",
      company: "",
      email: "",
      responses: {},
    });
  };

  return (
    <section  id="faq" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-[#0b0f1a] via-[#111827] to-[#1f2937] text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Let’s Understand{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
          Your Business
        </span>
      </h2>

      <p className="text-gray-300 max-w-2xl text-center mb-10">
        Help us learn about your current operations and challenges — so we can tailor solutions that fit your needs perfectly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left: Questionnaire */}
        <div className="space-y-4">
          {questions.map((q, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm bg-white overflow-hidden text-gray-800"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium focus:outline-none"
              >
                {q.question}
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
                    className="px-5 pb-4"
                  >
                    {q.type === "text" && (
                      <input
                        type="text"
                        placeholder={q.placeholder}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                        value={formData.responses[q.question] || ""}
                        onChange={(e) =>
                          handleInputChange(q.question, e.target.value)
                        }
                      />
                    )}
                    {q.type === "radio" && (
                      <div className="flex flex-col gap-2 mt-2">
                        {q.options.map((option, i) => (
                          <label key={i} className="flex items-center gap-2">
                            <input
                              type="radio"
                              name={q.question}
                              value={option}
                              checked={formData.responses[q.question] === option}
                              onChange={(e) =>
                                handleInputChange(q.question, e.target.value)
                              }
                              className="accent-indigo-500"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right: Contact Info Form */}
        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 text-center text-indigo-600">
            Tell Us About You
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Once you complete this short questionnaire, our team will review your answers and reach out with personalized insights.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleTextChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleTextChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleTextChange}
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md disabled:opacity-50 hover:cursor-pointer"
              disabled={!!emailError}
            >
              Submit Questionnaire
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Faq;
