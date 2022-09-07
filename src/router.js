import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./pages/components/ScrollToTop.js";
import RouterGenerate from "./pages/components/RouterGenerate.js";

import Home from "./pages/Home";
import About from "./pages/About";
import Explore from "./pages/Explore";
import CreateCurriculum from "./pages/CreateCurriculum";
import AddCurriculum from "./pages/AddCurriculum.js";
import NotFound from "./pages/NotFound.js";

export default function Paths() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<About />} />
          <Route path="/e" element={<Explore />} />
          <Route path="/cc" element={<CreateCurriculum />} />
          <Route path="/ac" element={<AddCurriculum />} />
          {RouterGenerate()}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}
