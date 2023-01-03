import { Routes, Route, Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/Misc.js";

import About from "./pages/static/About";
import Info from "./pages/static/Info.js";
import CurriculumInfo from "./pages/static/CurriculumInfo";
import NotFound from "./pages/static/NotFound.js";
import Accept from "./pages/admin/Accept.js";

import UserProfile from "./pages/agents/UserProfile.js";
import UserProfileEntries from "./pages/agents/UserEntries.js";
import UserProfileSaved from "./pages/agents/UserSaved";
import UserProfileDetails from "./pages/agents/UserDetails.js";

import ExternalPage from "./pages/externals/ExternalPage.js";
import AddCurriculum from "./pages/externals/AddCurriculum.js";

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
          <Route path="/explore" element={<Explore />} />
          <Route path="/all" element={<All />} />
          <Route element={<Layout />}>
            <Route path="/agent/:name" element={<UserProfile />}>
              <Route path="saved" element={<UserProfileSaved />} />
              <Route path="entries" element={<UserProfileEntries />} />
              <Route path="profile" element={<UserProfileDetails />} />
            </Route>
            <Route path="/iters/:sortTitle" element={<ExternalPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />
            <Route path="/curriculuminfo" element={<CurriculumInfo />} />
            <Route path="/add" element={<AddCurriculum />} />
            <Route path="/admin/accept" element={<Accept />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
}
