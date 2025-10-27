// LandingPage.jsx
import React from "react";
import Navbar from "./Navbar";
import warehouseBg from "../assets/warehouse.jpg"

const Mainpage1 = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col bg-gray-100 overflow-hidden">
        {/* Background image */}
        <img
          src={warehouseBg}
          alt="Warehouse"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay for dimming the image slightly */}
        <div className="absolute inset-0  bg-opacity-50 z-0"></div>

        
        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 md:py-32 text-white">
          {/* Left side */}
          <div className="w-full md:w-1/2 text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Canada&apos;s premiere custom logistics & warehousing solution provider
            </h1>

            <p className="text-lg md:text-xl font-semibold text-gray-200 leading-relaxed">
              Your partners in warehousing and fulfillment, inventory management, 
              transportation and distribution, and secure storage.
            </p>
          </div>

          {/* Right side (Request Quote box) */}
          <div className="w-full md:w-1/3 bg-white p-8 mt-10 md:mt-0 rounded-lg shadow-2xl text-black">
            <h2 className="text-3xl font-bold mb-6">Book a Meeting</h2>

            <form className="space-y-5">
              <div>
                <label className="block font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="youremail@email.com"
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-900 transition-all duration-300"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpage1;
