import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <header id="nav">
          <div id="nav-bar">
            <div id="nav-title" className="nav-item">
              <Link className="link nav-link" to="/">
                iterxue
              </Link>
            </div>
            <div className="nav-right">
              <div className="nav-about nav-item">
                <Link className="link nav-link" to="/a">
                  About
                </Link>
              </div>
              <div id="user-container" className="nav-item">
                <div hidden id="user-pic"></div>
                <div hidden id="user-name"></div>
                <button
                  hidden
                  id="sign-out"
                  className="sign-btn mdl-js-ripple-effect mdl-color-text--white"
                >
                  Sign-out
                </button>
                <button
                  id="sign-in"
                  className="sign-btn mdl-js-ripple-effect mdl-color-text--white"
                >
                  <i className="material-icons">account_circle</i>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
