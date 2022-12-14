import { useState } from "react";
import { useParams } from "react-router-dom";
import { QueryMatchingUserProgress } from "../../data/Query";
//import ExternalExamples from "../../data/examples/ExternalExamples";

export default function UserProfileProgress() {
  const [user, setUser] = useState(null);
  const { name } = useParams();
  const sortName = name.toLowerCase();

  QueryMatchingUserProgress(sortName, setUser);
  console.log("user iters in progress: ", user)

  // const [Progress, setProgress] = useState([]);

  // function setItersProgress() {
  //   if (user !== null) { 
  //     for (let i = 0; i < user[0].length; i++) {
  //       let u = user[0]
  //       const next_array = [...Progress, u[i].iterid]
  //       setProgress(next_array);
  //     }
  //     console.log("Iters in Progress: ", Progress)
  //   }
  // }
  // setItersProgress()

  // const [inProgress, setInProgress] = useState();
  //  Query for matching user and setInProgress([Progress ids])
  //    i.e [sfioij234W, oweirjoh342W, FBhsdu2hd9]
  // const [curriculum, setCurriculum] = useState();
  //  Query for curriculum data for each Progress id and setProgress
  //    i.e. [sfioij234W...] => [{Title, Link...}, {...}]  

  // OR progress is a separate collection with name, iterid, %
  //  Query for (matching user), then (iterid)

  // OR progress is a subcollection of users 
  //  Query for pathway (users/:id/progress) and map ids

  // OR use location state to pass data from UserProfile.js
  //  in terms of Progress data

  return (
    <>
      <h3 className="theme-h3">Progress</h3>
      {/* <ExternalExamples/> */}
      {user !== null ? (
        <div>
          {/* {user.map((e, index) => {
            return (
              <div key={index}>
                {e.Data.map((e, i) => {
                    return(
                    <div key={i}>
                        {e.iterid}
                        {e.sortTitle}
                    </div>
                    )
                })}
              </div>
            );
          })} */}
        </div>
      ) : (
        "No iters currently in progress"
      )}
    </>
  );
}
