// About page with imported text components from md
//      1. Nice Title
//      2. Short Sentence
//      3. 2-3 Meaty, concise Paragraphs.
//      4. Nice Links back to Explore.
//      5. Subtle Link to comprehensive Essays.

import { ArrowBtn } from "../components/Buttons";
import { Link } from "react-router-dom";
import { TextAbout } from "../text/Text";

export default function About() {
  return (
    <>
      <h2 className="theme-h2" id="about-h2">
        About
      </h2>
    <p>Real edit test</p>
      <TextAbout />

      <ArrowBtn link="/" text="Home" />
      <ArrowBtn link="/explore" text="Explore Curriculums" />

      <p className="centered-p">
        P.S. There is a lot more to think about underneath the surface when it
        comes to curriculums, creating and curating pathways of education and
        learning. If you're interested, please indulge in our{" "}
        <Link className="link" to="/essays">
          essays
        </Link>
        .
      </p>
    </>
  );
}
