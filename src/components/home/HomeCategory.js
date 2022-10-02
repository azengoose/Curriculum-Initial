import "./home.css";
import { subjectList } from "../Misc";
import { Link } from "react-router-dom";

export default function HomeCategory() {
  return (
    <>
      <div id="home-category-backdrop">
        <div className="home-category-wrapper">
          <p>Take me to: </p>A cover-up black div, with categories on the
          outset.
          {subjectList.map((e, i) => {
            return (
              <Link className="link" to="/explore" key={i}>
                <button className="home-subject-tag">
                  <p>{e}</p>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
