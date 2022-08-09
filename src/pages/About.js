// About page
// For the learning journey. ad iter discendi / pro iter discendi

import { Link } from "react-router-dom";

import Navbar from "./components/Navbar.js";

export default function About() {
  return (
    <>
      <Navbar />
      <h2>About</h2>
      <p>
        From (<em>lu</em>) 路 and journey (as in English).
      </p>
      <p>iter学</p>
      <p>
        <em>ad iter discendi. (wei le xuexi zhilu)</em> 为了学习之旅
      </p>
      <Link className="link" to="/">
        Back to Home
      </Link>
    </>
  );
}
