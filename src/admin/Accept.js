// Admin page that displays all pending curriculums like the explore page
//  but also includes an accept button for each curriculum that
//  copies the data from the submitted_curriculums and pastes it onto
//  the the external_curriculums database collection.

import "./admin.css";
import ExternalSubmissions from "./ExternalSubmissions";
import { ArrowBtn, Spacer } from "../components/Buttons";

export default function Accept() {
  return (
    <>
      <h2 className="theme-h2">Accept Submissions</h2>
      <h3 className="theme-h3">Pending Submissions: </h3>

      <ExternalSubmissions />

      <Spacer height={40} />
      <ArrowBtn link="/explore" text="Explore curriculums" />
    </>
  );
}
