// About page with imported text components from md...
import { Helmet } from "react-helmet";

import { ArrowBtn, Spacer } from "../../components/buttons/Buttons";
import ExternalExamples from "../../data/examples/ExternalExamples";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Iters | About</title>
      </Helmet>
      <h2 className="theme-h2 theme-h2-short" id="about-h2">
        About
      </h2>

      <h3 className="theme-h3 p-h3">Iterations and Itineraries</h3>
      <div className="centered-p">
        <p>
          This site is a crossroads sign. Paths lay before you; maps crafted
          painstakingly by others so that you have a clearer route to travel,
          led by your own compass.
        </p>
        <p>
          <b>Iterations</b>: To adapt and be a positive force in our own
          environment, we have to change and recreate ourselves many times over
          our lifetimes.
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
      </div>
      <ArrowBtn link="/explore" text="Explore Curriculums" />

      <h3 className="theme-h3">Curriculum Examples</h3>
      <ExternalExamples />
      <Spacer height={20} />

      <div className="centered-p">
        <p>
          Iters.to is in early stages; a result of experimentation made mostly
          for ease of personal use since I regularly read, compare and do my
          best undertaking curriculums.{" "}
        </p>
      </div>
      <ArrowBtn link="/info" text="More Info" />
      <Spacer height={60} />
    </>
  );
}
