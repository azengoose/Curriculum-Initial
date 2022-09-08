// Default output externally completed curriculums

import {
  getFirestore,
  collection,
  onSnapshot,
  query
} from "firebase/firestore";
import firebaseApp from "../../../data/config.js";
import { useState, useEffect } from "react";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "external_curriculums");

export default function ExternalCurriculums() {
  const [curriculums, setCurriculums] = useState([]);
  const q = query(curriculumRef);

  useEffect(
    () => {
      onSnapshot(q, (snapshot) => {
        setCurriculums(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            Data: [doc.data()]
          }))
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <div className="data-ouput">
        <div className="external-curriculums-wrapper">
          {curriculums.map(({ Data }, index) => {
            return (
              <div key={index}>
                {Data.map(({ Title, Link, LastUpdated, Authors }, i) => {
                  return (
                    <a href={Link}>
                      <div className="each-ext-cur-div" key={i}>
                        <p className="ext-cur-title">{Title}</p>
                        <div className="ext-cur-summary">
                          <p>
                            Last Updated:
                            {LastUpdated ? <span> {LastUpdated}</span> : " N/A"}
                          </p>
                          <p>By {Authors}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
