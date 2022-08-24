// SITE SUMMARY
// Once signed in, a user is able to create their own curriculum,
// upload their own resources, edit and delete their creations.
// Can be a private repo or submitted to the public.
// Unsigned, a user can browse public curriculums and resources
// and less importantly, can start making a curriculum (but
// needs to sign in to save it, then can share link)

// AIMS:
// To provide curated curriculums and sets of resources for online
//  and in person learning pathways.
// From this, people can have more clear goals and directions of
//  HOW to get somewhere but still not the WHY. This site provides
//  clarity in life, but also planning is useful, not plans.
// WHY: There are a lot of resources on the web, and not enough
//  curation of those into organised places.

// Names: Journey, Curriculum, Lujourn, Iterlu, Luiter
// Discolu, Tabilu, Tabijourney, Manabulu, Xuejourn, Iterxue

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
import CreateCurriculum from "./pages/CreateCurriculum";

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
            <Route path="/cc" element={<CreateCurriculum />} />
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>
);
