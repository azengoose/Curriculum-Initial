// Admin page that displays all pending curriculums like the explore page
//  but also includes an accept button for each curriculum that
//  copies the data from the submitted_curriculums and pastes it onto
//  the the external_curriculums database collection.
//    Also recently added docs.

import { useState } from "react";
import { addDoc, deleteDoc } from "firebase/firestore";

import { Icon, HostLink } from "../../components/curriculums/LinkPreview";
import { QueryAllByTime } from "../../data/Query";
import { CollectionRef, DocumentRef, AuditLog } from "../../data/Ref";

export default function ExternalSubmissions() {
  const [curriculums, setCurriculums] = useState([]);
  const [curriculumRef, setCurriculumRef] = useState();

  QueryAllByTime("submitted_curriculums", setCurriculums, curriculums);
  CollectionRef("external_curriculums", setCurriculumRef);

  var msg = document.getElementById("form-message");
  function tempMessage() {
    msg.textContent = "";
    msg.className = "";
  }
  function acceptError(error) {
    console.log(error);
    msg.classList.add("msg-error");
    msg.textContent = "There was an error (see console).";
  }
  function acceptSuccess(data) {
    console.log(`${data} successfully accepted.`);
    msg.classList.add("msg-successful");
    msg.textContent = `${data} successfully accepted.`;
  }

  function closePopup(index) {
    const matchedModal = document.getElementById(`modal-popup-${index}`);
    matchedModal.toggleAttribute("hidden");
  }
  function PopupToggle(accorrej, index) {
    const matchedModal = document.getElementById(`modal-popup-${index}`);
    matchedModal.toggleAttribute("hidden");
    if (matchedModal.classList.contains("accept")) {
      matchedModal.classList.toggle("accept");
    } else if (matchedModal.classList.contains("reject")) {
      matchedModal.classList.toggle("reject");
    }
    matchedModal.classList.toggle(accorrej);
  }

  function AcceptSubmitted(index) {
    let dataref = curriculums[index].Data[0];
    try {
      addDoc(curriculumRef, {
        created: dataref.created,
        Authors: dataref.Authors,
        LastUpdated: dataref.LastUpdated,
        Link: dataref.Link,
        Title: dataref.Title,
        Subjects: dataref.Subjects,
      });
      acceptSuccess(dataref.Title);
      AuditLog(dataref.Title, dataref.Link, "Accepted");
      DocumentRef("submitted_curriculums", curriculums[index].id, setDocRef);
      deleteDoc(docRef);
    } catch (error) {
      acceptError(error);
    }
    setTimeout(tempMessage, 5000);
    closePopup(index);
  }

  var [docRef, setDocRef] = useState();

  function RejectSubmitted(index) {
    let documentref = curriculums[index].Data[0];
    DocumentRef("submitted_curriculums", curriculums[index].id, setDocRef);
    try {
      console.log("", `${documentref.Title} has been rejected.`);
      AuditLog(documentref.Title, documentref.Link, "Rejected");
      deleteDoc(docRef);
    } catch (error) {
      console.log("", error);
    }
  }
  //have to click twice to delete...

  function checkAcceptOrReject(index) {
    const matchedModal = document.getElementById(`modal-popup-${index}`);
    if (matchedModal.classList.contains("accept")) {
      AcceptSubmitted(index);
    } else if (matchedModal.classList.contains("reject")) {
      RejectSubmitted(index);
    }
  }

  return (
    <>
      <div className="data-ouput">
        <span id="form-message"></span>
        <div className="external-curriculums-wrapper">
          {curriculums ? (
            curriculums.map(({ Data }, index) => {
              return (
                <div className="accept-curriculums-div" key={index}>
                  {Data.map(
                    ({ Title, Link, LastUpdated, Authors, Subjects }, i) => {
                      return (
                        <a
                          href={Link}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={i}
                        >
                          <div className="each-ext-cur-div">
                            <p className="ext-cur-title">{Title}</p>
                            <div className="ext-cur-summary">
                              <p>
                                <span>
                                  {LastUpdated} | {HostLink(Link)} {Icon(Link)}
                                </span>
                              </p>
                              <p>{Authors}</p>
                            </div>
                            <div className="subject-tag-div">
                              {Subjects
                                ? Subjects.map((e, i) => {
                                    return (
                                      <span
                                        className={`${e} subject-tag`}
                                        key={i}
                                      >
                                        {e}
                                      </span>
                                    );
                                  })
                                : ""}
                            </div>
                          </div>
                        </a>
                      );
                    }
                  )}
                  <div className="action-btns-div">
                    <button
                      className="gatekeeper-btn"
                      onClick={() => PopupToggle("accept", index)}
                    >
                      Accept
                    </button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://console.firebase.google.com/u/1/project/curriculum-initial/firestore/data/~2Fsubmitted_curriculums~2F`}
                    >
                      <button className="gatekeeper-btn">Edit</button>
                    </a>
                    <button
                      className="gatekeeper-btn"
                      onClick={() => PopupToggle("reject", index)}
                    >
                      Reject
                    </button>
                  </div>
                  <div
                    id={`modal-popup-${index}`}
                    className="modal-popup"
                    hidden
                  >
                    <button
                      id="confirm-tick"
                      className="confirm-emoji"
                      onClick={() => checkAcceptOrReject(index)}
                    >
                      ✔️
                    </button>
                    <button
                      id="confirm-cross"
                      className="confirm-emoji"
                      onClick={() => closePopup(index)}
                    >
                      ❌
                    </button>
                  </div>
                </div> // end of index div
              );
            })
          ) : (
            <div>
              <p>All curriculums have been accepted!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
