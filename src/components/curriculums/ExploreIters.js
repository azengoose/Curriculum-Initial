// Externally completed curriculums for Explore

import { useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { QueryFilterContains } from "../../data/Query";

import "./external.css";
import ExternalIcon from "../../data/images/external-link.svg";
import { Icon, HostLink } from "./LinkPreview";
import { subjectList } from "../Misc";
import { ArrowBtn } from "../buttons/Buttons";
import { CountCollection } from "../../data/Ref";

export default function ExploreIters() {
  const [loading, setLoading] = useState(true);
  const [simple, setSimple] = useState(false);
  const [curriculums, setCurriculums] = useState([]);
  const [curriculumsCount, setCurriculumsCount] = useState("...");
  const [activeFiltersNum, setActiveFiltersNum] = useState(0);

  var isLocal = (localStorage.length > 0 || localStorage !== null) ? true : false;
  var startBlankCondition = ((localStorage.getItem("activeSubjects")) == 'null') ? true : false;
  const [activeSubjects, setActiveSubjects] = useState(() => {
    return (startBlankCondition) ? [] : JSON.parse(localStorage.getItem("activeSubjects"));
  });

  function activesFromLocal() {
    const local = JSON.parse(localStorage.getItem("activeSubjects"));
    if (local.length > 0 && local !== null) {
      for (let i = 0; i < local.length; i++) {
        const check = document.getElementById(local[i]);
        if (!check.checked) check.click()
      }
    }
  }
  function localUpdate() {
    localStorage.setItem("activeSubjects", JSON.stringify(activeSubjects));
  }

  useEffect(() => {
    if (isLocal) activesFromLocal();
    CountCollection("external_curriculums", setCurriculumsCount);
  }, []);

  useEffect(() => {
    if (isLocal) localUpdate();
    QueryFilterContains(setCurriculums, activeFiltersNum, activeSubjects);
    setLoading(false);
  }, [activeSubjects]);

  function ToggleCheck(e, subject) {
    const match = document.getElementById(subject);
    match.classList.toggle("checked");
    if (e.target.checked) {
      console.log(`✅ ${subject} Checkbox is checked`);
      const next_array = [...activeSubjects, subject];
      let unique = [...new Set(next_array)];
      setActiveSubjects(unique);
      console.log(curriculums, activeSubjects)
    } else {
      console.log(`⛔️ ${subject} Checkbox is NOT checked`);
      let next_arr = activeSubjects.filter((e) => e !== subject);
      setActiveSubjects(next_arr);
    }
    setActiveFiltersNum(document.getElementsByClassName("checked").length);
  }

  // Conditions for loading:
  // 1. NOT when curriculums.length == 0 || activeFiltersNum == 0
  // 2. NOT when curriculums.length > 0 && activeFiltersNum > 0
  // 3. When curriculums.length == 0 && activeFiltersNum > 0
  // 4. a

  function ToggleSimple() { setSimple(!simple) }
  // function matchLoadState() {
  //   if (curriculums.length == 0 && activeFiltersNum > 0 && loading) {
  //     return true;
  //   }
  //   else return false;
  // }
  console.log(curriculums.length == 0 && activeFiltersNum > 0 && loading)

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
              <label htmlFor={subject} className="check-label"> {subject} </label>
            </div>
          );
        })}
        {activeFiltersNum > 0 && (
          <div className="selected-div">
            <span className="selected-title">Selected Subjects: </span>
            {activeSubjects.map((e, i) => {
              return (<span className="subject-tag" key={i}>{e}</span>);
            })}
            <div style={{ margin: "10px 0 -10px" }}>
              Total Curriculums Displayed: {curriculums.length}
            </div>
          </div>)}
        {activeFiltersNum == 0 && <div id="max-msg">Select a Subject.</div>}
        {activeFiltersNum > 9 && <div id="max-msg">10 Maximum Filters Reached</div>}
      </div>

      {(curriculums.length == 0 && activeFiltersNum > 0 || loading) ? <div className="loader"> </div> :
        <div className="data-ouput" style={{ minHeight: 200 }}>
          <div className={simple ? "simple-wrapper" : `external-curriculums-wrapper`}>
            {curriculums.map(({ Data, id }, index) => {
              return (
                <div key={index}>
                  {Data.map(({ Title, Link, LastUpdated, Authors, Subjects, sortTitle }, i) => {
                    return (
                      <div key={i} className={simple ? "simple-each" : `each-ext-cur-div`}>
                        <div className={`ext-cur-title ${simple && 'simple-title'}`}>
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
                          state={{ id: id, filters: activeSubjects }}
                          className={simple ? "simple-reactlink" : ""}
                        >
                          <div className={simple ? "simple-summary" : "ext-cur-summary"}>
                            <p>
                              {simple ? (<span>Last Updated: {LastUpdated}</span>)
                                : (<span> {LastUpdated} | {HostLink(Link)} {Icon(Link)} </span>)
                              }
                            </p>
                            <p>{Authors}</p>
                          </div>
                          <div className="subject-tag-div">
                            {Subjects && Subjects.map((e, i) => {
                              return (
                                <span className={simple ? `${e} simple-subject` : `${e} subject-tag`} key={i}>{e}</span>
                              );
                            })}
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
      }

      <div className="three-columns">
        <div className="marauto">
          <ArrowBtn link="/all" text="All Curriculums" />
          <div style={{ marginLeft: 10, marginTop: 10 }}>
            Total Curriculums: {curriculumsCount}
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

// console.log("UE2 local, actives: ", JSON.parse(localStorage.getItem("activeSubjects")), activeSubjects)
// console.log("UE1 local, actives: ", local, activeSubjects)
// const index = activeSubjects.indexOf(subject);
// const next_arr = [
//   ...activeSubjects.slice(0, index),
//   ...activeSubjects.slice(index + 1),
// ];