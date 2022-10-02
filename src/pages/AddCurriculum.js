// For submitting externally completed curriculums

import "./add.css";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import firebaseApp from "../data/config.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { subjectList } from "../components/Misc";

import ExternalExamples from "../data/ExternalExamples";
import { BtnHome, BtnExplore } from "../components/Buttons";
import { TextAddCurriculum } from "./text/Text";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "external_curriculums");

export default function AddCurriculum() {
  const [authorsName, setAuthorsName] = useState("");
  const [lastUpdate, setLastUpdate] = useState("");
  const [curriculumLink, setCurriculumLink] = useState("");
  const [title, setTitle] = useState("");
  // const [curriculumType] = useState("");
  const [subjects, setSubjects] = useState(["Art"]);

  var msg = document.getElementById("form-message");
  function tempMessage() {
    msg.textContent = "";
    msg.className = "";
  }

  const submit = (e) => {
    e.preventDefault();
    if (authorsName && curriculumLink && title && lastUpdate) {
      addDoc(curriculumRef, {
        created: serverTimestamp(),
        Authors: authorsName,
        LastUpdated: lastUpdate,
        Link: curriculumLink,
        Title: title,
        // Type: curriculumType,
        Subjects: [subjects],
      });
      console.log("Curriculum successfully submitted.");
      msg.classList.add("msg-successful");
      msg.textContent = "Curriculum successfully submitted.";
      setTimeout(tempMessage, 5000);
      setAuthorsName("");
      setLastUpdate("");
      setCurriculumLink("");
      setTitle("");
      setSubjects(["Art"]);
    } else {
      msg.classList.add("msg-error");
      msg.textContent = "All fields required.";
      setTimeout(tempMessage, 5000);
    }
  };

  return (
    <>
      <h2 className="theme-h2">Add a Curriculum</h2>
      <div className="centered-p warning">
        <img
          className="warning-icon"
          src="https://cdn-icons-png.flaticon.com/512/5932/5932058.png"
        />
        Do you know a curriculum that has not yet been added?
      </div>
      <div className="centered-p">
        <TextAddCurriculum />
      </div>
      <div className="form-div">
        <form className="add-form" onSubmit={submit}>
          <span id="form-message"></span>
          <div className="form-small-input-div">
            <label className="form-label">
              <div className="tooltip">
                Subject
                <span className="tooltiptext">
                  Choose the closest matching subjects or categories the
                  curriculum is part of.
                </span>
              </div>
              <select
                className="form-select"
                value={subjects}
                onChange={(e) => setSubjects(e.target.value)}
              >
                {subjectList.map((e, index) => {
                  return (
                    <option key={index} value={e}>
                      {e}
                    </option>
                  );
                })}
              </select>
            </label>
            <label className="form-label">
              <div className="tooltip">
                Author(s)
                <span className="tooltiptext">Enter one or more authors</span>
              </div>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Authors"
                value={authorsName}
                onChange={(e) => setAuthorsName(e.target.value)}
              />
            </label>
            <label className="form-label">
              Title
              <input
                type="text"
                className="form-input"
                placeholder="Curriculum Example"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="form-label">
              <div className="tooltip">
                Link
                <span className="tooltiptext">
                  A web link or even public drive or folder.
                </span>
              </div>
              <input
                type="text"
                className="form-input"
                placeholder="https://examplecurriculum.site"
                value={curriculumLink}
                onChange={(e) => setCurriculumLink(e.target.value)}
              />
            </label>
            <label className="form-label">
              <div className="tooltip">
                Last Updated
                <span className="tooltiptext">
                  Just the year is fine, but including the month is better.
                </span>
              </div>
              <input
                type="text"
                className="form-input"
                placeholder="Month, YYYY"
                value={lastUpdate}
                onChange={(e) => setLastUpdate(e.target.value)}
              />
            </label>
          </div>

          <input
            className="theme-btn"
            type="submit"
            value="Submit Curriculum"
          />
        </form>
      </div>
      <div className="centered-p">
        <p>
          Bear in mind that curriculums come in many shapes and sizes. It is
          encouraged that any curriculum submitted is thoughtful and high
          quality. Here is a more comprehensive set of rationales and
          guidelines, or TLDR; see this checklist before submitting.
        </p>
      </div>

      <h3 className="theme-h3">Good External Curriculum Examples</h3>
      <ExternalExamples />

      <Link className="link" to="/essays">
        <button className="cta-link">What Makes a Good Curriculum?</button>
      </Link>
      <Link className="link" to="/essays">
        <button className="cta-link">How do I Create my Own Curriculum?</button>
      </Link>

      <BtnHome />
      <BtnExplore />
    </>
  );
}
