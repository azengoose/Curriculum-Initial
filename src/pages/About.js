// About page
// ad iter discendi / pro iter discendi
// iter学 (wei le xuexi zhilu) 为了学习之旅

// Import ESSAY Components
// Evaluating curriculums: qualitative-quantitative, trust, futurism
// Plans: quotes, futurism

import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h2 className="h2-theme">About</h2>
      <p>
        From <em>iter</em>, Latin for journey, trip, course, path and (
        <em>xue</em>) 学, Chinese for comprehend, learning, knowledge.
      </p>
      <p>
        <em>ad iter discendi.</em> <em>(wei le xuexi zhilu)</em> 为了学习之旅.
        For the journey of learning.
      </p>
      <p>Images on home page created by DALL-E 2 X Angus.</p>
      <Link className="link" to="/">
        Back to Home
      </Link>
    </>
  );
}
