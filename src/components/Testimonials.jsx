import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Manager, NovaTech",
    quote:
      "Working with MDM Business Solutions was an absolute pleasure. The project was handled with precision, and the results exceeded our expectations.",
  },
  {
    name: "Priya Sharma",
    role: "DevOps Engineer, CloudOps",
    quote:
      "The ability to automate complex workflows and deliver on tight deadlines made a huge difference to our CI/CD efficiency.",
  },
  {
    name: "Liam Chen",
    role: "Software Architect, ByteWorks",
    quote:
      "They bring creativity and technical excellence to every project. A true team player with a problem-solving mindset.",
  },
  {
    name: "Maya Thompson",
    role: "CTO, BrightWave Solutions",
    quote:
      "A perfect balance of technical expertise and creative vision. MDM Business Solution contributions helped us deliver our product ahead of schedule.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10 text-center">
        Testimonials
      </h2>

      <div className="relative w-full max-w-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-center px-6"
          >
            <p className="text-lg md:text-xl text-gray-700 italic mb-6">
              “{testimonials[active].quote}”
            </p>
            <h4 className="text-gray-900 font-semibold">
              {testimonials[active].name}
            </h4>
            <p className="text-gray-500 text-sm">
              {testimonials[active].role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Individual Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {testimonials.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm md:text-base ${
              i === active
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {t.name.split(" ")[0]}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
