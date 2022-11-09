import { Routes, Route, Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/Misc.js";

import About from "./pages/About";
import Info from "./pages/Info.js";
import Explore from "./pages/Explore";
import All from "./pages/All";
import CreateCurriculum from "./pages/CreateCurriculum";
import AddCurriculum from "./pages/AddCurriculum.js";
import Accept from "./admin/Accept.js";
import NotFound from "./pages/NotFound.js";

import Curriculum from "./pages/Curriculum";

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
