import "./addentry.css";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { getAuth } from "firebase/auth";
import { AddEntrytoFirestore } from "../../data/Ref";
import { monthYear } from "../../components/Misc";

export default function EntryForm(iterID) {
	const u = getAuth().currentUser;
	const [EntryField, setEntryField] = useState("");
	const [addEntry, setAddEntry] = useState(false);

	function AddEntry() {
		setAddEntry(!addEntry);
	}
	function SubmitEntry() {
		if (EntryField !== "" && u) {
			try {
				AddEntrytoFirestore(iterID.iterID, u.displayName, EntryField, monthYear)
				setAddEntry(false);
				setEntryField("");
			}
			catch (e) {
				alert("Dearly sorry, but something bad happened – it's probably got nothing to do with you - so please try again later.")
				console.log("error:", e);
			}
		}
		else if (!u) alert("Please log in to save iters and write entries.");
		else alert("Please enter a valid entry");
	}

	const sizeLimit = 250;
	const [value, setValue] = useState('');
	const [length, setLength] = useState(0);

	const handleInit = (evt, editor) => {
		setLength(editor.getContent({ format: 'text' }).length);
	};

	const handleUpdate = (value, editor) => {
		const length = editor.getContent({ format: 'text' }).length;
		if (length <= sizeLimit) {
			setValue(value);
			setLength(length);
			setEntryField(value)
		}
	};

	const handleBeforeAddUndo = (evt, editor) => {
		const length = editor.getContent({ format: 'text' }).length;
		// note that this is the opposite test as in handleUpdate
		// because we are determining when to deny adding an undo level
		if (length > sizeLimit) {
			evt.preventDefault();
		}
	};

	return (
		<>
			{!addEntry ? <button className="add-entry-btn" onClick={() => AddEntry()}>+ Create an Entry</button>
				: <button className="cancel-entry-btn" onClick={() => AddEntry()}>Cancel Entry</button>}
			{addEntry && (
				<div className="create-entry-div">
					<h3>Creating an Entry...</h3>
					<div>
						<Editor
							apiKey="75js8wu5xg8q1ormqe95j9rkax16ny3j1ct8bswh30i4sxgf"
							value={value}
							init={{ height: 250, menubar: false, toolbar: false }}
							onInit={handleInit}
							onEditorChange={handleUpdate}
							onBeforeAddUndo={handleBeforeAddUndo}
							className="create-entry-textfield"

						/>
						<p>Remaining: {sizeLimit - length}</p>
					</div>
					<button
						className="submit-entry-btn add-entry-btn"
						onClick={(e) => SubmitEntry(e)}
					>
						Submit Entry
					</button>
				</div>
			)}
		</>
	)
}

{/* <div className="create-entry-type-div">
	<span>Type of Review</span>
	<input type="checkbox"
			onChange={(e) => e.classList.toggle("checked")}
	/>
	<label className="check-label">Completion Entry</label>
	<input type="checkbox"
			onChange={(e) => e.classList.toggle("checked")}
	/>
	<label className="check-label">Review</label>
</div> */}