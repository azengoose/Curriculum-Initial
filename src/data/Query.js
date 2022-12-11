import { useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
import db from "./config.js";

export function QueryAllByTime(collect, setState, changeState) {
  const curriculumRef = collection(db, collect);
  function DatabaseQuery() {
    var q = query(curriculumRef, orderBy("created", "desc"));
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Data: [doc.data()],
        }))
      );
    });
  }
  useEffect(() => {
    DatabaseQuery();
  }, [changeState]);
}

export function QueryAllBySubject(collect, setState, changeState) {
  const curriculumRef = collection(db, collect);
  function DatabaseQuery() {
    var q = query(curriculumRef, orderBy("Subjects", "asc"));
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Data: [doc.data()],
        }))
      );
    });
  }
  useEffect(() => {
    DatabaseQuery();
  }, [changeState]);
}

export function QueryFilterContains(setState, FiltersNum, activeSubjects) {
  const curriculumRef = collection(db, "external_curriculums");
  function DatabaseQuery() {
    // var q = query(curriculumRef);
    if (FiltersNum > 0) {
      var q = query(
        curriculumRef,
        where("Subjects", "array-contains-any", activeSubjects),
        orderBy("Subjects", "asc")
      );
    }
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Data: [doc.data()],
        }))
      );
    });
  }
  useEffect(() => {
    try {
      DatabaseQuery();
    } catch (e) {
      console.log("", e);
    }
    console.log("Use Effect Triggered");
  }, [activeSubjects]);
}

export function QueryRecent(collect, num, setState, changeState) {
  const curriculumRef = collection(db, collect);
  function RecentQuery() {
    var q = query(curriculumRef, orderBy("created", "desc"), limit(num));
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Data: [doc.data()],
        }))
      );
    });
  }
  useEffect(() => {
    RecentQuery();
  }, [changeState]);
}

export function QueryRecentRejected(num, setState, changeState) {
  const curriculumRef = collection(db, "audit-log");
  function RecentQuery() {
    var q = query(curriculumRef, limit(num), orderBy("Time", "desc"));
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Title: doc.data().Title,
          Action: doc.data().Action,
        }))
      );
    });
  }
  useEffect(() => {
    RecentQuery();
  }, [changeState]);
}

export function QueryMatchingTitle(matchingTitle, setState) {
  const curriculumRef = collection(db, "external_curriculums");
  function DatabaseQuery() {
    var q = query(curriculumRef, where("Title", "==", matchingTitle));
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Data: [doc.data()],
        }))
      );
    });
  }
  useEffect(() => {
    DatabaseQuery();
  }, []);
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

export function QueryMatchingEntries(matchingID, setState) {
  const entriesRef = collection(db, "entries");
  function DatabaseQuery() {
    var q = query(entriesRef, where("Iter", "==", matchingID));
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => ({
          Name: doc.data().Name,
          Rating: doc.data().Rating,
          Text: doc.data().Text,
        }))
      );
    });
  }
  useEffect(() => {
    DatabaseQuery();
  }, []);
}

export function QueryMatchingUserProgress(matchingUserName, setState) {
  const ref = collection(db, "users");
  function DatabaseQuery() {
    var q = query(ref, where("Name", "==", matchingUserName));
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => ({
          userid: doc.id,
          Data: doc.data().Progress,
        }))
      );
    });
  }
  useEffect(() => {
    DatabaseQuery();
  }, []);
}

export function QueryMatchingUserCompleted(matchingUserName, setState) {
  const ref = collection(db, "users");
  function DatabaseQuery() {
    var q = query(ref, where("Name", "==", matchingUserName));
    onSnapshot(q, (snapshot) => {
      setState(
        snapshot.docs.map((doc) => ({
          userid: doc.id,
          Data: doc.data().Completed,
        }))
      );
    });
  }
  useEffect(() => {
    DatabaseQuery();
  }, []);
}