// For easy edit and importing of default buttons

import { Link } from "react-router-dom";

export function BtnHome() {
  return (
    <Link className="link" to="/">
      <button className="theme-btn">Back to Home</button>
    </Link>
  );
}
export function BtnExplore() {
  return (
    <Link className="link" to="/explore">
      <button className="theme-btn">Explore Curriculums</button>
    </Link>
  );
}
export function BtnAbout() {
  return (
    <Link className="link" to="/about">
      <button className="theme-btn">About</button>
    </Link>
  );
}
export function BtnAddCurriculum() {
  return (
    <Link className="link" to="/add">
      <button className="theme-btn">Add a Curriculum</button>
    </Link>
  );
}
export function BtnCreateCurriculum() {
  return (
    <Link className="link" to="/create">
      <button className="theme-btn">Create Curriculum</button>
    </Link>
  );
}
export function Spacer() {
  return <div style={{ height: 40 }}></div>;
}
