// Admin page that displays all pending curriculums like the explore page
//  but also includes an accept button for each curriculum that
//  copies the data from the submitted_curriculums and pastes it onto
//  the the external_curriculums database collection.

import ExternalSubmissions from "../components/curriculums/ExternalSubmissions";

export default function Accept() {
  return (
    <>
      <h2 className="theme-h2">Accept Submissions</h2>
      <h3>Pending Submissions: </h3>
      <ExternalSubmissions />
    </>
  );
}
