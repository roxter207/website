import React, { useEffect, useState, useRef } from "react";
import { FaCalendarAlt, FaStar, FaUser } from "react-icons/fa";

const LogisticBanner = () => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 } // triggers when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const target = 60000;
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          A <span className="text-purple-500">logistics partner</span> you can trust
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Years in business */}
          <div className="flex flex-col items-center bg-white backdrop-blur-md p-8 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300">
            <div className="bg-purple-500 p-4 rounded-full text-white text-2xl mb-4">
              <FaCalendarAlt />
            </div>
            <span className="text-4xl md:text-5xl font-bold text-gray-900">25+</span>
            <p className="mt-2 text-gray-700 text-lg">Years in the business</p>
          </div>

          {/* Happy clients */}
          <div className="flex flex-col items-center bg-white backdrop-blur-md p-8 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300">
            <div className="bg-purple-500 p-4 rounded-full text-white text-2xl mb-4">
              <FaStar />
            </div>
            <span className="text-4xl md:text-5xl font-bold text-gray-900">
              {count.toLocaleString()}+
            </span>
            <p className="mt-2 text-gray-700 text-lg">Happy and satisfied clients</p>
          </div>

          {/* Account managers */}
          <div className="flex flex-col items-center bg-white backdrop-blur-md p-8 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300">
            <div className="bg-purple-500 p-4 rounded-full text-white text-2xl mb-4">
              <FaUser />
            </div>
            <span className="text-4xl md:text-5xl font-bold text-gray-900">50+</span>
            <p className="mt-2 text-gray-700 text-lg">Dedicated account managers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticBanner;
