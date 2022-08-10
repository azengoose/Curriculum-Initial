import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./pages/components/ScrollToTop.js";
import Navbar from "./pages/components/Navbar.js";
import Footer from "./pages/components/Footer.js";

import App from "./App";
import Curriculum from "./pages/Curriculum";
import About from "./pages/About";
import Explore from "./pages/Explore";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/c" element={<Curriculum />} />
            <Route path="/a" element={<About />} />
            <Route path="/e" element={<Explore />} />
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>
);
