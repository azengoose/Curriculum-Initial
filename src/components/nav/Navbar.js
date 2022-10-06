// Not including authentication at the moment
// Contains Most Important Links

import "./navbar.css";
import { Link } from "react-router-dom";

import "../../data/config.js";

export default function Navbar() {
  return (
    <>
      <div>
        <header id="nav">
          <div id="nav-bar">
            <div className="nav-item">
              <Link id="nav-logo" className="link nav-link" to="/">
                iter
              </Link>
            </div>
            <div className="nav-right">
              <div className="nav-about nav-item">
                <Link className="link nav-link" to="/about">
                  About
                </Link>
              </div>
              <div className="nav-item">
                <Link className="link nav-link" to="/essays">
                  Essays
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
