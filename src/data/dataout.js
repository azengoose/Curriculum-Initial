// For developing output of firestore data

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs
} from "firebase/firestore";
import firebaseApp from "./config.js";

const db = getFirestore(firebaseApp);
const curriculumRef = collection(db, "curriculum");
const userRef = collection(db, "users");

async function getAll() {
  const getall = {};
  const querySnapshot = await getDocs(curriculumRef);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    getall[doc.id] = doc.data();
  });
  return getall;
}

const Component = () => {
  const [getall, setgetall] = useState();
  useEffect(() => {
    const getJournaux = async () => {
      try {
        const getJournaux = await getAll();
        setgetall(getJournaux);
      } catch (error) {}
    };
    getJournaux();
  }, []);

  return (
    <ul>
      {Object.keys(getall || {}).map((item) => (
        <li>{item.Duration}</li>
      ))}
    </ul>
  );
};

const docRef = doc(db, "curriculum", "Shorting Linguistics");
const docSnap =  getDoc(docRef);
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  console.log("No such document!");
}
} catch (e) {
console.error("Error adding document: ", e);
}