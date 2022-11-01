// Admin page that displays all pending curriculums like the explore page
//  but also includes an accept button for each curriculum that
//  copies the data from the submitted_curriculums and pastes it onto
//  the the external_curriculums database collection.

import "./admin.css";
import { useState } from "react";
import ExternalSubmissions from "./ExternalSubmissions";
import { ArrowBtn, Spacer } from "../components/Buttons";
import { QueryRecent, QueryRecentRejected } from "../data/Query";

export default function Accept() {
  const [recentAccepts, setRecentAccepts] = useState([]);
  const [recentRejects, setRecentRejects] = useState([]);

  QueryRecent("external_curriculums", 3, setRecentAccepts, recentAccepts);
  QueryRecentRejected(5, setRecentRejects, recentRejects);

  return (
    <>
      <h2 className="theme-h2">Accept Submissions</h2>

      <div id="recent-admin-div">
        <div>
          <h3>Recently Accepted:</h3>
          {recentAccepts.map(({ Data }, index) => {
            return (
              <div key={index}>
                {Data.map(({ Title }, i) => {
                  return <div key={i}>{Title}</div>;
                })}
              </div>
            );
          })}
        </div>

        <div>
          <h3>Recently Audit Log:</h3>
          {recentRejects.map(({ Title, Action }, index) => {
            return (
              <div key={index}>
                {Title}: {Action}
              </div>
            );
          })}
        </div>
      </div>

      <h3 className="theme-h3">Pending Submissions: </h3>
      <ExternalSubmissions />

      <Spacer height={40} />
      <ArrowBtn link="/explore" text="Explore curriculums" />
    </>
  );
}
