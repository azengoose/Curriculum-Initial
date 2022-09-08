import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./pages/components/ScrollToTop.js";
import RouterGenerate from "./pages/components/RouterGenerate.js";

import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import CreateCurriculum from "./pages/CreateCurriculum";
import AddCurriculum from "./pages/AddCurriculum.js";
import NotFound from "./pages/NotFound.js";

import Curriculum from "./pages/Curriculum";

import { Link, useParams } from "react-router-dom";

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
          <Route path="/c/:id" element={<Curriculum />} />
          {RouterGenerate()}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}
