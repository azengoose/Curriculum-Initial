import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { QueryUserIters, QueryMatchingUserState } from "../../data/UserQuery";
import CurriculumOutput from "../../components/curriculums/CurriculumOutput";

export default function UserProfileSaved() {
	const [loading, setLoading] = useState(true);
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
		setLoading(false);
	}
	useEffect(() => { outCurriculum() }, [curriculums]);

	return (
		<>
			{loading && <div className="loader"></div>}
			<h3 className="theme-h3">Saved</h3>
			{curriculums.length !== 0 && (
				<div className="data-ouput">
					<div className="external-curriculums-wrapper">{curricOut}</div>
				</div>
			)}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 0.5,
					delay: 1.5,
					ease: "easeInOut",
				}}
			>
				{curriculums.length === 0 && <div className="no-saved-entries-div">No saved curriculums. Explore curriculums to save.</div>}
			</motion.div>
			<p>Total saved: {curriculums.length}</p>
		</>
	);
}
