// A testing page for the creating curriculum form
// and outputting data of all current curriculums

import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query
} from "firebase/firestore";
import firebaseApp from "../data/config.js";
import AddCurriculum from "./AddCurriculum.js";
import { useState, useEffect } from "react";

const db = getFirestore(firebaseApp);
const OldcurriculumRef = collection(db, "curriculums");
const curriculumRef = collection(db, "external_curriculums");
// const testRef = collection(db, "test");
// const docRef = doc(db, "test", "3nPSLe3DWA7MCuxlU2BB");

export default function CreateCurriculum() {
  const [designerName, setDesignerName] = useState("");
  const submit = (e) => {
    e.preventDefault();
    addDoc(curriculumRef, {
      created: serverTimestamp(),
      Designers: designerName,
      Duration: "1-2 Months",
      Location: "Online",
      Pricing: "Free"
    });
    console.log("added name");
  };

  const [curriculums, setCurriculums] = useState([]);
  const q = query(curriculumRef);

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setCurriculums(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Data: [doc.data()]
        }))
      );
    });
  }, []);

  return (
    <>
      <h2 className="h2-theme">Create Curriculum</h2>
      <div style={{ maxWidth: 500, margin: "auto", textAlign: "left" }}>
        <p>
          Curriculums can only be submitted for pending. It is judged by the
          public in an intermediary period and by a rotating committee, before
          being established into the database proper.
        </p>
      </div>
      <AddCurriculum />
      <div className="form-div">
        <form className="create-form">
          <div className="form-small-input-div">
            <label>
              Enter your name: {""}
              <input
                type="text"
                placeholder="Enter Designer Name"
                value={designerName}
                onChange={(e) => setDesignerName(e.target.value)}
              />
            </label>
            <label>
              Enter the duration: {""}
              <input placeholder="Duration" />
            </label>
            <label>
              Choose the location: {""}
              <input placeholder="Location" />
            </label>
            <label>
              Enter estimated or exact pricing: {""}
              <input placeholder="Pricing" />
            </label>
          </div>
          <label>
            Enter description:
            <textarea placeholder="Description" />
          </label>
          <button className="theme-btn" type="submit" onClick={submit}>
            Submit Curriculum
          </button>
        </form>
      </div>
      <div className="data-ouput">
        <h3 style={{ fontSize: "1.47em" }}>Internal Curriculum Examples</h3>
        <div className="external-curriculums-wrapper">
          {curriculums.map(({ Data }, index) => {
            return (
              <div key={index}>
                {Data.map(({ Title, Link, LastUpdated, Authors }, i) => {
                  return (
                    <div className="each-ext-cur-div" key={i}>
                      <a href={Link}>{Title}</a>
                      <p>
                        Last Updated:
                        {LastUpdated ? <span> {LastUpdated}</span> : " N/A"}
                      </p>{" "}
                      <p>designed by {Authors}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <button className="theme-btn">
        <Link className="link" to="/">
          Back to Home
        </Link>
      </button>
    </>
  );
}

// // Working Code to Log single Doc and several Docs
// const docSnap = getDoc(docRef);
// docSnap.then((docSnap) => {
//     console.log("Document data:", docSnap.data())
// });
//
// const Docs = getDocs(testRef).then((snap) => {
//   snap.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//     return <p>hello</p>;
//   });
// });
