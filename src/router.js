import { Routes, Route, Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/Misc.js";

import About from "./pages/static/About";
import Info from "./pages/static/Info.js";
import CurriculumInfo from "./pages/static/CurriculumInfo";
import NotFound from "./pages/static/NotFound.js";
import Accept from "./pages/admin/Accept.js";

import UserProfile from "./pages/agents/UserProfile.js";
import UserProfileProgress from "./pages/agents/UserProgress.js";
import UserProfileCompleted from "./pages/agents/UserCompleted.js";
import UserProfileDetails from "./pages/agents/UserDetails.js";

import ExternalPage from "./pages/externals/ExternalPage.js";
import AddCurriculum from "./pages/externals/AddCurriculum.js";

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
          <Route path="/curriculum/:id" element={<Curriculum />} /> {/* Internals */}
          <Route path="/explore" element={<Explore />} />
          <Route path="/all" element={<All />} />
          <Route element={<Layout />}>
            <Route path="/agent/:name" element={<UserProfile/>}>
              <Route path="progress" element={<UserProfileProgress/>} />
              <Route path="completed" element={<UserProfileCompleted/>} />
              <Route path="profile" element={<UserProfileDetails/>} />
            </Route>
            <Route path="/iters/:sortTitle" element={<ExternalPage/>} /> {/* Externals */}
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
