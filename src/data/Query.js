import { useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import db from "./config.js";

export default function DatabaseQuery(collect, setState, changeState) {
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
