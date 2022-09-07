// For submitting externally completed curriculums

import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import firebaseApp from "../data/config.js";
import { useState } from "react";

import ExternalCurriculums from "./components/curriculums/ExternalCurriculums";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "external_curriculums");

export default function AddCurriculum() {
  const [authorsName, setAuthorsName] = useState("");
  const [lastUpdate, setLastUpdate] = useState("");
  const [curriculumLink, setCurriculumLink] = useState("");
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (authorsName && curriculumLink && title && lastUpdate) {
      addDoc(curriculumRef, {
        created: serverTimestamp(),
        Authors: authorsName,
        LastUpdated: lastUpdate,
        Link: curriculumLink,
        Title: title
      });
      console.log("Curriculum successfully submitted.");
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
        <form className="create-form" onSubmit={submit}>
          <div className="form-small-input-div">
            <span id="form-message"></span>
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
          {/* <label>
            Enter description:
            <textarea required placeholder="Description" />
          </label> */}
          <input className="theme-btn" type="submit" />
        </form>
      </div>

      <h3 style={{ fontSize: "1.47em" }}>External Curriculum Examples</h3>
      <ExternalCurriculums />
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
        <Link className="link" to="/cc">
          Create a Curriculum
        </Link>
      </button>
    </>
  );
}
