import React from "react";
import {
  FaBox,
  FaEnvelope,
  FaWarehouse,
  FaTools,
  FaCog,
  FaLock,
  FaTruck,
  FaLaptop,
  FaUndo,
  FaChartBar,
} from "react-icons/fa";

const services = [
  { title: "Print Procurement and Inventory Management", icon: <FaBox /> },
  { title: "Direct Mail Assembly and Preparation", icon: <FaEnvelope /> },
  { title: "Postal Sortation", icon: <FaEnvelope /> },
  { title: "Serialized/High Value Parts Tracking", icon: <FaCog /> },
  { title: "Secure Area for Sensitive Items", icon: <FaLock /> },
  { title: "Address Correction", icon: <FaEnvelope /> },
  { title: "Personalized Marketing Material", icon: <FaBox /> },
  { title: "Integrated Shipping System", icon: <FaTruck /> },
  { title: "Warehousing", icon: <FaWarehouse /> },
  { title: "Automated Poly and Shrinkwrapping", icon: <FaCog /> },
  { title: "Online Order Entry and Processing", icon: <FaLaptop /> },
  { title: "Returns Processing", icon: <FaUndo /> },
  { title: "Product Refurbishing and Warranty Processing", icon: <FaTools /> },
  { title: "Packaging Design", icon: <FaBox /> },
  { title: "Automated and Online Reporting", icon: <FaChartBar /> },
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
