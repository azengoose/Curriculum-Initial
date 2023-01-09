import { useState, useEffect } from "react";
import { collection, onSnapshot, query, where, doc, getDoc, updateDoc } from "firebase/firestore";
import db from "./config.js";

// Progress & Completed are subcollections of users
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
  useEffect(() => { PopulateArray() }, [idArray]);
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
  useEffect(() => { DatabaseQuery() }, []);
}

export function QueryMatchingUserState(userState, matchingUserName, setState) {
  const [user, setUser] = useState();
  function DatabaseQuery() {
    if (userState === "Saved") {
      const ref = collection(db, `users/${user[0].userid}/Saved`);
      var qu = query(ref, where("savedBoolean", "==", true));
      onSnapshot(qu, (snapshot) => {
        setState(
          snapshot.docs.map((doc) => (doc.id))
        );
      });
    }
    else {
      const ref = collection(db, `users/${user[0].userid}/${userState}`);
      var q = query(ref);
      onSnapshot(q, (snapshot) => {
        setState(
          snapshot.docs.map((doc) => (doc.id))
        );
      });
    }
  }
  QueryMatchingUserName(matchingUserName, setUser);
  useEffect(() => {
    try {
      //console.log("User", matchingUserName, user, user[0].userid, qu)
      DatabaseQuery();
    } catch (e) { //console.log("", e);
    }
  }, [user]);
}

export function QueryIfSavedIter(userid, iterid, setSaved) {
  try {
    const saveRef = doc(db, `users/${userid}/Saved/`, iterid);
    getDoc(saveRef).then((doc) => {
      if (doc.data().savedBoolean) {
        setSaved(doc.data().savedBoolean);
      }
      else { setSaved(false) }
    });
  }
  catch (error) {
    console.log("Error getting saved status: ", error);
    setSaved(false)
  }
}

export function QueryUserEntries(user, setState) {
  try {
    const entriesRef = collection(db, "entries");
    var q = query(entriesRef, where("Name", "==", user));
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => ({
          iterData: doc.data().iterData,
          iterID: doc.data().iterID,
          Name: user,
          Text: doc.data().Text,
          monthYear: doc.data().monthYear
        }))
      );
    });
  } catch (e) { console.log("Error getting user entries: ", e) }
}

export function SaveUpdatedDetails(userid, updatedDetails) {
  try {
    const userRef = doc(db, "users", userid);
    updateDoc(userRef, updatedDetails);
    console.log("Updated user details successful");
  }
  catch (error) {
    console.log("Error updating user details: ", error);
  }
}