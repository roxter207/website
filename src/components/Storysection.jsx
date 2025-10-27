import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import img1 from "../assets/img1.png";
import img2 from "../assets/img1.png";
import img3 from "../assets/img1.png";
import img4 from "../assets/img2.png";
import boss1 from "../assets/img1.png";
import boss2 from "../assets/img2.png";

gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const containerRef = useRef(null);

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
      title: "🌱 Where It All Began",
      text: "A small garage, one printer, and a big dream — that’s where our story started.",
      img: img1,
    },
    {
      title: "🚀 Our First Breakthrough",
      text: "We took our first major order and realized — we were meant for something bigger.",
      img: img2,
    },
    {
      title: "💡 Innovation Sparks",
      text: "From manual work to automation, we embraced technology to scale sustainably.",
      img: img3,
    },
    {
      title: "🌍 Growing Together",
      text: "Today, we serve clients worldwide — yet our values remain the same.",
      img: img4,
    },
  ];

  return (
    <>
      {/* Horizontal scroll story */}
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
              />
            </div>
          ))}
        </div>
      </section>

      {/* Vertical section - "How It Started" */}
      <section className="relative bg-white py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-12"
          >
            How It Started
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto"
          >
            What began as a humble effort to make an impact quickly became a
            journey of innovation, resilience, and leadership. Our founder
            believed in creating not just a business, but a culture — one that
            values creativity, teamwork, and customer trust. Over countless late
            nights and bold ideas, this dream transformed into what we proudly
            call our company today.
          </motion.p>

          {/* Tilted images */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.img
              src={boss1}
              alt="Founder at work"
              className="w-72 md:w-80 rounded-xl shadow-xl transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500 object-cover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src={boss2}
              alt="Early office days"
              className="w-72 md:w-80 rounded-xl shadow-xl transform rotate-[6deg] hover:rotate-0 transition-transform duration-500 object-cover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
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
              className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6"
            >
              The Journey Forward
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
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
                { label: "Projects Completed", value: "120+" },
                { label: "Happy Clients", value: "85+" },
                { label: "Team Members", value: "25+" },
                { label: "Years of Growth", value: "6+" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
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
              className="mt-16"
            >
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white text-lg md:text-xl font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
              >
                Join Our Journey
              </a>
            </motion.div>
          </div>

          {/* Parallax background accents */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div
              className="absolute top-10 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default StorySection;
