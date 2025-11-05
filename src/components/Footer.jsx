import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-6 text-white border-t border-gray-200 bg-gradient-to-br from-[#0b0f1a] via-[#111827] to-[#1f2937]">
      © {year} MDM Business Solutions. All rights reserved.
    </footer>
  );
};

export default Footer;
