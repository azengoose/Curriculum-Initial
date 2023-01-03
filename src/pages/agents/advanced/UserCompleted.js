import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { QueryMatchingUserState, QueryUserIters } from "../../../data/UserQuery";
import CurriculumOutput from "../../../components/curriculums/CurriculumOutput";

export default function UserProfileCompleted() {
  const [completed, setCompleted] = useState(null);
  const [curriculums, setCurriculums] = useState([]);
  const { name } = useParams();
  const sortName = name.toLowerCase();

  QueryMatchingUserState("Completed", sortName, setCompleted);
  QueryUserIters(completed, setCurriculums);

  const [curricOut, setCurricOut] = useState("");
  async function outCurriculum() {
    const x = CurriculumOutput(curriculums);
    setCurricOut(x);
  }
  useEffect(() => {
    outCurriculum();
  }, [curriculums]);

  return (
    <>
      <h3 className="theme-h3">Completed</h3>
      {completed !== null && (
        <div className="data-ouput">
          <div className="external-curriculums-wrapper">{curricOut}</div>
        </div>
      )}
    </>
  );
}
