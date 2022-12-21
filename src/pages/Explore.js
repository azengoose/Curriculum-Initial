// EXPLORE PAGE.
// Graphical visual interface. Categorisations displayed visually.

// Users should be able to access all types of media, e.g. images,
// videos, text, pages, vr.

import ExploreIters from "../components/curriculums/ExploreIters.js";
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
        <ExploreIters />
      </div>
    </>
  );
}
