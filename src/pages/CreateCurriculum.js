// A testing page for the creating curriculum form
// and outputting data of all current curriculums

import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  query
} from "firebase/firestore";
import firebaseApp from "../data/config.js";
import { useState } from "react";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "curriculums");
const testRef = collection(db, "test");
const docRef = doc(db, "test", "3nPSLe3DWA7MCuxlU2BB");

export default function CreateCurriculum() {
  const [designerName, setDesignerName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addDoc(curriculumRef, {
      created: serverTimestamp(),
      Designers: designerName,
      Duration: "1-2 Months",
      Location: "Online",
      Pricing: "Free"
    });
    console.log("added name");
  };

  // // Working Code to Console Log single Doc
  // const docSnap = getDoc(docRef);
  // docSnap.then((docSnap) => {
  //   if (docSnap) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     console.log("No such document!");
  //   }
  // });

  // // working Code to get several Docs
  // const vare = getDocs(testRef).then((snap) => {
  //   snap.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //     return <p>hello</p>;
  //   });
  // });
  const [data, setData] = useState("");

  const q = query(curriculumRef);
  // const data = []
  onSnapshot(q, (qSnapshot) => {
    // const data = [];
    qSnapshot.forEach((doc) => {
      const d = doc.data();
      setData([d.Title, d.Info]);
    });
    // console.log("Data: ", data.join(", "));
    console.log(data);
  });
  console.log(data);

  // // Not Working: Console logs a promise => cannot map
  // const vare = getDocs(testRef).then((querySnapshot) => {
  //   var data = [];
  //   querySnapshot.forEach((doc) => {
  //     var id = doc.id;
  //     var dat = doc.data();
  //     data.push({ id: id, string: dat.string });
  //     console.log(doc.data(), doc.data().type, data);
  //     return data;
  //   });
  //   return null;
  // });
  // console.log(vare)

  return (
    <>
      <div className="data-ouput">
        <p>
          {/* {dataArray.map((e, i) => {
            <div key={i}>{e}</div>;
          })} */}
        </p>
      </div>
      {/*  */}
      <h2 className="h2-theme">Create Curriculum</h2>
      <div style={{ maxWidth: 500, margin: "auto", textAlign: "left" }}>
        <p>
          Curriculums can only be submitted for pending. It is judged by the
          public in an intermediary period and by a rotating committee, before
          being established into the database proper.
        </p>
      </div>
      <div className="form-div">
        <form className="create-form">
          <div className="form-small-input-div">
            <label>
              Enter your name: {""}
              <input
                type="text"
                placeholder="Enter Designer Name"
                value={designerName}
                onChange={(e) => setDesignerName(e.target.value)}
              />
            </label>
            <label>
              Enter the duration: {""}
              <input placeholder="Duration" />
            </label>
            <label>
              Choose the location: {""}
              <input placeholder="Location" />
            </label>
            <label>
              Enter estimated or exact pricing: {""}
              <input placeholder="Pricing" />
            </label>
          </div>
          <label>
            Enter description:
            <textarea placeholder="Description" />
          </label>
          <button className="theme-btn" type="submit" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
      <Link className="link" to="/">
        Back to Home
      </Link>
    </>
  );
}
