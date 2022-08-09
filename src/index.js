import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Curriculum from "./pages/Curriculum";
import About from "./pages/About";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/c" element={<Curriculum />} />
        <Route path="/a" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
