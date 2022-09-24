// Default output externally completed curriculums

import "./external.css";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import firebaseApp from "../../data/config.js";
import { useState, useEffect } from "react";

import { Loader, subjectList } from "../QualityofLife";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "external_curriculums");

export default function ExternalCurriculums() {
  const [loading, setLoading] = useState(true);

  const [curriculums, setCurriculums] = useState([]);
  const q = query(curriculumRef);

  useEffect(
    () => {
      onSnapshot(q, (snapshot) => {
        setCurriculums(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            Data: [doc.data()]
          }))
        );
      });
      setLoading(false);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  //Solution 3: Create lists of the selected subject from Firebase
  const curriculumsList = [];
  for (var j = 0; j < curriculums.length; j++) {
    curriculumsList.push(curriculums[j].Data[0].Subjects[0]);
  }

  const [activeFilters, setActiveFilters] = useState(
    document.getElementsByClassName("checked").length
  );

  function toggleCheck(e, subject) {
    const match = document.getElementById(subject);
    if (e.target.checked) {
      console.log(`✅ ${subject} Checkbox is checked`);
      match.classList.add("checked");
      setActiveFilters(document.getElementsByClassName("checked").length);

      for (var j = 0; j < curriculums.length; j++) {
        if (subject === curriculumsList[j]) {
          const q = query(
            curriculumRef,
            where("Subjects", "array-contains", subject)
          );
          setLoading(true);
          onSnapshot(q, (snapshot) => {
            setCurriculums(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                Data: [doc.data()]
              }))
            );
          });
          setLoading(false);
          break;
        }
      }
    } else {
      console.log(`⛔️ ${subject} Checkbox is NOT checked`);
      match.classList.remove("checked");
      setActiveFilters(document.getElementsByClassName("checked").length);

      const q = query(curriculumRef);
      onSnapshot(q, (snapshot) => {
        setCurriculums(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            Data: [doc.data()]
          }))
        );
      });
      setLoading(false);
    }
    console.log(activeFilters);
  }

  return (
    <>
      <div className="filter-container">
        Filter by Subjects:
        {subjectList.map((subject, i) => {
          return (
            <div className="check-div">
              <input
                key={i}
                type="checkbox"
                id={subject}
                onChange={(e) => toggleCheck(e, subject)}
              />
              <label for={subject} className="check-label">
                {subject}
              </label>
            </div>
          );
        })}
        {activeFilters > 0 ? (
          <>
            <br />
            <br />
            <span>Only one Filter can be selected at a time.</span>
          </>
        ) : null}
      </div>

      <Loader show={loading} />
      <div className="data-ouput">
        <div className="external-curriculums-wrapper">
          {curriculums.map(({ Data }, index) => {
            return (
              <div key={index}>
                {Data.map(
                  ({ Title, Link, LastUpdated, Authors, Subjects }, i) => {
                    return (
                      <a href={Link}>
                        <div className="each-ext-cur-div" key={i}>
                          <p className="ext-cur-title">{Title}</p>
                          <div className="ext-cur-summary">
                            <p>
                              Last Updated:
                              {LastUpdated ? (
                                <span> {LastUpdated}</span>
                              ) : (
                                " N/A"
                              )}
                            </p>
                            <p>By {Authors}</p>
                          </div>
                          {Subjects.map((e, i) => {
                            return (
                              <div className={e + " subject-tag"} key={i}>
                                <p className={e}>{e}</p>
                              </div>
                            );
                          })}
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
    </>
  );
}

// Solution One: Get Elements by Class Name and go Up
// const tags = document.getElementsByClassName("subject-tag");
// console.log(tags.item(0));
// console.log(subject);
// for (var i = 0; i < tags.length; i++) {
//   console.log(tags.item(i));
// }
//   // if (tags[i].className === subject) {
//   //   console.log("Showing Curriculums");
//   // } else {
//   //   console.log("Hiding Curriculums");
//   //}
// }

// // Solution two:
// // Re-access firebase db with collection
// const subjectRef = query(
//   curriculumRef,
//   where("Subjects", "array-contains", "Languages")
// );
// useEffect(
//   () => {
//     onSnapshot(subjectRef, (snapshot) => {
//       setCurriculums(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           Data: [doc.data()]
//         }))
//       );
//     });
//     setLoading(false);
//   }, // eslint-disable-next-line react-hooks/exhaustive-deps
//   []
// );

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
