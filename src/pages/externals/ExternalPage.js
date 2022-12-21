// Each external curriculum has its own page, with data
//  retrieved based on the path parameters (see router)

import "./externalpage.css";

import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { ArrowBtn, Spacer } from "../../components/buttons/Buttons";
import ExternalIcon from "../../data/images/external-link.svg";
import { Icon, HostLink } from "../../components/curriculums/LinkPreview";

import { QueryMatchingEntries, QueryMatchingTitle } from "../../data/Query";
import { AddEntrytoFirestore, DocumentRef } from "../../data/Ref";

export default function ExternalPage() {
  const [curriculum, setCurriculum] = useState([]);
  const [currentIter, setCurrentIter] = useState(false);
  const [entries, setEntries] = useState([]);
  const [paramID, setParamID] = useState("");

  const [addEntry, setAddEntry] = useState(false);
  const [EntryField, setEntryField] = useState("");

  const auth = getAuth();
  const location = useLocation();
  const { sortTitle } = useParams();

  function setExternalPage() {
    if (location.state !== null) {
      const { id } = location.state;
      DocumentRef("external_curriculums", id, setCurriculum);
      QueryMatchingEntries(id, setEntries);
    } else {
      QueryMatchingTitle(sortTitle, setParamID);
      if (typeof paramID == "object")
        try {
          DocumentRef("external_curriculums", paramID[0].iterid, setCurriculum);
          QueryMatchingEntries(paramID, setEntries);
        } catch (e) {
          //console.log("error:", e);
        }
    }
  }
  setExternalPage();

  // function CurrentIterCheck() {
  //     // Check if user is currently on this path
  //     // Check if user has completed the iter=> Allow editing
  // }
  function JoinPath() {
    if (auth) {
      setCurrentIter(true);}
    else {
      alert("Please log in to save joining this path");
    }
  }
  //   function CurrentItersCount() {
  //     // Count the number of people on the path
  //      // Also count number of people completed
  //   }
  const currentPathersCount = 0;
  const currentCompletedCount = 0;

  function FeedbackModal() {
    // Show a modal to give feedback on the path
  }

  function AddEntry() {
    setAddEntry(true);
  }
  console.log("curriculum:", curriculum);
  function SubmitEntry() {
    if (EntryField !== "") {
      AddEntrytoFirestore(curriculum.id)
      setAddEntry(false);
      setEntryField("");
    } else {
      alert("Please enter a valid entry");
    }
  }

  return (
    <>
      <div className="data-ouput" style={{ minHeight: 200 }}>
        <div className="external-page-hero">
          {curriculum.length !== 0 && (
            <>
              <div className="each-ext-cur-div">
                <div className="ext-cur-title">
                  <a
                    className="ext-cur-title-link"
                    href={curriculum.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {curriculum.Title} &nbsp;
                    <img
                      style={{ height: 10 }}
                      src={ExternalIcon}
                      alt="external link"
                    />
                  </a>
                </div>
                <div className="ext-cur-summary">
                  <p>
                    <span>
                      {curriculum.LastUpdated} | {HostLink(curriculum.Link)}{" "}
                      {Icon(curriculum.Link)}
                    </span>
                  </p>
                  <p>{curriculum.Authors}</p>
                </div>
                <div className="subject-tag-div">
                  {curriculum.Subjects && curriculum.Subjects.map((e, i) => {
                        return (
                          <span className={`${e} subject-tag`} key={i}>
                            {e}
                          </span>
                        );
                      })}
                </div>
              </div>
            </>
          )}

          <div id="external-page-right-hero"> 
          {/* Can separate as component */}
            <div>
              {currentIter ? (
                "Currently in Progress"
              ) : (
                <button className="page-join-btn" onClick={(e) => JoinPath(e)}>
                  + Join the Path
                </button>
              )}
              <div className="current-pathers-div">
                <div className="current-pathers-title">Current Pathers</div>
                <div className="current-pathers-count">
                  {currentPathersCount}
                </div>
              </div>
            </div>
            <Spacer height={10} />
            <div className="current-completed-div">
              <div className="current-completed-title">People Completed</div>
              <div className="current-completed-count">
                {currentCompletedCount}
              </div>
            </div>
            <button
              className="suggest-feedback-btn"
              onClick={(e) => FeedbackModal(e)}
            >
              Suggest an Edit &gt;
            </button>
          </div>
        </div>
      </div>

      <div>
        {entries.length !== 0 ? (
          <div>
            <h3 className="theme-h3">Entries</h3>
            {entries.map(({ Name, Rating, Text }, i) => {
              return (
                <div key={i}>
                  <div className="entry-name">{Name}</div>
                  <div className="entry-rating">{Rating}</div>
                  <div className="entry-text">{Text}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-entries-div">No entries yet.</div>
        )}
        {currentIter && !addEntry ? <button onClick={()=>AddEntry()}>+ Create an Entry</button> : ""}
        {addEntry && (
          <div className="create-entry-div">
              <div>
                Entry
                <input
                  type="text"
                  onChange={(e) => setEntryField(e.target.value)}
                  value={EntryField}
                />
              </div>
              <button
                className="submit-entry-btn"
                onClick={(e) => SubmitEntry(e)}
              >
                Create Entry
              </button>
            </div>
          )}
      </div>

      <ArrowBtn link="/explore" text="Explore other Curriculums" />
      {/* Total Curriculum Count */}
    </>
  );
}
