// For submitting externally completed curriculums

import "./add.css";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import firebaseApp from "../../data/config.js";
import { useState } from "react";
import Select from "react-select";
import { optionList } from "../Misc";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "submitted_curriculums");

export default function AddForm() {
  const [authorsName, setAuthorsName] = useState("");
  const [lastUpdate, setLastUpdate] = useState("");
  const [curriculumLink, setCurriculumLink] = useState("");
  const [title, setTitle] = useState("");
  const [subjects, setSubjects] = useState(["Art"]);
  // const [curriculumType] = useState("");

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

  const [selectedOptions, setSelectedOptions] = useState();
  function handleSelect(data) {
    setSelectedOptions(data);
  }

  //var helper = document.getElementById("add-form-tooltip");
  const [helperText, setHelperText] = useState("Add a curriculum.");

  const HelperTextChange = {
    Title: "Catchy, informative, summative, not-too-clickbait title",
    Subjects: "The closest matching subjects the curriculum is part of",
    Link: "Wherever is easiest or best to share; website, video, diagram, public drive/folder, etc.",
    Authors:
      "Can be one or more authors, e.g. Saitama, Richard Feynman, anonymous",
    Updated: "Just the year, e.g. 2023 or 1995",
  };
  function HelperFunction(e) {
    if (e.id === "add-input-title") {
      setHelperText(HelperTextChange.Title);
    } else if (e.id === "add-input-subjects") {
      setHelperText(HelperTextChange.Subjects);
    } else if (e.id === "add-input-link") {
      setHelperText(HelperTextChange.Link);
    } else if (e.id === "add-input-authors") {
      setHelperText(HelperTextChange.Authors);
    } else if (e.id === "add-input-updated") {
      setHelperText(HelperTextChange.Updated);
    } else {
      setHelperText("");
    }
  }
  return (
    <>
      <div className="form-div">
        <form className="add-form" onSubmit={submit}>
          <span id="form-message"></span>
          <div id="add-form-tooltip">{helperText}</div>
          <div className="form-small-input-div">
            <label className="form-label">
              <input
                id="add-input-title"
                style={{ fontWeight: "bold", fontSize: "1.2em" }}
                type="text"
                className="form-input"
                placeholder="Curriculum Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onMouseOver={(e) => HelperFunction(e.target)}
                onFocus={(e) => HelperFunction(e.target)}
              />
            </label>
            <div
              id="add-input-subjects"
              onMouseEnter={(e) => HelperFunction(e.target)}
            >
              <label className="form-label">
                <Select
                  className="form-select"
                  options={optionList}
                  placeholder="Select subjects"
                  value={selectedOptions}
                  onChange={handleSelect}
                  isMulti
                />
              </label>
            </div>
            <label className="form-label">
              <input
                id="add-input-link"
                type="text"
                className="form-input"
                placeholder="https://examplecurriculum.site"
                value={curriculumLink}
                onChange={(e) => setCurriculumLink(e.target.value)}
                onMouseOver={(e) => HelperFunction(e.target)}
                onFocus={(e) => HelperFunction(e.target)}
              />
            </label>
            <label className="form-label">
              <input
                id="add-input-authors"
                type="text"
                className="form-input"
                placeholder="Enter Authors"
                value={authorsName}
                onChange={(e) => setAuthorsName(e.target.value)}
                onMouseOver={(e) => HelperFunction(e.target)}
                onFocus={(e) => HelperFunction(e.target)}
              />
            </label>
            <label className="form-label">
              <input
                id="add-input-updated"
                type="text"
                className="form-input"
                placeholder="Month, YYYY"
                value={lastUpdate}
                onChange={(e) => setLastUpdate(e.target.value)}
                onMouseOver={(e) => HelperFunction(e.target)}
                onFocus={(e) => HelperFunction(e.target)}
              />
            </label>
          </div>
          <input className="form-submit-btn" type="submit" value="Submit" />
          <img
            className="arrow-icon"
            src="https://cdn-icons-png.flaticon.com/512/271/271226.png"
          />
        </form>
      </div>
    </>
  );
}
