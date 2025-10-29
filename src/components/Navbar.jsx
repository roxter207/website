import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const WEB_PORTAL_URL = import.meta.env.VITE_WEB_PORTAL_URL;
const BELL_RETURN_URL = import.meta.env.VITE_BELL_RETURN_URL;

const navItems = [
  { label: "home", type: "scroll", to: "home" },
  {
    label: "services",
    type: "dropdown",
    items: [
      { label: "Print Procurement", to: "/print", type: "page" },
      { label: "Bell Returns", to: BELL_RETURN_URL, type: "external" },
      { label: "Direct Mail Preparation", to: "mail", type: "scroll" },
      { label: "Fulfilment", to: "fulfilment", type: "scroll" },
    ],
  },
  {
    label: "about",
    type: "dropdown",
    items: [
      { label: "Security & Privacy", to: "security", type: "scroll" },
      { label: "Industries Served", to: "industries", type: "scroll" },
    ],
  },
  { label: "accessibility", type: "page", to: "/accessibilitysection" },
  { label: "career", type: "page", to: "/career" },
  { label: "contact", type: "scroll", to: "contact" },
  { label: "web portal", type: "external", to: WEB_PORTAL_URL },
  { label: "get a quote", type: "scroll", to: "contact", isButton: true }, // special button
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    if (!item) return;

    if (item.type === "scroll") {
      if (location.pathname === "/") {
        scroller.scrollTo(item.to, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -80,
        });
      } else {
        navigate("/");
        setTimeout(() => {
          scroller.scrollTo(item.to, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -80,
          });
        }, 600);
      }
    } else if (item.type === "page") {
      navigate(item.to);
    } else if (item.type === "external" && item.to) {
      window.open(item.to, "_blank", "noopener,noreferrer");
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-gray-200 ${
        scrolled
          ? "bg-white/40 backdrop-blur-md shadow-lg border-gray-200/40"
          : "bg-[#f3f4f6]/90 shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Logo"
          className="h-10 w-auto object-contain cursor-pointer"
          onClick={() => handleNavClick({ type: "scroll", to: "home" })}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-purple-700 font-semibold relative items-center">
          {navItems.map((item) => {
            if (item.type === "dropdown") {
              const isDropdownOpen =
                item.label === "services" ? servicesOpen : aboutOpen;
              const setDropdownOpen =
                item.label === "services" ? setServicesOpen : setAboutOpen;

              return (
                <li
                  key={item.label}
                  className="relative group cursor-pointer capitalize"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <div className="flex items-center hover:text-blue-900 transition-colors duration-300">
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 bg-white/80 backdrop-blur-md shadow-lg rounded-lg py-2"
                      >
                        {item.items.map((sub) => (
                          <li
                            key={sub.label}
                            className="px-4 py-2 hover:bg-purple-100 text-gray-700 transition-colors duration-200"
                            onClick={() => handleNavClick(sub)}
                          >
                            {sub.label}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            // Get A Quote button
            if (item.isButton) {
              return (
                <li key={item.label}>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(59,130,246,0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-colors"
                    onClick={() => handleNavClick(item)}
                  >
                    {item.label}
                  </motion.button>
                </li>
              );
            }

            return (
              <li
                key={item.label}
                className="hover:text-blue-900 cursor-pointer capitalize transition-colors duration-300"
                onClick={() => handleNavClick(item)}
              >
                {item.label}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-purple-700 transition-transform duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white/30 backdrop-blur-md shadow-lg"
          >
            <ul className="flex flex-col space-y-4 px-6 py-4 text-purple-700 font-semibold">
              {navItems.map((item) => {
                if (item.type === "dropdown") {
                  return (
                    <div key={item.label}>
                      <p className="capitalize font-bold mb-1">{item.label}</p>
                      <ul className="pl-4 space-y-2 text-gray-700">
                        {item.items.map((sub) => (
                          <li
                            key={sub.label}
                            className="hover:text-blue-900 cursor-pointer transition-colors duration-300"
                            onClick={() => handleNavClick(sub)}
                          >
                            {sub.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                // Get A Quote as normal link in mobile
                if (item.isButton) {
                  return (
                    <li
                      key={item.label}
                      className="hover:text-blue-900 cursor-pointer capitalize transition-colors duration-300"
                      onClick={() => handleNavClick(item)}
                    >
                      {item.label}
                    </li>
                  );
                }

                return (
                  <li
                    key={item.label}
                    className="hover:text-blue-900 cursor-pointer capitalize transition-colors duration-300"
                    onClick={() => handleNavClick(item)}
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
