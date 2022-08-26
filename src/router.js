import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./pages/components/ScrollToTop.js";

import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import About from "./pages/About";
import Explore from "./pages/Explore";
import CreateCurriculum from "./pages/CreateCurriculum";

export default function Paths() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/c" element={<Curriculum />} />
          <Route path="/a" element={<About />} />
          <Route path="/e" element={<Explore />} />
          <Route path="/cc" element={<CreateCurriculum />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}
