// For submitting externally completed curriculums

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import firebaseApp from "../data/config.js";
import { useState } from "react";

import ExternalCurriculums from "./components/curriculums/ExternalCurriculums";
import { BtnHome, BtnCreateCurriculum, BtnExplore } from "./components/Buttons";
import { TextAddCurriculum } from "./text/Text";

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
      <h2 className="theme-h2">Submit Curriculum</h2>
      <div className="centered-p">
        <TextAddCurriculum />
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

      <h3 className="theme-h3">External Curriculum Examples</h3>
      <ExternalCurriculums />

      <BtnHome />
      <BtnExplore />
      <BtnCreateCurriculum />
    </>
  );
}
