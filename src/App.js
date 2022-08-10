// Dev Plan-Log
// Once signed in, a user is able to create their own curriculum,
// upload their own resources, edit and delete their creations.
// -> Requires AUTH
// What parts of the resources and curriculums need to be filled in
// is determined in the database fields. -> Requires FIRESTORE CLOUD

// Need a better name: Journey, Curriculum, Lujourn, Iterlu, Luiter
// Discolu, Tabilu, Tabijourney, Manabulu, Xuejourn, Iterxue

import "./styles.css";
import { Link } from "react-router-dom";

import CurricHome from "./pages/CurricHome.js";

import exploreImg from "./images/explore.png";
import searchImg from "./images/search.png";

export default function App() {
  return (
    <>
      <div id="home-hero">
        <div className="hero-div">
          <h1 id="hero-h1">iterxue</h1>
        </div>
        <div id="hero-right" className="hero-div">
          <h3 id="hero-h3">
            Embark on a learning journey. Discover, create and share learning
            pathways.
          </h3>
        </div>
      </div>
      <div id="home-main-nav">
        <div className="home-main-btn-div">
          <Link className="home-main-btn link" to="/e">
            <h3 className="home-main-btn-h3">Explore</h3>
            <img
              className="home-main-img"
              alt="explore painting"
              src={exploreImg}
            />
          </Link>
        </div>
        <div className="home-main-btn-div">
          <Link className="home-main-btn link" to="/">
            <h3 className="home-main-btn-h3">Search</h3>
            <img
              className="home-main-img"
              alt="search painting"
              src={searchImg}
            />
          </Link>
        </div>
      </div>
      <CurricHome />
    </>
  );
}
