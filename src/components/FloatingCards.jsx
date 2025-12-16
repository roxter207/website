import React from "react";
import { motion } from "framer-motion";
import { FaShippingFast, FaTools, FaPlug } from "react-icons/fa"; // Updated icons
import { useNavigate } from "react-router-dom";

const FloatingCards = () => {
  const navigate = useNavigate();
  const cards = [
    {
      icon: <FaShippingFast className="text-blue-600 text-2xl" />,
      title: "Reverse Logistics",
      link: "/reverselogistics",
    },
    {
      icon: <FaTools className="text-green-600 text-2xl" />,
      title: "Equipment Testing",
      link: "/equipment",
    },
    {
      icon: <FaPlug className="text-purple-600 text-2xl" />,
      title: "Cable Recovery",
      link: "/cablerecovery",
    },
  ];

  return (
    <div className="relative z-20 w-full md:flex justify-center px-4 sm:px-6 hidden">
      <motion.div
        className="absolute hover:cursor-pointer -top-24 md:-top-20 bg-white shadow-xl rounded-2xl py-8 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-5xl items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.link)}
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-5 sm:p-6 text-center transition-all duration-300 flex-1 max-w-xs md:max-w-none"
          >
            <div className="flex items-center justify-center gap-3 text-center ">
              <div className="text-3xl">{card.icon}</div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingCards;
