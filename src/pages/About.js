// About page with imported text components from md
//      1. Nice Title
//      2. Short Sentence
//      3. 2-3 Meaty, concise Paragraphs.
//      4. Nice Links back to Explore.
//      5. Subtle Link to comprehensive Essays.

import { ArrowBtn } from "../components/Buttons";
import { TextAbout } from "../text/Text";
import ExternalExamples from "../data/ExternalExamples";

export default function About() {
  return (
    <>
      <h2 className="theme-h2" id="about-h2">
        About
      </h2>
      <TextAbout />

      <ArrowBtn link="/" text="Home" />
      <ArrowBtn link="/explore" text="Explore Curriculums" />

      <h3 className="theme-h3">Curriculum Examples</h3>
      <ExternalExamples/>

      <p className="centered-p">
          <p>Iters.to is in early stages; a result of experimentation made mostly for ease of 
          personal use since I regularly read, compare and do my best undertaking curriculums. </p>
          <p>Personal and collective challenges and creating good curriculums in more detail:</p>
      </p>
      <ArrowBtn link="/essays" text="More Info" />

    </>
  );
}
