// For submitting externally completed curriculums

import AddForm from "../components/curriculums/AddForm";
import ExternalExamples from "../data/ExternalExamples";
import { ArrowBtn } from "../components/Buttons";
import { Accordion } from "../components/Misc";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import db from "../data/config.js";

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
      <h2 className="theme-h2" id="add-h2">
        Add a Curriculum
      </h2>

      <AddForm />

      <h3 className="theme-h3">Good External Curriculum Examples</h3>
      <ExternalExamples />

      <div className="two-columns">
        <div>
          <ArrowBtn link="/explore" text="Explore other Curriculums" />
          <ArrowBtn link="/essays" text="Curriculum Information" />
        </div>
        <div className="two-columns-2nd">
          <Accordion
            title="What Makes Good Curriculums"
            panel={
              <div>
                <p>
                  The main points I wish to bring to attention when it comes to
                  curriculums presented in an accessibly online format:
                </p>

                <p>
                  <b>Scope:</b> Timeframe completion should take mostly weeks,
                  months, or years.
                </p>
                <p>
                  <b>Testing:</b> Ideally, the curriculum has been trialled
                  before. With a selection process/rationale of some resources
                  over many others.
                </p>
                <p>
                  <b>Diversity:</b> Includes a minimum of 2-3 platforms or 3+
                  authors in the resources.
                </p>
              </div>
            }
          />
        </div>
      </div>
      <div id="add-footer">
        <span>Total curriculums awaiting verification: {pending.length}</span>
      </div>
    </>
  );
}
