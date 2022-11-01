import {
  collection,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect } from "react";
import db from "./config.js";

// Usage: For exporting collection reference eg.
//  import { CollectionRef } from "./ref"
//
//  const [curriculumRef, setCurriculumRef] = useState()
//  CollectionRef(collect, setCurriculumRef)

export function CollectionRef(collect, setState) {
  const collectionRef = collection(db, collect);
  useEffect(() => {
    setState(collectionRef);
  }, []);
}

export function DocumentRef(collect, id, setState) {
  const docRef = doc(db, collect, id);
  // console.log("", docRef);
  setState(docRef);
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
  console.log("", ref);
}
