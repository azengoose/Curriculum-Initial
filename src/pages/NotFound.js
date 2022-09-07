// For 404 or Not Found Pages

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div>
        <h2 className="h2-theme">Sorry for your loss. </h2>
        <h2>This page link doesn't exist. It happens.</h2>
        <p>
          Maybe try hitting rewind, or rechecking you've got the right link.
        </p>
        <p>Or instead, check out the homepage, or explore curriculums. </p>
        <button className="theme-btn">
          <Link className="link" to="/">
            Back to Home
          </Link>
        </button>
        <button className="theme-btn">
          <Link className="link" to="/e">
            Explore Other Curriculums
          </Link>
        </button>
        <p>
          If you want to find out more about the website you're currently on,
          see{" "}
          <Link className="link" to="/e">
            About Us.
          </Link>
        </p>
      </div>
    </>
  );
}
