import "../externals/externalpage.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";

import { QueryUserEntries } from "../../data/UserQuery";

export default function UserProfileEntries() {
	const [entries, setEntries] = useState([]);
	const { name } = useParams();
	const sortName = name.toLowerCase();

	useEffect(() => { QueryUserEntries(sortName, setEntries) }, []);

	return (
		<>
			<h3 className="theme-h3">Entries</h3>
			{entries.length !== 0 ? (
				<div className="entries-div">
					{entries.map(({ Name, monthYear, Text, iterData }, i) => {
						return (
							<div className="each-entry-div" key={i}>
								<div className="entry-text">{parse(Text)}</div>
								<div className="entry-bottom-div">
									<div className="entry-name">{Name}</div> |
									<div className="entry-created">{monthYear}</div>
								</div>
								<div className="entry-iterdata">
									{iterData && (<div>
										<Link
											to={`/iters/${iterData.sortTitle}`}>
											{iterData.Title}</Link>
									</div>)}
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className="no-saved-entries-div">No entries yet. You may create an entry while or after attempting an iter.</div>
			)}
			<p>Total Entries: {entries.length}</p>
		</>
	);
}
