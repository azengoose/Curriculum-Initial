// MVP SITE SUMMARY: 
// Unsigned, a user can browse public curriculums and resources.

// MVP AIMS:
// To provide curated curriculums and sets of resources for online
//  and in person learning pathways, and act as the main source of truth
//  as a crossroads sign for people to explore great resources.
// From this, people can have more clear goals and directions of
//  HOW to get somewhere but still not the WHY. This site provides
//  clarity in life, but also planning is useful, not plans.
// WHY: There are a lot of resources on the web, and not enough
//  curation of those into organised places.

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
