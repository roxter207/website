import React from "react";
import {
  FaBox,
  FaCogs,
  FaFileAlt,
  FaLayerGroup,
  FaUndo,
  FaTools,
  FaVial,
  FaCubes,
  FaEnvelope,
  FaWarehouse,
  FaLaptop,
  FaChartBar,
} from "react-icons/fa";

const services = [
  { title: "Order Fulfillment", icon: <FaBox /> },
  { title: "Device Configuration & Provisioning", icon: <FaCogs /> },
  { title: "Custom POD Order Documents", icon: <FaFileAlt /> },
  { title: "Order Bundling", icon: <FaLayerGroup /> },
  { title: "Returns Processing", icon: <FaUndo /> },
  { title: "Product Refurbishing", icon: <FaTools /> },
  { title: "Advanced Device Testing", icon: <FaVial /> },
  { title: "Kitting Services", icon: <FaCubes /> },
  { title: "Direct Mail Assembly and Preparations", icon: <FaEnvelope /> },
  { title: "Warehousing", icon: <FaWarehouse /> },
  { title: "Client Portal for Tracking & Reporting", icon: <FaLaptop /> },
];

export default function StockStickers() {
  return (
    <section className="bg-[#f5f6fa] overflow-hidden py-4">
      {/* Marquee container */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-marquee items-center">
          {services.concat(services).map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 
                         flex-shrink-0 min-w-[320px] mx-8"
            >
              <div className="text-xl text-gray-600">{service.icon}</div>
              <h3 className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            width: max-content;
            display: flex;
            animation: marquee 45s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}
