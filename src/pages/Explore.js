// EXPLORE PAGE.
// Graphical visual interface. Categorisations displayed visually.

// AIMS:
// Users should be able to access all types of media, e.g. images,
// videos, text, pages, vr.

import ExternalCurriculums from "../components/curriculums/ExternalCurriculums.js";
import { Helmet } from "react-helmet";

export default function Explore() {
  return (
    <>
      <Helmet>
        <title>Iters | Explore</title>
      </Helmet>
      <div className="explore-curriculum">
        <h2 className="theme-h2" id="explore-h2">
          Explore Curriculums
        </h2>

        {/* <h3 className="theme-h3">External Curriculums</h3> */}
        <ExternalCurriculums />
      </div>
    </>
  );
}

// function ToggleCurriculum() {
//   // Function is to Filter types of curriculums
//   //    Completed Page (and on other website), Video (eg YT),
//   //    Image/flow-chart diagram.
// }
