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

import { Link } from "react-router-dom";

import InternalCurriculums from "./components/curriculums/InternalCurriculums.js";
import ExternalCurriculums from "./components/curriculums/ExternalCurriculums.js";

export default function Explore() {
  return (
    <>
      <div className="explore-curriculum">
        <h2 id="explore-curriculum-title">Explore Curriculums</h2>

        <h3 style={{ fontSize: "1.47em" }}>External Completed Curriculums</h3>
        <ExternalCurriculums />

        <h3 style={{ fontSize: "1.47em" }}>Internal Curriculums</h3>
        <InternalCurriculums />
      </div>
      <button className="theme-btn">
        <Link className="link" to="/">
          Back to Home
        </Link>
      </button>
    </>
  );
}

// const grid_style = {
//   display: "block"
// };
// function ToggleCurriculum() {
//   // Function is to Filter types of curriculums
//   //    Completed Page (and on other website), Video (eg YT),
//   //    Image/flow-chart diagram.
// }
