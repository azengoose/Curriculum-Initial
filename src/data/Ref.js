// For Firebase functions and Single Document Queries

import {
  collection,
  doc,
  addDoc,
  getDoc,
  deleteDoc,
  setDoc,
  serverTimestamp,
  getCountFromServer,
  query,
  where,
  // collectionGroup,
} from "firebase/firestore";
import { useEffect } from "react";
import db from "./config.js";

export function Example() {
  const ref = doc(db, "submitted_curriculums", " CKkrzgxx528eUgV9qPWP");
  const docSnap = getDoc(ref);
  console.log("", ref, docSnap);
}
export function CollectionRef(collect, setState) {
  const collectionRef = collection(db, collect);
  useEffect(() => {
    setState(collectionRef);
  }, []);
}

export async function DeleteDocument(collect, id) {
  await deleteDoc(doc(db, collect, id));
}
export function DocumentRef(collect, id, setState) {
  try {
    const docRef = doc(db, collect, id);
    getDoc(docRef).then((doc) => {
      setState(doc.data());
    });
  }
  catch (error) { //
  }
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

export async function CountCollection(collect, setState, field, value) {
  const collectionRef = collection(db, collect);
  if (field && value) {
    const query_ = query(collectionRef, where(field, '==', value))
    const snapshot = await getCountFromServer(query_);
    setState(snapshot.data().count)
  }
  else {
    const snapshot = await getCountFromServer(collectionRef);
    setState(snapshot.data().count)
  }
}
// export async function CountCollectionGroup(collect, setState, field, value) {
//   const collectionRef = collectionGroup(db, collect);
//   if (field && value) {
//     const query_ = query(collectionRef, where(field, '==', value))
//     const snapshot = await getCountFromServer(query_);
//     setState(snapshot.data().count)
//   }
//   else {
//     const snapshot = await getCountFromServer(collectionRef);
//     setState(snapshot.data().count)
//   }
// }

// Adds a new agent to the firestore database
export function AddAgentToFirestore(userid, displayName, email) {
  var sortName = displayName.replace(/\s/g, "").toLowerCase();
  setDoc(doc(db, "users", userid), {
    Name: displayName,
    sortName: sortName,
    Email: email,
    dateJoined: serverTimestamp(),
  }).then(() => {
    console.log("new agent has been created");
  });
}

export function SaveItertoFirestore(iterid, userid, sortTitle, saved) {
  try {
    const iterRef = doc(db, `users/${userid}/Saved`, iterid);
    setDoc(iterRef, {
      sortTitle: sortTitle.toString(),
      savedBoolean: saved,
      dateSaved: serverTimestamp(),
    }).then(() => {
      console.log("new iter saved: ", iterid, saved);
    });
  }
  catch (error) {
    console.log('error', error)
  }
}

export function AddEntrytoFirestore(iterData, iterID, name, text, monthYear) {
  const entryRef = collection(db, "entries");
  addDoc(entryRef, {
    iterData: iterData,
    iterID: iterID,
    Name: name,
    Text: text,
    monthYear: monthYear,
    dateCreated: serverTimestamp(),
  }).then(() => {
    console.log("new entry has been created: ", text);
  });
}