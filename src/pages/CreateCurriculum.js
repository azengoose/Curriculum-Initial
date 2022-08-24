// A testing page for the creating curriculum form
// and outputting data of all current curriculums

import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc
} from "firebase/firestore";
import firebaseApp from "../data/config.js";
import { useState } from "react";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "curriculum");
const userRef = collection(db, "users");

export default function CreateCurriculum() {
  async function addCurriculum() {
    try {
      await addDoc(curriculumRef, {
        Designers: "Angus",
        Duration: "1-2 Months",
        Location: "Online",
        Pricing: "Free"
      });

      const docRef = doc(db, "curriculum", "Shorting Linguistics");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addDoc(userRef, {
      name: customerName,
      password: customerPassword
    });

    setCustomerName("");
    setCustomerPassword("");
    console.log(userRef.id);
  };
  return (
    <>
      <Link className="link" to="/">
        Back to Home
      </Link>
      <div className="App">
        <div className="App__form">
          <input
            type="text"
            placeholder="Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={customerPassword}
            onChange={(e) => setCustomerPassword(e.target.value)}
          />
          <button onClick={submit}>Submit</button>
        </div>
      </div>
      <div className="form-div">
        <form>
          <h2>Create Curriculum</h2>
          <div className="form-small-input-div">
            <label>
              Enter your name: {""}
              <input placeholder="Enter Designer Name" />
            </label>
            <label>
              Enter the duration: {""}
              <input placeholder="Duration" />
            </label>
            <input placeholder="Location" />
            <input placeholder="Pricing" />
          </div>
          <textarea placeholder="Description" />
        </form>
        <button type="submit" onClick={addCurriculum}>
          Submit
        </button>
      </div>
    </>
  );
}
