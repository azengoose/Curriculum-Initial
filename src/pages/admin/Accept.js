// Admin page that displays all pending curriculums like the explore page
//  but also includes an accept button for each curriculum that
//  copies the data from the submitted_curriculums and pastes it onto
//  the the external_curriculums database collection.

import "./admin.css";
import { useState } from "react";
import ExternalSubmissions from "./ExternalSubmissions";
import { ArrowBtn, Spacer } from "../../components/buttons/Buttons";
import { QueryRecent, QueryRecentRejected } from "../../data/Query";
import { Helmet } from "react-helmet";

export default function Accept() {
  const [recentAccepts, setRecentAccepts] = useState([]);
  const [recentRejects, setRecentRejects] = useState([]);

  QueryRecent("external_curriculums", 3, setRecentAccepts, recentAccepts);
  QueryRecentRejected(5, setRecentRejects, recentRejects);

  return (
    <>
      <Helmet>
        <title>Iters | Admin </title>
      </Helmet>
      <h2 className="theme-h2">Accept Submissions</h2>

      <div id="recent-admin-div">
        <div>
          <h3>Recently Accepted:</h3>
          <div className="admin-logs">
            {recentAccepts.map(({ Data }, index) => {
              return (
                <div key={index}>
                  {Data.map(({ Title }, i) => {
                    return <p className="admin-p" key={i}>{Title}</p>;
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3>Recent Audit Log:</h3>
          <div className="admin-logs">
            {recentRejects.map(({ Title, Action }, index) => {
              return (
                <p className="admin-p" key={index}>
                  {Title}: {Action}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <Spacer height={20} />
      <ExternalSubmissions />

      <Spacer height={40} />
      <ArrowBtn link="/explore" text="Explore curriculums" />
    </>
  );
}
