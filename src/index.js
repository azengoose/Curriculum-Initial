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
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
