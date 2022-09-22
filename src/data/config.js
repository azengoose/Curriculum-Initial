// Configure firebase and initialise the app
// Database requires resources and curriculums with
// many fields, all allowing nesting and self-references.
// = AUTH, STORAGE

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPyreXls1GJ-_S-jYq4c6ec6Tf26J-mjY",
  authDomain: "curriculum-initial.firebaseapp.com",
  projectId: "curriculum-initial",
  storageBucket: "curriculum-initial.appspot.com",
  messagingSenderId: "1008531386858",
  appId: "1:1008531386858:web:c10467e35c569a69fac293"
};

function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided.",
      "\n",
      "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
}

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

export default firebaseApp;

// ALSO can create a .json file or object on the fly from the db
