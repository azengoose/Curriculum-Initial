import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div id="footer-div">
          <Link className="link nav-link" to="/e">
            Explore
          </Link>
          <Link className="link nav-link" to="/a">
            About
          </Link>
        </div>
      </footer>
    </>
  );
}
