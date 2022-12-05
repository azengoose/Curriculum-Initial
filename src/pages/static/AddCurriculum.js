// For submitting externally completed curriculums

import AddForm from "../../components/forms/AddForm";
import ExternalExamples from "../../data/examples/ExternalExamples";
import { ArrowBtn, Spacer } from "../../components/buttons/Buttons";
import { Accordion } from "../../components/buttons/Buttons";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import db from "../../data/config.js";

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
      <Helmet>
        <title>Iters | Add Curriculum</title>
      </Helmet>
      <h2 className="theme-h2" id="add-h2">
        Add a Curriculum
      </h2>

      <AddForm />

      <h3 className="theme-h3">Good External Curriculum Examples</h3>
      <ExternalExamples />

      <div className="two-columns">
        <div>
          <ArrowBtn link="/explore" text="Explore other Curriculums" />
          <Spacer height={10} />

          <ArrowBtn link="/curriculuminfo" text="Curriculum Information" />
        </div>
        <div className="two-columns-2nd">
          <Accordion
            title="What Makes Good Curriculums"
            panel={
              <div>
                <p>
                  <b>Scope:</b> The timeframe should be mostly weeks, months, or
                  several years. Not a small achievement containing small or
                  detailed steps (this is not Wikihow).
                </p>
                <p>
                  <b>Testing:</b> Ideally, the curriculum has been trialled
                  before or at least compared with others with similar goals,
                  therefore undergoing a reasoned selection process of resources
                  over others available.
                </p>
                <p>
                  <b>Diversity:</b> Includes at least a few platforms or
                  resources from multiple sources or people.
                </p>
                <p>
                  More points to consider at{" "}
                  <b>
                    <Link to="/curriculuminfo">Curriculum Information.</Link>
                  </b>{" "}
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
