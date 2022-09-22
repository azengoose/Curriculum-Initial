// For 404 or Not Found Pages

import { Link } from "react-router-dom";
import { BtnHome, BtnExplore } from "../components/Buttons";

export default function NotFound() {
  return (
    <>
      <div className="wrapper">
        <h2 className="theme-h2">Sorry for your loss. </h2>
        <h2>This page link doesn't exist. It happens.</h2>
        <p>
          Maybe try hitting rewind, or rechecking you've got the right link.
        </p>
        <p>Or instead, check out the homepage, or explore curriculums. </p>
        <BtnHome />
        <BtnExplore />
        <p>
          If you want to find out more about the website you're currently on,
          see{" "}
          <Link className="link" to="/about">
            About Us.
          </Link>
        </p>
      </div>
    </>
  );
}
