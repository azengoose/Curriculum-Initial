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
import Navbar from "./pages/components/Navbar.js";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div id="home-hero">
          <h1>iterxue</h1>
          <h3>Create and share curriculums and learning pathways.</h3>
        </div>
        <div id="home-main-nav">
          <div>
            <button>Explore</button>
            <img
              alt="explore painting"
              src="https://labs.openai.com/e/djeFoPly8ei0kkhnLgDhIZkP/original"
            />
          </div>
          <button>Search</button>
        </div>
        <CurricHome />
      </div>
      <footer>
        <Link className="link" to="/a">
          About
        </Link>
      </footer>
    </>
  );
}
