// For submitting externally completed curriculums

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
import { useState, useEffect } from "react";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "external_curriculums");

export default function AddCurriculum() {
  const [authorsName, setAuthorsName] = useState("");
  const [lastUpdate, setLastUpdate] = useState("");
  const [curriculumLink, setCurriculumLink] = useState("");
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addDoc(curriculumRef, {
      created: serverTimestamp(),
      Authors: authorsName,
      LastUpdated: lastUpdate,
      Link: curriculumLink,
      Title: title
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
      <h2 className="h2-theme">Submit Curriculum</h2>
      <div style={{ maxWidth: 500, margin: "auto", textAlign: "left" }}>
        <p>
          Submit externally completed curriculums. For example, these can be
          websites, blogs, uploaded videos, images, diagrams. Curriculums can
          only be submitted for pending. It is judged by the public in an
          intermediary period and by a rotating committee, before being
          established into the database proper.
        </p>
      </div>
      <div className="form-div">
        <form className="create-form">
          <div className="form-small-input-div">
            <label>
              Enter author name(s): {""}
              <input
                type="text"
                placeholder="Enter Authors"
                value={authorsName}
                onChange={(e) => setAuthorsName(e.target.value)}
              />
            </label>
            <label>
              Enter the title:
              <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Enter link:
              <input
                type="text"
                placeholder="Enter link"
                value={curriculumLink}
                onChange={(e) => setCurriculumLink(e.target.value)}
              />
            </label>
            <label>
              Enter last updated:
              <input
                type="text"
                placeholder="Enter last updated"
                value={lastUpdate}
                onChange={(e) => setLastUpdate(e.target.value)}
              />
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
        <h3 style={{ fontSize: "1.47em" }}>
          External Completed Curriculum Examples
        </h3>
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
