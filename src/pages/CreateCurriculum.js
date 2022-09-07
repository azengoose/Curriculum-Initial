// For creating internally completed curriculums

import { Link } from "react-router-dom";
import { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import firebaseApp from "../data/config.js";
import { monthYear } from "./components/Time";

import InternalCurriculums from "./components/curriculums/InternalCurriculums.js";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "internal_curriculums");

export default function CreateCurriculum() {
  const [authorsName, setAuthorsName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [pricing, setPricing] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (authorsName && title) {
      addDoc(curriculumRef, {
        created: serverTimestamp(),
        Authors: authorsName,
        Duration: duration,
        Location: location,
        Pricing: pricing,
        LastUpdated: monthYear, // from imported Time
        Title: title,
        Description: description
      });
      console.log("added name");
    } else {
      const message = "All fields required.";
      var msg = document.getElementById("form-message");
      msg.textContent = message;
      function tempErrorMessage() {
        msg.textContent = "";
      }
      setTimeout(tempErrorMessage, 5000);
    }
  };

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
      <div className="form-div">
        <form className="create-form">
          <div className="form-small-input-div">
            <label>
              Enter title: {""}
              <input
                type="text"
                placeholder="A Complete Guide to Fishing"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Enter author names: {""}
              <input
                type="text"
                placeholder="Enter authors"
                value={authorsName}
                onChange={(e) => setAuthorsName(e.target.value)}
              />
            </label>
            <label>
              Enter the duration: {""}
              <input
                type="text"
                placeholder="Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </label>
            <label>
              Choose the location: {""}
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
            <label>
              Enter estimated or exact pricing: {""}
              <input
                type="text"
                placeholder="Pricing"
                value={pricing}
                onChange={(e) => setPricing(e.target.value)}
              />
            </label>
          </div>
          <label>
            Enter description:
            <textarea
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button className="theme-btn" type="submit" onClick={submit}>
            Submit Curriculum
          </button>
        </form>
      </div>

      <InternalCurriculums />

      <button className="theme-btn">
        <Link className="link" to="/">
          Back to Home
        </Link>
      </button>
      <button className="theme-btn">
        <Link className="link" to="/e">
          Explore Other Curriculums
        </Link>
      </button>
      <button className="theme-btn">
        <Link className="link" to="/ac">
          Add a Curriculum
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

// // For Testing a collection and doc
// const testRef = collection(db, "test");
// const docRef = doc(db, "test", "3nPSLe3DWA7MCuxlU2BB");
