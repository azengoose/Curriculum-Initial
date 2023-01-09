// Each external curriculum has its own page, with data
//  retrieved based on the path parameters (see router)

import "./externalpage.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { ArrowBtn, Spacer } from "../../components/buttons/Buttons";
import ExternalIcon from "../../data/images/external-link.svg";
import { Icon, HostLink } from "../../components/curriculums/LinkPreview";

import { QueryIfSavedIter } from "../../data/UserQuery";
import { QueryMatchingEntries, QueryMatchingTitle } from "../../data/Query";
import { CountCollection, DocumentRef, SaveItertoFirestore } from "../../data/Ref";
import EntryForm from "../../components/forms/EntryForm";
import parse from "html-react-parser";

export default function ExternalPage() {
  const [loading, setLoading] = useState(true);
  const [curriculum, setCurriculum] = useState([]);
  const [curriculumsCount, setCurriculumsCount] = useState(0);
  const [saved, setSaved] = useState(false);
  const [entries, setEntries] = useState([]);

  const [paramID, setParamID] = useState("");
  const [iterID, setIterID] = useState("")
  const [iterData, setIterData] = useState("")

  const auth = getAuth();
  const u = auth.currentUser;
  const { sortTitle } = useParams();

  CountCollection("external_curriculums", setCurriculumsCount);

  function setExternalPage() {
    QueryMatchingTitle(sortTitle, setParamID);
    if (typeof paramID == "object")
      try {
        DocumentRef("external_curriculums", paramID[0].iterid, setCurriculum);
        if (u) QueryIfSavedIter(u.uid, paramID[0].iterid, setSaved);
        QueryMatchingEntries(paramID[0].iterid, setEntries);
        setIterID(paramID[0].iterid);
        setIterData(paramID[0].Data)
        setLoading(false)
      } catch (e) {
        console.log("error:", e);
      }
  }
  //const [saveCount, setSaveCount] = useState(0);
  useEffect(() => {
    if (loading) setExternalPage();
    // CountCollectionGroup("Saved", setSaveCount, "sortTitle", sortTitle);
    // console.log(saveCount)
  }, [paramID]);

  function SaveIter() {
    const warn = document.getElementsByClassName("login-warning")
    function tempwarn() { warn[0].setAttribute("hidden", "hidden") }
    if (u) {
      SaveItertoFirestore(paramID[0].iterid, u.uid, curriculum.sortTitle, !saved);
      setSaved(!saved);
    }
    else {
      warn[0].removeAttribute("hidden")
      setTimeout(tempwarn, 5000)
    }
  }

  return (
    <>
      <div className="data-ouput" style={{ minHeight: 200 }}>
        <div className="external-page-hero">
          {curriculum.length !== 0 && (
            <>
              <div className="each-ext-cur-div">
                <a
                  className="ext-cur-title-link ext-cur-title"
                  href={curriculum.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                > {curriculum.Title} &nbsp;
                  <img
                    style={{ height: 10 }}
                    src={ExternalIcon}
                    alt="external link"
                  />
                </a>
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
                <button id="saved-btn" className="ext-pg-btns" onClick={() => SaveIter()}>
                  - Saved
                </button>
              ) : (
                <button id="not-saved-btn" className="ext-pg-btns" onClick={() => SaveIter()}>
                  + Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="login-warning" hidden>
        <span>Please <b>Login</b> to save iters and write entries.</span>
        {/* <Link to="/login"><b>Login</b></Link> */}
      </div>

      <div className="leftalign-entries-div">
        <h3 className="theme-h3">Entries </h3>
        {entries.length !== 0 ? (
          <div className="entries-div">
            <p>Total Entries: {entries.length}</p>
            {entries.map(({ Name, monthYear, Text }, i) => {
              return (
                <div className="each-entry-div" key={i}>
                  <div className="entry-text">{parse(Text)}</div>
                  <div className="entry-bottom-div">
                    <div className="entry-name">{Name}</div> |
                    <div className="entry-created">{monthYear}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <div className="centered-p"><p>No entries yet.</p>
              <p>Write the first review and help others choose and navigate this iter.</p>
            </div>
            <Spacer height={20} />
          </>
        )}

        {!loading && <EntryForm iterID={iterID} iter={iterData} />}
      </div>

      <Spacer height={40} />
      <ArrowBtn link="/explore" text="Explore other Curriculums" />
      <Spacer height={10} />
      <span>Total Curriculums: {curriculumsCount}</span>
    </>
  );
}

{/* <button
  className="ext-pg-btns suggest-feedback-btn"
  onClick={(e) => FeedbackModal(e)}
>
  Suggest an Edit <img className="arrow-icon" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" />
</button> */}

//   function CurrentItersCount() {
//     // Count the number of people on the path
//      // Also count number of people completed
//   }

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

// const location = useLocation();
// if (location.state !== null) {
//   const { id } = location.state;
//   DocumentRef("external_curriculums", id, setCurriculum);
//   QueryMatchingEntries(id, setEntries);
//   setParamID([{ iterid: id }]);
//   setIterID(id);
// }