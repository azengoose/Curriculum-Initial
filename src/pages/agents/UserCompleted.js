import { useState } from "react";
import { useParams } from "react-router-dom";
import { QueryMatchingUserCompleted } from "../../data/Query";

export default function UserProfileCompleted() {
  const [user, setUser] = useState(null);
  const { name } = useParams();
  const lowerCaseName = name.toLowerCase();

  QueryMatchingUserCompleted(lowerCaseName, setUser);

  return (
    <>
      <h3 className="theme-h3">Completed</h3>
        { (user !== null) &&
        <div>
          {user.map((e, index) => {
            if (e.Data !== undefined)
            return (
              <div key={index}>
                {e.Data.map((e, i) => {
                  return <div key={i}>{e.Title}</div>;
                })}
              </div>
            );
            else return "No iters completed";
          })}
        </div>
        }
      
    </>
  );
}
