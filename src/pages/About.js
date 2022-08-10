// About page
// For the learning journey. ad iter discendi / pro iter discendi
// iter学
// From (<em>lu</em>) 路 and journey (as in English)
//  (wei le xuexi zhilu)为了学习之旅

import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h2>About</h2>
      <p>
        From <em>iter</em>, Latin for journey, trip, course, path and (
        <em>xue</em>) 学, Chinese for comprehend, learning, knowledge.
      </p>
      <p>
        <em>ad iter discendi.</em>
      </p>
      <p>Images on home page created by DALL-E 2 X Angus.</p>
      <Link className="link" to="/">
        Back to Home
      </Link>
    </>
  );
}
