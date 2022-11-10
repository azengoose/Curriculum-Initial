// About page with imported text components from md
//      1. Nice Title
//      2. Short Sentence
//      3. 2-3 Meaty, concise Paragraphs.
//      4. Nice Links back to Explore.
//      5. Subtle Link to comprehensive Essays.
import { Helmet } from "react-helmet";

import { ArrowBtn, Spacer } from "../components/Buttons";
import ExternalExamples from "../data/ExternalExamples";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Iters | About</title>
      </Helmet>
      <h2 className="theme-h2" id="about-h2">
        About
      </h2>

      <h3 className="p-h3">Iterations and Itineraries</h3>
      <p className="centered-p">
        <p>
          This site is a crossroads sign. Paths lay before you; maps crafted
          painstakingly by others so that you have a clearer route to travel,
          led by your own compass.
        </p>
        <p>
          <b>Iterations</b>: To adapt and be a positive force in our own
          environment, I think it is necessary to change and recreate ourselves
          many times over our lifetimes.
        </p>
        <p>
          <b>Itineraries</b>: Having a route or outline of a journey to learn is
          quite useful. Paths that can be accomplished in many ways, for all
          kinds of people and goals.
        </p>
        <p>
          <b>
            <em>iter </em>
          </b>
          (latin): journey, trip, route, course, path, road, passage.
        </p>
        <p>Explore curriculums made by others:</p>
      </p>
      <ArrowBtn link="/explore" text="Explore Curriculums" />

      <h3 className="theme-h3">Curriculum Examples</h3>
      <ExternalExamples />
      <Spacer height={20} />

      <p className="centered-p">
        <p>
          Iters.to is in early stages; a result of experimentation made mostly
          for ease of personal use since I regularly read, compare and do my
          best undertaking curriculums.{" "}
        </p>
        <p>
          A personal story, collective challenges and creating good curriculums
          in more detail:
        </p>
      </p>
      <ArrowBtn link="/info" text="More Info" />
      <Spacer height={60} />
    </>
  );
}
