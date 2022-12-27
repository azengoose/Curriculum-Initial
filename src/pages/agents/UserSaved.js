import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { QueryUserIters, QueryMatchingUserState } from "../../data/UserQuery";
import CurriculumOutput from "../../components/curriculums/CurriculumOutput";

export default function UserProfileSaved() {
    const [saved, setSaved] = useState(null);
    const [curriculums, setCurriculums] = useState([]);
    const { name } = useParams();
    const sortName = name.toLowerCase();

    QueryMatchingUserState("Saved", sortName, setSaved);
    QueryUserIters(saved, setCurriculums);

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
            <h3 className="theme-h3">Saved</h3>
            {curriculums.length !== 0 || null ? (
                <div className="data-ouput">
                    <div className="external-curriculums-wrapper">{curricOut}</div>
                </div>
            ) : (
                "Loading Iters or No iters currently in progress"
            )}
        </>
    );
}
