// HIGHEST Priority

// CURRICULUM
// Should be a curated list of curriculums with the
//  bias always made transparent.
//  e.g. 247 CS curriculums, 50 Business, 4 Sociology
//       = "This is extremely biased towards CS and BUS"

// Each curriculum has its own page, with data retrieved
//    based on the path parameters (see router)

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
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { BtnHome, BtnExplore } from "./components/Buttons";
import firebaseApp from "../data/config.js";
// import InternalCurriculums from "./components/curriculums/InternalCurriculums.js";

import NotFound from "./NotFound";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "internal_curriculums");
const resourcesRef = collectionGroup(db, "resources");
const reviewsRef = collectionGroup(db, "reviews");

// Adapts content based on the path provided.
export default function Curriculum() {
  const { id } = useParams();
  var RemadeTitle = id.replace(/-/g, " ");

  // Singular output, not plural
  const [curriculum, setCurriculum] = useState([]);
  // Query collection for matching Title
  const q = query(curriculumRef, where("Title", "==", RemadeTitle));
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

  const [reviews, setReviews] = useState([]);
  const reviewq = query(reviewsRef);
  useEffect(
    () => {
      onSnapshot(reviewq, (snapshot) => {
        setReviews(
          snapshot.docs.map((doc) => ({
            Name: doc.data().Name,
            Review: doc.data().Review,
            ParentDocID: doc.ref.parent.parent.id
          }))
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (curriculum.length > 0) {
    return (
      <>
        {curriculum.map(({ Data, id }, index) => {
          return (
            <div className="curriculum-singles-wrapper" key={index}>
              {Data.map(
                (
                  {
                    Title,
                    Duration,
                    Location,
                    Pricing,
                    LastUpdated,
                    Authors,
                    Description,
                    Rationales,
                    Vision,
                    Steps
                  },
                  i
                ) => {
                  return (
                    <>
                      <h2 className="theme-h2">{Title}</h2>
                      <div className="curriculum-singles-container" key={i}>
                        <div className="curriculum-singles-summary">
                          <h3>Summary</h3>
                          <p> {Description}</p>
                          <p>
                            Designed by {Authors}, updated
                            {LastUpdated ? <span> {LastUpdated}</span> : " N/A"}
                          </p>
                          <div className="singles-duration-price-location">
                            <div>
                              Duration <hr />
                              {Duration}
                            </div>
                            <div>
                              Pricing <hr />
                              {Pricing}
                            </div>
                            <div>
                              Location <hr />
                              {Location}
                            </div>
                          </div>
                          <p> Vision: {Vision}</p>
                          <p> Rationales: {Rationales}</p>
                          <h3>Steps:</h3>
                          <div className="singles-steps">
                            {Steps.map((e, i) => {
                              return (
                                <div key={i}>
                                  <p>
                                    {i + 1} {e.Title}
                                  </p>
                                  <p>{e.Description}</p>
                                </div>
                              );
                            })}
                          </div>
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
                        <div className="curriculum-singles-reviews">
                          <h3> Reviews: </h3>
                          {reviews.map(({ Name, Review, ParentDocID }, i) => {
                            if (ParentDocID === id) {
                              return (
                                <div key={i}>
                                  <p>
                                    {Name}: {Review}
                                  </p>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </div>
                      </div>
                    </>
                  );
                }
              )}
            </div>
          );
        })}

        {/* <h3 className="theme-h3">Other Internal Curriculums</h3>
        <InternalCurriculums /> */}

        <BtnHome />
        <BtnExplore />
      </>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          time: [0, 1, 1.05, 1.2, 1.8]
        }}
      >
        <NotFound />
      </motion.div>
    );
  }
}

// STRIVING for
// Add reviews of the curriculums - completed, critiques,
//  recommendations.
// Use novel visualisations of learning pathways such as
//  learning trees as in video games to show prerequisites.
