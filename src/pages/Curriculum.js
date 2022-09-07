// HIGHEST Priority

// CURRICULUM
// Should be a curated list of curriculums with the
//  bias always made transparent.
//  e.g. 247 CS curriculums, 50 Business, 4 Sociology
//       = "This is extremely biased towards CS and BUS"

// Each curriculum has its own page, which can
//    be accessed via links generated via retrieval
//    and generation of its title in the database.

// ONE: Dataset of curriculums / spreadsheet: https://docs.google.com/spreadsheets/d/1JAigdVgaPPemnhZMICklelZeGgh_h_bemh0zKEUq-6w/edit#gid=0
// TWO: Import curriculums to start, ensure transparent bias.
// THREE: Allow users to import, link and create own
//    curriculums to add to the existing database.

import {
  getFirestore,
  collection,
  collectionGroup,
  query,
  onSnapshot,
  where
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import firebaseApp from "../data/config.js";
import InternalCurriculums from "./components/curriculums/InternalCurriculums.js";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "internal_curriculums");
const resourcesRef = collectionGroup(db, "resources");

export default function Curriculum() {
  // Adapts content based on the path provided.
  var path = window.location.pathname;
  var remadeTitle = path.slice(1).replace(/-/g, " ");

  // Singular output, not plural
  const [curriculum, setCurriculum] = useState([]);
  var q = query(curriculumRef, where("Title", "==", remadeTitle));

  useEffect(
    () => {
      onSnapshot(q, (snapshot) => {
        setCurriculum(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            Data: [doc.data()]
          }))
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // CURRENT PROBLEM
  // Only query for resources with parent id doc matching
  //  console.log(curriculum[0].Data[0])
  const [resources, setResources] = useState([]);
  const qu = query(resourcesRef);
  useEffect(
    () => {
      onSnapshot(qu, (snapshot) => {
        setResources(
          snapshot.docs.map((doc) => ({
            Duration: doc.data().Duration,
            Title: doc.data().Title,
            Link: doc.data().Link,
            ParentDocID: doc.ref.parent.parent.id
          }))
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      {curriculum.map(({ Data, id }, index) => {
        return (
          <div className="curriculum-singles-wrapper" key={index}>
            {Data.map(
              (
                { Title, Duration, Location, Pricing, LastUpdated, Authors },
                i
              ) => {
                return (
                  <>
                    <h2 className="h2-theme">{Title}</h2>
                    <div className="curriculum-singles-container" key={i}>
                      <div className="curriculum-singles-summary">
                        <h3>Summary</h3>
                        <p>
                          Last Updated:
                          {LastUpdated ? <span> {LastUpdated}</span> : " N/A"}
                        </p>{" "}
                        <p>designed by {Authors}</p>
                        <p> Duration: {Duration}</p>
                        <p> Pricing: {Pricing}</p>
                        <p> Location: {Location}</p>
                      </div>
                      <div className="curriculum-singles-resources">
                        <h3> Resources: </h3>
                        {resources.map(
                          ({ Title, Link, Duration, ParentDocID }, i) => {
                            if (ParentDocID === id) {
                              return (
                                <div key={i}>
                                  <p>{Title}</p>
                                  <p>
                                    {Duration ? (
                                      <span>Length: {Duration}</span>
                                    ) : (
                                      ""
                                    )}
                                    {Link ? (
                                      <span>
                                        , <a href={Link}>Go to Resource</a>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </p>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          }
                        )}
                      </div>
                    </div>
                  </>
                );
              }
            )}
          </div>
        );
      })}

      <h3>Other Internal Curriculums</h3>
      <InternalCurriculums />

      <button className="theme-btn">
        <Link className="link" to="/">
          Back to Home
        </Link>
      </button>
      <button className="theme-btn">
        <Link className="link" to="/e">
          Explore Other Curriculums
        </Link>
      </button>
    </>
  );
}

// STRIVING for
// Add reviews of the curriculums - completed, critiques,
//  recommendations.
// Use novel visualisations of learning pathways such as
//  learning trees as in video games to show prerequisites.
