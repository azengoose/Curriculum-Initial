// Externally completed curriculums for Explore

import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import firebaseApp from "../../data/config.js";

import "./external.css";
import { Icon, HostLink } from "./LinkPreview";
import { Loader, subjectList } from "../Misc";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "external_curriculums");

export default function ExternalCurriculums() {
  const [loading, setLoading] = useState(true);
  const [simple, setSimple] = useState(false);
  const [curriculums, setCurriculums] = useState([]);

  const [activeFiltersNum, setActiveFiltersNum] = useState(0);
  const [activeSubjects, setActiveSubjects] = useState([]);

  function ToggleSimple() {
    setSimple(!simple);
  }

  function QueryFilterContains() {
    var q = query(curriculumRef);
    if (activeFiltersNum > 0) {
      q = query(
        curriculumRef,
        where("Subjects", "array-contains-any", activeSubjects)
      );
    }
    setLoading(true);
    onSnapshot(q, (snapshot) => {
      setCurriculums(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Data: [doc.data()],
        }))
      );
    });
    setLoading(false);
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

  useEffect(() => {
    QueryFilterContains();
    console.log("Use Effect Triggered");
  }, [activeSubjects]);

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
          </div>
        ) : (
          ""
        )}
      </div>

      <Loader show={loading} />
      <div className="data-ouput">
        <div
          className={simple ? "simple-wrapper" : `external-curriculums-wrapper`}
        >
          {curriculums.map(({ Data }, index) => {
            return (
              <div key={index}>
                {Data.map(
                  ({ Title, Link, LastUpdated, Authors, Subjects }, i) => {
                    return (
                      <a
                        href={Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={i}
                      >
                        <div
                          className={
                            simple ? "simple-each" : `each-ext-cur-div`
                          }
                        >
                          <p className="ext-cur-title">{Title}</p>

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
                        </div>
                      </a>
                    );
                  }
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button className="toggle-simple" onClick={ToggleSimple}>
          ⚙️ Toggle {simple ? "Default" : "Simple"} Display
        </button>
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
// {subjectList.map((subject, i) => {
//   return (
//     <>
//       {/* <ToggleSwitch className={palette + " toggle"} label={subject} /> */}
//       <button
//         key={i}
//         id={subject}
//         className={palette + " toggle"}
//         onClick={(e) => toggleButton(e, subject)}
//       >
//         {subject}
//       </button>
//     </>
//   );
// })}

// Create lists of the selected subject from Firebase
// const curriculumsList = [];
// for (var j = 0; j < curriculums.length; j++) {
//   curriculumsList.push(curriculums[j].Data[0].Subjects[0]);
// }
// Query for ONE Subject
// for (var j = 0; j < curriculums.length; j++) {
//   if (subject === curriculumsList[j]) {
//     const q = query(
//       curriculumRef,
//       where("Subjects", "array-contains", subject)
//     );
//     setLoading(true);
//     onSnapshot(q, (snapshot) => {
//       setCurriculums(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           Data: [doc.data()],
//         }))
//       );
//     });
//     setLoading(false);
//     break;
//   }
//}
