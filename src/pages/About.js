// About page
//  with imported text components

import { Link } from "react-router-dom";
import TextAbout from "./text/TextAbout";
import { BtnHome } from "./components/Buttons";

export default function About() {
  return (
    <>
      <h2 className="theme-h2">About</h2>
      <TextAbout />

      <BtnHome />
      <button className="theme-btn">
        <Link className="link" to="/curriculum/Shorting-Linguistics">
          Shorting-Linguistics
        </Link>
      </button>
      <button className="theme-btn">
        <Link className="link" to="/curriculum/Shorting-Computer-Science">
          Shorting-Computer-Science
        </Link>
      </button>
    </>
  );
}
