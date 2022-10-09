// For submitting externally completed curriculums

import "./add.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../data/config.js";
import { useState } from "react";
import Select from "react-select";
import { optionList } from "../Misc";

const curriculumRef = collection(db, "submitted_curriculums");

export default function AddForm() {
  const [authorsName, setAuthorsName] = useState("");
  const [lastUpdate, setLastUpdate] = useState("");
  const [curriculumLink, setCurriculumLink] = useState("");
  const [title, setTitle] = useState("");
  const [subjects, setSubjects] = useState();
  // const [curriculumType] = useState("");

  var msg = document.getElementById("form-message");
  function tempMessage() {
    msg.textContent = "";
    msg.className = "";
  }

  const [validUrl, setValidUrl] = useState(false);
  function CheckLink(e) {
    setCurriculumLink(e.target.value);
    setValidUrl(e.target.checkValidity());
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(authorsName, lastUpdate, curriculumLink, title, subjects);
    if (authorsName && validUrl && title && lastUpdate && subjects) {
      try {
        addDoc(curriculumRef, {
          created: serverTimestamp(),
          Authors: authorsName,
          LastUpdated: lastUpdate,
          Link: curriculumLink,
          Title: title,
          Subjects: subjects,
        });
        console.log("Curriculum successfully submitted.");
        msg.classList.add("msg-successful");
        msg.textContent = "Curriculum successfully submitted.";
        setTimeout(tempMessage, 5000);
        setAuthorsName("");
        setLastUpdate("");
        setCurriculumLink("");
        setTitle("");
        setSubjects("");
      } catch (error) {
        console.log(error);
        msg.classList.add("msg-error");
        msg.textContent = "There was an error (see console).";
      }
    } else if (!validUrl) {
      msg.classList.add("msg-error");
      msg.textContent = "Enter a valid URL.";
    } else {
      msg.classList.add("msg-error");
      msg.textContent = "All fields required.";
    }
    setTimeout(tempMessage, 5000);
  };

  const [selectedOptions, setSelectedOptions] = useState();
  function handleSelect(data) {
    setSelectedOptions(data);
    if (data.length > 0) {
      let subs = [];
      for (var j = 0; j < data.length; j++) {
        subs.push(data[j].value);
        setSubjects(subs);
      }
    } else setSubjects("");
  }

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
                type="url"
                className="form-input"
                placeholder="https://examplecurriculum.site"
                value={curriculumLink}
                onChange={(e) => CheckLink(e)}
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
                pattern="[0-9]{4}"
                className="form-input"
                placeholder="YYYY"
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
