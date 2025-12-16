import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Add navigation hook
import img1 from "../assets/img1.png";
import img2 from "../assets/img1.png";
import img3 from "../assets/img1.png";
import img4 from "../assets/img2.png";
import boss1 from "../assets/img1.png";
import boss2 from "../assets/img2.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");
      const totalScroll = (sections.length - 1) * window.innerWidth;

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: `+=${totalScroll}`,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const storyData = [
    {
      title: "🌱 The Beginning: 1995",
      text: "Our journey began in 1995, supporting the rollout of Sympatico Internet across Canada — helping bring reliable connectivity to homes at a time when the internet was still new.",
      img: img1,
    },
    {
      title: "✉️ Direct to Consumer:  1999",
      text: "By 1999, we pioneered direct-to-consumer communication through mass mailings and custom return-request letters, strengthening the connection between service providers and customers.",
      img: img2,
    },
    {
      title: "🔧 Engineering Reliability: 2001–2005",
      text: "As ISPs evolved, so did we. We introduced device testing and refurbishment in 2001, followed by power supply testing in 2005 — preventing downstream issues before they reached customers.",
      img: img3,
    },
    {
      title: "🌍 Built for the Future: 2017–2025",
      text: "From our strategic move to Oakville in 2017 to advanced testing for DSL, DOCSIS 3.1, GPON, ATA & WiFi in 2021 — 2025 proudly marks 30 years of trusted service.",
      img: img4,
    },
  ];

  return (
    <>
      {/* ✅ Pass navigate to Navbar */}
      <Navbar onNavigate={(path) => navigate(path)} />

      {/* Horizontal Scroll Section */}
      <section
        ref={containerRef}
        className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-white to-blue-100"
      >
        <div className="flex w-[400vw] h-screen">
          {storyData.map((story, index) => (
            <div
              key={index}
              className="panel w-screen h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-20"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-lg text-center md:text-left"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-700">
                  {story.title}
                </h1>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  {story.text}
                </p>
              </motion.div>

              <motion.img
                src={story.img}
                alt={story.title}
                className="w-80 md:w-[30rem] mt-8 md:mt-0 md:ml-12 rounded-2xl shadow-xl object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Vertical Section - How It Started */}
      <section className="relative bg-white py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-12"
          >
            How It Started
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto"
          >
            What started as a support operation in 1995 quickly became a
            long-term commitment to quality, reliability, and innovation. As
            technology evolved, we continuously invested in testing,
            refurbishment, and logistics to ensure service providers could scale
            with confidence. Three decades later, our foundation remains the
            same — precision, trust, and partnership.
          </motion.p>

          {/* Tilted Images */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.img
              src={boss1}
              alt="Founder at work"
              className="w-72 md:w-80 rounded-xl shadow-xl transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500 object-cover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <motion.img
              src={boss2}
              alt="Early office days"
              className="w-72 md:w-80 rounded-xl shadow-xl transform rotate-[6deg] hover:rotate-0 transition-transform duration-500 object-cover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Final Section - The Journey Forward */}
        <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-200 mt-20 py-24 md:py-40 overflow-hidden rounded-2xl">
          <div className="max-w-6xl mx-auto px-6 md:px-20 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6"
            >
              The Journey Forward
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16"
            >
              As we move ahead, our mission stays rooted in innovation and
              collaboration. From humble beginnings to global partnerships,
              every milestone has shaped who we are. Together, we’re building a
              future where ideas become impact — one project at a time.
            </motion.p>

            {/* Animated Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-20">
              {[
                { label: "Years in Business", value: "30+" },
                { label: "Devices Tested & Refurbished", value: "1M+" },
                { label: "Network Technologies Supported", value: "5+" },
                { label: "Canada Wide Coverage", value: "100%" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
                >
                  <h3 className="text-4xl font-extrabold text-blue-700">
                    {item.value}
                  </h3>
                  <p className="text-gray-600 mt-2 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Floating Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.img
                src={img4}
                alt="Future Vision"
                className="w-[22rem] md:w-[32rem] rounded-3xl shadow-2xl object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <motion.button
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0px 4px 25px rgba(139,92,246,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log("Navigate triggered");
                  navigate("/bookmeeting");
                }}
                className="mt-7 inline-flex items-center px-8 py-3 rounded-full font-medium text-white 
                                     bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:opacity-90 transition-all duration-300"
              >
                Join Our Journey →
              </motion.button>
            </motion.div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default StorySection;
