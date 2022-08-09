// About page

import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h2>About</h2>
      <Link className="link" to="/">
        Back to Home
      </Link>
    </>
  );
}
