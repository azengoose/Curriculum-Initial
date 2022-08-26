// EXPLORE PAGE.
// Graphical visual interface. Categorisations displayed visually.

// AIMS:
// Users should be able to access all types of media, e.g. images,
// videos, text, pages, vr.
// This page highlights the importance of this site as a curriculum
// directory that is unbiased and gives precedence to exploration
// rather than targetted search.

// 1. Basic Grid Layout
//      Max 4-5 Columns displayed masonry style.
// 2. Basic List Flex rows - search engine style.
// -> Easy implement with button style toggle
// 3. VISUAL EXPERIMENTATION IS SEPARATE PROJECT

import { curriculum } from "../data/test_data.js";
import { done_curriculum } from "../data/link_test_data.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query
} from "firebase/firestore";
import firebaseApp from "../data/config.js";
import { useState, useEffect } from "react";

const db = getFirestore(firebaseApp);
const intCurriculumRef = collection(db, "internal_curriculums");
const extCurriculumRef = collection(db, "external_curriculums");

export default function Explore() {
  const [curriculums, setCurriculums] = useState([]);
  const q = query(extCurriculumRef);

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setCurriculums(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Data: [doc.data()]
        }))
      );
    });
  }, []);

  const grid_style = {
    display: "block"
  };
  function ToggleCurriculum() {
    // Function is to Filter types of curriculums
    //    Completed Page (and on other website), Video (eg YT),
    //    Image/flow-chart diagram.
  }
  return (
    <>
      <div className="explore-curriculum">
        <h2 id="explore-curriculum-title">Explore Curriculums</h2>
        <p>By Type: Text, Blog, Image, Video</p>
        <button className="theme-btn" onClick={ToggleCurriculum}>
          Toggle Curriculums from other Websites
        </button>
        <div className="data-ouput">
          <h3 style={{ fontSize: "1.47em" }}>External Completed Curriculums</h3>
          <div className="external-curriculums-wrapper">
            {curriculums.map(({ Data }, index) => {
              return (
                <div key={index}>
                  {Data.map(({ Title, Link, LastUpdated, Authors }, i) => {
                    return (
                      <div className="each-ext-cur-div" key={i}>
                        <a href={Link}>{Title}</a>
                        <p>
                          Last Updated:
                          {LastUpdated ? <span> {LastUpdated}</span> : " N/A"}
                        </p>{" "}
                        <p>designed by {Authors}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <h3 style={{ fontSize: "1.47em" }}>Internal Curriculums</h3>
        <div
          id="explore-curriculum-wrapper"
          className="explore-curriculum-wrapper"
          style={grid_style}
        >
          {curriculum.map(
            (
              {
                Title,
                Description,
                Designers,
                LastUpdate,
                Duration,
                Price,
                Location,
                Resources,
                Steps,
                Reviews
              },
              index
            ) => {
              return (
                <div className="curriculum-container" key={index}>
                  <h3 className="curriculum-title">{Title}</h3>
                  <div className="curriculum-description">
                    <p>Description: {Description}</p>
                    <p> Curriculum Designers: {Designers}</p>
                    <p>
                      Last Updated:
                      {LastUpdate ? <span> {LastUpdate}</span> : " N/A"}
                    </p>
                    <p> Duration: {Duration}</p>
                    <p> Pricing: {Price}</p>
                    <p> Location: {Location}</p>
                  </div>
                  <div className="curriculum-resources">
                    <p> Resources: </p>
                    {Resources.map((e, i) => {
                      return (
                        <div className="curriculum-resource" key={i}>
                          <p>{e.Title}</p>
                          <p>
                            {e.Length ? <span>Length: {e.Length}</span> : " "}
                            {e.Link ? (
                              <span>
                                , <a href={e.Link}>Go to Resource</a>
                              </span>
                            ) : (
                              ""
                            )}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="curriculum-steps">
                    <p> Steps: </p>
                    {Steps.map((e, i) => {
                      return (
                        <div className="curriculum-step" key={i}>
                          <p>{e.Title}</p>
                          <p>{e.Description}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="curriculum-reviews">
                    <p> Reviews: </p>
                    {Reviews.map((e, i) => {
                      return (
                        <div className="curriculum-review" key={i}>
                          <p>by {e.Name}</p>
                          <p>Rating: {e.Stars} out of 5 </p>
                          <p>{e.ReviewText}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
