// Option One:
//  1. Profile Header
//      > Profile Details
//      > Progress
//      > Completed
//
import { useState } from "react";
import { useParams } from "react-router-dom";
import { QueryMatchingUserProgress } from "../../data/Query";
import ExternalExamples from "../../data/examples/ExternalExamples";

export default function UserProfileProgress() {
  const [user, setUser] = useState(null);
  const { name } = useParams();
  const lowerCaseName = name.toLowerCase();

  QueryMatchingUserProgress(lowerCaseName, setUser);

  // Create a Query into the external database
  //  DocumentRef("external_curriculums", id, setCurriculum);

  // OR use location state to pass data from UserProfile.js
  //  in terms of Progress data

  return (
    <>
      <h3 className="theme-h3">Progress</h3>
      <ExternalExamples/>
      {user !== null ? (
        <div>
          {user.map((e, index) => {
            return (
              <div key={index}>
                {e.Data.map((e, i) => {
                    return(
                    <div key={i}>
                        {e.Title}
                    </div>
                    )
                })}
              </div>
            );
          })}
        </div>
      ) : (
        "No iters currently in progress"
      )}
    </>
  );
}
