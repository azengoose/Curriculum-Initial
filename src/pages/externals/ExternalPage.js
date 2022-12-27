// Each external curriculum has its own page, with data
//  retrieved based on the path parameters (see router)

import "./externalpage.css";

import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { ArrowBtn } from "../../components/buttons/Buttons";
import ExternalIcon from "../../data/images/external-link.svg";
import { Icon, HostLink } from "../../components/curriculums/LinkPreview";

import { QueryIfSavedIter } from "../../data/UserQuery";
import { QueryMatchingEntries, QueryMatchingTitle } from "../../data/Query";
import { AddEntrytoFirestore, DocumentRef, SaveItertoFirestore } from "../../data/Ref";

export default function ExternalPage() {
  const [curriculum, setCurriculum] = useState([]);
  const [saved, setSaved] = useState(false);
  const [entries, setEntries] = useState([]);
  const [paramID, setParamID] = useState("");

  const [addEntry, setAddEntry] = useState(false);
  const [EntryField, setEntryField] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const u = auth.currentUser;
  const location = useLocation();
  const { sortTitle } = useParams();

  function setExternalPage() {
    if (location.state !== null) {
      const { id } = location.state;
      DocumentRef("external_curriculums", id, setCurriculum);
      QueryMatchingEntries(id, setEntries);
      setParamID([{ iterid: id }]);
    } else {
      QueryMatchingTitle(sortTitle, setParamID);
      if (typeof paramID == "object")
        try {
          DocumentRef("external_curriculums", paramID[0].iterid, setCurriculum);
          QueryIfSavedIter(u.uid, paramID[0].iterid, setSaved);
          QueryMatchingEntries(paramID, setEntries);
          setLoading(false)
        } catch (e) {
          console.log("error:", e);
        }
    }
  }
  useEffect(() => {
    if (loading) setExternalPage();
  }, [paramID]);

  function SaveIter() {
    if (auth) {
      //console.log("Attempting to save:", paramID[0].iterid, u.uid, curriculum.sortTitle, !saved)
      SaveItertoFirestore(paramID[0].iterid, u.uid, curriculum.sortTitle, !saved);
      setSaved(!saved);
    }
    else {
      alert("Please log in to save iters and write entries.");
    }
  }
  //   function CurrentItersCount() {
  //     // Count the number of people on the path
  //      // Also count number of people completed
  //   }

  function FeedbackModal() {
    // Show a modal to give feedback on the path
  }

  function AddEntry() {
    setAddEntry(!addEntry);
  }

  function SubmitEntry() {
    if (EntryField !== "") {
      AddEntrytoFirestore(paramID, u.displayName, EntryField)
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
            <p id="ext-pg-right-title">{curriculum.Title}</p>
            <div className="ext-pg-btns-div">
              {saved ? (
                <button className="ext-pg-btns page-join-btn" onClick={() => SaveIter()}>
                  - Saved
                </button>
              ) : (
                <button className="ext-pg-btns page-join-btn" onClick={() => SaveIter()}>
                  + Save
                </button>
              )}
              <button
                className="ext-pg-btns suggest-feedback-btn"
                onClick={(e) => FeedbackModal(e)}
              >
                Suggest an Edit <img className="arrow-icon" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="leftalign-entries-div">
        <h3 className="theme-h3">Entries</h3>

        {entries.length !== 0 ? (
          <div className="entries-div">
            {entries.map(({ Name, Rating, Text, EntryType }, i) => {
              return (
                <div className="each-entry-div" key={i}>
                  <div className="entry-text">{Text}</div>
                  <div className="entry-bottom-div">
                    <div className="entry-name">{Name}</div> | &nbsp;
                    <div className="entry-rating">{Rating}</div> | &nbsp;
                    <div className="entry-type">{EntryType}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-entries-div">No entries yet.</div>
        )}
        {!addEntry ? <button className="add-entry-btn" onClick={() => AddEntry()}>+ Create an Entry</button> : <button className="add-entry-btn" onClick={() => AddEntry()}>Cancel Entry</button>}
        {addEntry && (
          <div className="create-entry-div">
            <h3>Creating an Entry...</h3>
            <div>
              <textarea
                id="textarea"
                placeholder="Enter your entry here"
                className="create-entry-textfield"
                onChange={(e) => setEntryField(e.target.value)}
                value={EntryField}
              />
              <div className="create-entry-type-div">
                <span>Type of Review</span>
                <input type="checkbox"
                  onChange={(e) => e.classList.toggle("checked")}
                />
                <label className="check-label">Completion Entry</label>
                <input type="checkbox"
                  onChange={(e) => e.classList.toggle("checked")}
                />
                <label className="check-label">Review</label>
              </div>
            </div>
            <button
              className="submit-entry-btn add-entry-btn"
              onClick={(e) => SubmitEntry(e)}
            >
              Submit Entry
            </button>
          </div>
        )}
      </div>

      <ArrowBtn link="/explore" text="Explore other Curriculums" />
      {/* Total Curriculum Count */}
    </>
  );
}

{/* <div className="current-pathers-div">
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
  </div> */}
// {currentIter && !addEntry ? <button onClick={() => AddEntry()}>+ Create an Entry</button> : ""}
