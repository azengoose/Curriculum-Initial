// For submitting externally completed curriculums

import "./add.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../data/config.js";
import { useState } from "react";
import Select from "react-select";
import { optionList } from "../Misc";
import { Icon, HostLink } from "../curriculums/LinkPreview";

const curriculumRef = collection(db, "submitted_curriculums");

export default function AddForm() {
  const [authorsName, setAuthorsName] = useState("");
  const [lastUpdate, setLastUpdate] = useState("");
  const [curriculumLink, setCurriculumLink] = useState("");
  const [title, setTitle] = useState("");
  const [subjects, setSubjects] = useState();
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  // const [curriculumType] = useState("");

  // Submission Panel
  // const [confirmSubmit, setConfirmSubmit] = useState(false)
  // default is confirmSubmit is false, display the form
  // when press add another, set confirmSubmit to false and display the form
  //    and reset all values to null
  function ToggleSubmit() {
    setConfirmSubmit(!confirmSubmit);
    if (confirmSubmit) {
      setAuthorsName("");
      setLastUpdate("");
      setCurriculumLink("");
      setTitle("");
      setSubjects("");
    }
  }

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
        ToggleSubmit();
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
    Title: "Enter the informative, summative and not-too-clickbait title",
    Subjects: "The closest matching subjects the curriculum is part of",
    Link: "Wherever is easiest or best to share; website, video, diagram, public drive/folder, etc.",
    Authors:
      "Can be one or more authors, e.g. Saitama, Richard Feynman. Including an organisation may also be helpful, e.g. Tony Stark, Avengers",
    Updated: "Year last updated, e.g. 2027 or 1995",
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
        <form
          className={!confirmSubmit ? "add-form" : "disappear"}
          onSubmit={submit}
        >
          <div>
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
                  style={{ color: "dodgerblue" }}
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
            <div className="form-submit-btn-div">
              <input className="form-submit-btn" type="submit" value="Submit" />
              <img
                className="arrow-icon"
                src="https://cdn-icons-png.flaticon.com/512/271/271226.png"
              />
            </div>
          </div>
        </form>
        {!confirmSubmit ? (
          ""
        ) : (
          <div>
            <div className="thank-form">
              <div className="two-columns" id="thank-columns">
                <div>
                  <h3 className="theme-h3">Submission Successful!</h3>
                  <p>If you have any enquiries, reach out at iters.to@gmail.com</p>
                  <button className="outline-btn" onClick={ToggleSubmit}>
                    + Add Another Curriculum
                  </button>
                </div>
                <div>
                  <div id="add-submitted-div">
                    <p>Details of submission:</p>
                    {authorsName &&
                    validUrl &&
                    title &&
                    lastUpdate &&
                    subjects ? (
                      <a
                        href={curriculumLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="each-ext-cur-div">
                          <p className="ext-cur-title">{title}</p>
                          <div className="ext-cur-summary">
                            <p>
                              <span>
                                {lastUpdate} | {HostLink(curriculumLink)}
                                {Icon(curriculumLink)}
                              </span>
                            </p>
                            <p>{authorsName}</p>
                          </div>
                          <div className="subject-tag-div">
                            {subjects.map((e, i) => {
                              return (
                                <span className={`${e} subject-tag`} key={i}>
                                  {e}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="thank-form">
              <p className="thanks-text">
                Thanks, ありがとう, Gracias, 感谢, Gratias tibi ago, 감사합니다,
                شكرًا , Obrigado, Спасибо, Merci, धन्यवाद for contributing to
                this communal resource. You can find out more about this site in
                About.
              </p>
              <p className="thanks-text">
                All curriculums are reviewed by humans before being added into
                the database. You should be able to see the submission within
                1-3 days.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
