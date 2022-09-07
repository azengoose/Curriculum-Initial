// Generates path of "/doc.Title"
// Exports <Route path="/doc.Title" element={<Curriculum />} />

import {
  getFirestore,
  collection,
  onSnapshot,
  query
} from "firebase/firestore";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";

import firebaseApp from "../../data/config.js";
import Curriculum from "../Curriculum.js";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "internal_curriculums");

export default function RouterGenerate() {
  const [curriculums, setCurriculums] = useState([]);
  const q = query(curriculumRef);
  useEffect(
    () => {
      onSnapshot(q, (snapshot) => {
        setCurriculums(
          snapshot.docs.map((doc) => ({
            Title: doc.data().Title
          }))
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      {curriculums.map(({ Title }, index) => {
        return (
          <Route
            key={index}
            path={"/" + Title.replace(/\s/g, "-")}
            element={<Curriculum />}
          />
        );
      })}
    </>
  );
}

// CAN update with improved implementation:
//  look into https://reactrouter.com/en/v6.3.0/getting-started/overview
