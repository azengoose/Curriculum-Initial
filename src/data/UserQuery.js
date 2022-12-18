import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";
import db from "./config.js";

// CURRENT: Progress & Completed are subcollections of users
//    Query for pathway e.g. (users/:id/progress)
export function QueryUserIters(idArray, setState) {
  const curriculumRef = collection(db, "external_curriculums");
  async function PopulateArray() {
    const arr = [];
    try {
      for (let i = 0; i < idArray.length; i++) {
        const docRef = doc(curriculumRef, idArray[i]);
        await getDoc(docRef).then((doc) => {
          if (doc)
            arr.push(doc.data());
        });
      }
    } catch (e) { // if length is null
    }
    setState(arr);
  }
  useEffect(() => {
    PopulateArray();
  }, [idArray]);
}

export function QueryMatchingUserName(matchingUserName, setState) {
  const userRef = collection(db, "users");
  function DatabaseQuery() {
    var q = query(userRef, where("sortName", "==", matchingUserName));
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => ({
          userid: doc.id,
          Data: [doc.data()],
        }))
      );
    });
  }
  useEffect(() => {
    DatabaseQuery();
  }, []);
}

export function QueryMatchingUserState(userState, matchingUserName, setState) {
  const [user, setUser] = useState();
  function DatabaseQuery() {
    const progressRef = collection(db, `users/${user[0].userid}/${userState}`);
    var q = query(progressRef)
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => (doc.id))
      );
    }); 
  }
  QueryMatchingUserName(matchingUserName, setUser);
  useEffect(() => {
    try {
        console.log("User", matchingUserName, user, user[0].userid)
        DatabaseQuery();
      } catch (e) {
        console.log("", e);
      }
  }, [user]);
}

export function SaveUpdatedDetails(userid, updatedDetails) {
  const userRef = doc(db, "users", userid);
  try {
    updateDoc(userRef, updatedDetails);
    console.log("Updated user details successful");
  } catch (error) {
    console.log("Error updating user details: ", error);
  }
}