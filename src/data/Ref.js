// For Firebase functions and Single Document Queries

import {
  collection,
  doc,
  addDoc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect } from "react";
import db from "./config.js";

export function CollectionRef(collect, setState) {
  const collectionRef = collection(db, collect);
  useEffect(() => {
    setState(collectionRef);
  }, []);
}

// export function DocumentRef(collect, id, setState) {
//   const docRef = doc(db, collect, id);
//   useEffect(() => {
//     getDoc(docRef).then((doc) => {
//       setState(doc.data());
//     });
//   }, []);
// }

export function DocumentRef(collect, id, setState) {
  const docRef = doc(db, collect, id);
  getDoc(docRef).then((doc) => {
    setState(doc.data());
  });
}

export function AuditLog(title, link, action) {
  const auditRef = collection(db, "audit-log");
  addDoc(auditRef, {
    Title: title,
    Link: link,
    Action: action,
    Time: serverTimestamp(),
  });
}

// Try again later with updated count
// export function TotalAcceptedCurriculumsNumber() {
//   const collectionRef = collection(db, "external_curriculums");
//   // const snapshot = getCountFromServer(collectionRef);
//   // const num = snapshot.data().count;
// }

export function Example() {
  const ref = doc(db, "submitted_curriculums", " CKkrzgxx528eUgV9qPWP");
  const docSnap = getDoc(ref);
  console.log("", ref, docSnap);
}

export function AddAgentToFirestore(userid, displayName) {
  var sortName = displayName.replace(/\s/g, "").toLowerCase();
  setDoc(doc(db, "users", userid), {
    Name: displayName,
    sortName: sortName,
    Progress: [],
    Completed: [],
    dateJoined: serverTimestamp(),
  }).then(() => {
    console.log("new agent has been created");
  });
}

export function AddEntrytoFirestore(iterid, name, text) {
  const entryRef = collection(db, "entries");
  addDoc(entryRef, {
    Iter: iterid,
    Name: name,
    Text: text,
    dateCreated: serverTimestamp(),
  }).then(() => {
    console.log("new entry has been created: ", text);
  });
}