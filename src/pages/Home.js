import { Link } from "react-router-dom";

import CurricHome from "./CurricHome.js";

import exploreImg from "../images/explore.png";
import searchImg from "../images/search.png";

export default function Home() {
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
      <button className="theme-btn">
        <Link to="/cc">Create Curriculum</Link>
      </button>
      <CurricHome />
    </>
  );
}
