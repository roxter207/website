import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTotop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top smoothly when route changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // no visual output
};

export default ScrollTotop;
