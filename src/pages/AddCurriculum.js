// For submitting externally completed curriculums

import AddForm from "../components/curriculums/AddForm";
import ExternalExamples from "../data/ExternalExamples";
import { ArrowBtn } from "../components/Buttons";
import { Accordion } from "../components/Misc";

import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import firebaseApp from "../data/config.js";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "submitted_curriculums");

export default function AddCurriculum() {
  const [pending, setPending] = useState(0);

  useEffect(() => {
    var q = query(curriculumRef);
    onSnapshot(q, (snapshot) => {
      setPending(
        snapshot.docs.map((doc) => ({
          id: doc.id,
        }))
      );
    });
  }, []);

  return (
    <>
      <h2 className="theme-h2">Add a Curriculum</h2>

      <AddForm />

      <h3 className="theme-h3">Good External Curriculum Examples</h3>
      <ExternalExamples />

      <div className="two-columns">
        <div>
          <ArrowBtn link="/explore" text="Explore other Curriculums" />
          <ArrowBtn link="/essays" text="Categories" />
        </div>
        <div className="two-columns-2nd">
          <Accordion
            title="What Makes a Good Curriculum?"
            panel="Bear in mind that curriculums come in many shapes and sizes. It is
          encouraged that any curriculum submitted is thoughtful and high
          quality. Here is a more comprehensive set of rationales and
          guidelines, or TLDR; see this checklist before submitting."
          />
        </div>
      </div>
      <div id="add-footer">
        <span>Total curriculums awaiting verification: {pending.length}</span>
      </div>
    </>
  );
}
