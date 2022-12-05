import { Routes, Route, Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/Misc.js";

import About from "./pages/static/About";
import Info from "./pages/static/Info.js";
import CurriculumInfo from "./pages/static/CurriculumInfo";
import AddCurriculum from "./pages/static/AddCurriculum.js";
import NotFound from "./pages/static/NotFound.js";
import Accept from "./pages/admin/Accept.js";

import CreateCurriculum from "./pages/internals/CreateCurriculum";
import Curriculum from "./pages/internals/Curriculum";

import Explore from "./pages/Explore";
import All from "./pages/All";

const Layout = () => (
  <div className="wrapper">
    <Outlet />
  </div>
);

export default function Paths() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route index path="/" element={<Explore />} />
          <Route path="/curriculum/:id" element={<Curriculum />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/all" element={<All />} />
          <Route element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />
            <Route path="/curriculuminfo" element={<CurriculumInfo />} />
            <Route path="/create" element={<CreateCurriculum />} />
            <Route path="/add" element={<AddCurriculum />} />
            <Route path="/admin/accept" element={<Accept />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
}
