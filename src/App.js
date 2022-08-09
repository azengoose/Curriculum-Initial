// Dev Plan-Log
// Once signed in, a user is able to create their own curriculum,
// upload their own resources, edit and delete their creations.
// -> Requires AUTH
// What parts of the resources and curriculums need to be filled in
// is determined in the database fields. -> Requires FIRESTORE CLOUD

// Need a better name: Journey, Curriculum, Lujourn, Iterlu, Luiter
// Discolu, Tabilu, Tabijourney, Manabulu, Xuejourn

import "./styles.css";
import FireMain from "./data/FireMain.js";
import CurricHome from "./pages/CurricHome.js";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Lujourn</h1>
      <h3>Create and share curriculums and learning pathways.</h3>
      <Link className="link" to="/a">
        About
      </Link>
      <FireMain />
      <CurricHome />
    </div>
  );
}
