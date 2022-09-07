// Default output only summary of internally completed curriculums
// For Resources:
// Currently not showing, only on single curriculum pages
// Currently, using if() to check matching parentID
//   and docID is very unoptimised

import {
  getFirestore,
  collection,
  onSnapshot,
  query
} from "firebase/firestore";
import firebaseApp from "../../../data/config.js";
import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "internal_curriculums");

export default function InternalCurriculums() {
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
          {curriculums.map(({ id, Data }, index) => {
            return (
              <div key={index}>
                {Data.map(
                  (
                    {
                      Title,
                      Duration,
                      Location,
                      Pricing,
                      LastUpdated,
                      Authors
                    },
                    i
                  ) => {
                    return (
                      <div key={i} className="each-ext-cur-div">
                        {/* Problem: Using Link doesn't update */}
                        {/* <Link
                          className="link"
                          to={"/" + Title.replace(/\s/g, "-")}
                        >
                          {Title}
                        </Link> */}
                        <a href={"/" + Title.replace(/\s/g, "-")}>
                          new {Title}
                        </a>
                        <p>
                          Last Updated:
                          {LastUpdated ? <span> {LastUpdated}</span> : " N/A"}
                        </p>{" "}
                        <p>designed by {Authors}</p>
                        <p> Duration: {Duration}</p>
                        <p> Pricing: {Pricing}</p>
                        <p> Location: {Location}</p>
                      </div>
                    );
                  }
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// // For Adding Resources
// const resourcesRef = collectionGroup(db, "resources");
// const [resources, setResources] = useState([]);
// const qu = query(resourcesRef);
// useEffect(
//   () => {
//     onSnapshot(qu, (snapshot) => {
//       setResources(
//         snapshot.docs.map((doc) => ({
//           Duration: doc.data().Duration,
//           Title: doc.data().Title,
//           Link: doc.data().Link,
//           ParentDocID: doc.ref.parent.parent.id
//         }))
//       );
//     });
//   }, // eslint-disable-next-line react-hooks/exhaustive-deps
//   []
// );

// {/*<p> Resources: </p>
//         {resources.map(
//         ({ Title, Link, Duration, ParentDocID }, i) => {
//           if (ParentDocID === id)
//             return (
//               <div className="curriculum-resource" key={i}>
//                 <p>{Title}</p>
//                 <p>
//                   {Duration ? (
//                     <span>Length: {Duration}</span>
//                   ) : (
//                     ""
//                   )}
//                   {Link ? (
//                     <span>
//                       , <a href={Link}>Go to Resource</a>
//                     </span>
//                   ) : (
//                     ""
//                   )}
//                 </p>
//               </div>
//             );
//         }
//       )} */}
