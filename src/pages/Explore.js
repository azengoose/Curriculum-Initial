// EXPLORE PAGE.
// Graphical visual interface. Categorisations displayed visually.

// AIMS:
// Users should be able to access all types of media, e.g. images,
// videos, text, pages, vr.
// This page highlights the importance of this site as a curriculum
// directory that is unbiased and gives precedence to exploration
// rather than targetted search.

// 1. Basic Grid Layout
//      Max 4-5 Columns displayed masonry style.
// 2. Basic List Flex rows - search engine style.
// -> Easy implement with button style toggle
// 3. VISUAL EXPERIMENTATION IS SEPARATE PROJECT

import { BtnHome } from "../components/Buttons";
import { Link } from "react-router-dom";

import ExternalCurriculums from "../components/curriculums/ExternalCurriculums.js";

export default function Explore() {
  return (
    <>
      <div className="explore-curriculum">
        <h2 className="theme-h2">Explore Curriculums</h2>

        <div>
          <button className="">Simple Display</button>
          <button className="">Masonry Display</button>
          <button className="">Unique Display</button>
        </div>

        <h3 className="theme-h3">Externally Completed Curriculums</h3>
        <ExternalCurriculums />

      </div>
      <Link className="link" to="/essays">
        <button className="theme-btn">About Curriculums</button>
      </Link>

      <BtnHome />
    </>
  );
}

// function ToggleCurriculum() {
//   // Function is to Filter types of curriculums
//   //    Completed Page (and on other website), Video (eg YT),
//   //    Image/flow-chart diagram.
// }
