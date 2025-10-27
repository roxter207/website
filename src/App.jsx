import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landing";
import Equipment from "./components/Equipment";
import Print from "./components/Print";
import Fulfilment from "./components/Fulfilment";
import Accessibilitysection from "./components/Accessibilitysection";
import Career from "./components/Career";
import BookMeeting from "./components/BookMeeting";
import ScrollTotop from "./components/ScrollTotop";
import StorySection from "./components/Storysection";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTotop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/print" element={<Print />} />
          <Route path="/fulfilment" element={<Fulfilment />} />
          <Route
            path="/accessibilitysection"
            element={<Accessibilitysection />}
          />
          <Route path="/career" element={<Career />} />
          <Route path="/bookmeeting" element={<BookMeeting />} />
          <Route path="/aboutus" element={<StorySection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
