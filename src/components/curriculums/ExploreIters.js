// Externally completed curriculums for Explore

import { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { QueryFilterContains } from "../../data/Query";

import "./external.css";
import ExternalIcon from "../../data/images/external-link.svg";
import { Icon, HostLink } from "./LinkPreview";
import { subjectList } from "../Misc";
import { ArrowBtn } from "../buttons/Buttons";

export default function ExploreIters() {
  const [simple, setSimple] = useState(false);
  const [curriculums, setCurriculums] = useState([]);
  const [activeFiltersNum, setActiveFiltersNum] = useState(0);
  const [activeSubjects, setActiveSubjects] = useState([]);

  QueryFilterContains(setCurriculums, activeFiltersNum, activeSubjects);

  function ToggleSimple() {
    setSimple(!simple);
  }

  function ToggleCheck(e, subject) {
    const match = document.getElementById(subject);
    match.classList.toggle("checked");
    if (e.target.checked) {
      console.log(`✅ ${subject} Checkbox is checked`);
      const next_array = [...activeSubjects, subject];
      setActiveSubjects(next_array);
    } else {
      console.log(`⛔️ ${subject} Checkbox is NOT checked`);
      const index = activeSubjects.indexOf(subject);
      const next_arr = [
        ...activeSubjects.slice(0, index),
        ...activeSubjects.slice(index + 1),
      ];
      setActiveSubjects(next_arr);
    }
    setActiveFiltersNum(document.getElementsByClassName("checked").length);
  }

  return (
    <>
      <div className="filter-container">
        <h3 className="filter-title">Filter by Subjects: </h3>
        {subjectList.map((subject, i) => {
          return (
            <div className="check-div" key={i}>
              <input
                type="checkbox"
                id={subject}
                onChange={(e) => ToggleCheck(e, subject)}
              />
              <label htmlFor={subject} className="check-label">
                {subject}
              </label>
            </div>
          );
        })}
        {activeFiltersNum > 0 ? (
          <div className="selected-div">
            <span className="selected-title">Selected Subjects: </span>
            {activeSubjects.map((e, i) => {
              return (
                <span className="subject-tag" key={i}>
                  {e}
                </span>
              );
            })}
            <div style={{ margin: "10px 0 -10px" }}>
              Total Curriculums Displayed: {curriculums.length}
            </div>
          </div>
        ) : (
          ""
        )}
        {activeFiltersNum == 0 ? <div id="max-msg">Select a Subject.</div> : ""}
        {activeFiltersNum > 9 ? (
          <div id="max-msg">10 Maximum Filters Reached</div>
        ) : (
          ""
        )}
      </div>

      <div className="data-ouput" style={{ minHeight: 200 }}>
        <div
          className={simple ? "simple-wrapper" : `external-curriculums-wrapper`}
        >
          {curriculums.map(({ Data, id }, index) => {
            return (
              <div key={index}>
                {Data.map(
                  (
                    { Title, Link, LastUpdated, Authors, Subjects, sortTitle },
                    i
                  ) => {
                    return (
                      <div
                        key={i}
                        className={simple ? "simple-each" : `each-ext-cur-div`}
                      >
                        <div className="ext-cur-title">
                          {/* The link in a link does not work */}
                          <a
                            className="ext-cur-title-link"
                            href={Link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {Title} &nbsp;
                            <img
                              style={{ height: 10 }}
                              src={ExternalIcon}
                              alt="external link"
                            />
                          </a>
                        </div>
                        <ReactLink
                          to={`/iters/${sortTitle}`}
                          state={{ id: id }}
                        >
                          <div
                            className={
                              simple ? "simple-summary" : "ext-cur-summary"
                            }
                          >
                            <p>
                              {simple ? (
                                <span>Last Updated: {LastUpdated}</span>
                              ) : (
                                <span>
                                  {LastUpdated} | {HostLink(Link)} {Icon(Link)}
                                </span>
                              )}
                            </p>

                            <p>{Authors}</p>
                          </div>
                          <div className="subject-tag-div">
                            {Subjects
                              ? Subjects.map((e, i) => {
                                  return (
                                    <span
                                      className={
                                        simple
                                          ? `${e} simple-subject`
                                          : `${e} subject-tag`
                                      }
                                      key={i}
                                    >
                                      {e}
                                    </span>
                                  );
                                })
                              : ""}
                          </div>
                        </ReactLink>
                      </div>
                    );
                  }
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="three-columns">
        <div className="marauto">
          <ArrowBtn link="/all" text="All Curriculums" />
          <div style={{ marginLeft: 10, marginTop: 10 }}>
            Total Curriculums: 30+
          </div>
        </div>
        <div className="marauto">
          <button className="toggle-simple" onClick={ToggleSimple}>
            ▶ Toggle {simple ? "Default Display  ⚙️" : "Simple Display  ⚪"}
          </button>
        </div>
        <div className="marauto">
          <ArrowBtn link="/add" text="Add a Curriculum" />
          <ArrowBtn link="/curriculuminfo" text="Info on Curriculums" />
        </div>
      </div>
    </>
  );
}

// // For adjusting GLOBAL Toggle Button Styles when Checked
// const [checked, setChecked] = useState(false);
// const [palette, setPalette] = useState("unchecked");
// useEffect(() => {}, [checked]);
// function toggleButton(e, sub) {
//   const match = document.getElementById(sub);
//   console.log(match);
//   if (e.target.id === sub) {
//     setChecked(true);
//     setPalette("checked");
//     if (checked) {
//       setChecked(false);
//       setPalette("unchecked");
//     }
//   }
// }
