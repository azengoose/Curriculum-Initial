import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./pages/components/ScrollToTop.js";

import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import CreateCurriculum from "./pages/CreateCurriculum";
import AddCurriculum from "./pages/AddCurriculum.js";
import NotFound from "./pages/NotFound.js";

import Curriculum from "./pages/Curriculum";

export default function Paths() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<CreateCurriculum />} />
          <Route path="/add" element={<AddCurriculum />} />
          <Route path="/curriculum/:id" element={<Curriculum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}
