import "./home.css";

import { BtnAddCurriculum, BtnCreateCurriculum } from "../components/Buttons";

export default function Home() {
  return (
    <>
      <div id="home-hero">
        <div className="hero-div">
          <h1 id="hero-h1">Explore</h1>
        </div>
        <div id="hero-right" className="hero-div">
          <h3 id="hero-h3">
            Embark on a learning journey. Discover, create and share learning
            pathways.
          </h3>
        </div>
      </div>

      <BtnCreateCurriculum />
      <BtnAddCurriculum />

    </>
  );
}
