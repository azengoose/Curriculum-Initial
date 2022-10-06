// Admin page that displays all pending curriculums like the explore page
//  but also includes an accept button for each curriculum that
//  copies the data from the submitted_curriculums and pastes it onto
//  the the external_curriculums database collection.

import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import firebaseApp from "../../data/config.js";
import { Icon, HostLink } from "./LinkPreview";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "submitted_curriculums");

export default function ExternalSubmissions() {
  const [curriculums, setCurriculums] = useState([]);

  function DatabaseQuery() {
    var q = query(curriculumRef);
    onSnapshot(q, (snapshot) => {
      setCurriculums(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Data: [doc.data()],
        }))
      );
    });
  }

  useEffect(() => {
    DatabaseQuery();
  }, []);

  return (
    <>
      <div className="data-ouput">
        <div className="external-curriculums-wrapper">
          {curriculums ? (
            curriculums.map(({ Data }, index) => {
              return (
                <div key={index}>
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
                  <button>Accept</button>
                  <button>Edit</button>
                  <button>Reject</button>
                </div>
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
