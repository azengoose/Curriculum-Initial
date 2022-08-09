// Firebase database is not yet integrated, using dummy data atm
// Ignore this file.

import { getFirebaseConfig } from "./config.js";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  // query, orderBy, limit,
  // onSnapshot, setDoc, updateDoc, doc,
  serverTimestamp //initializeFirestore,
} from "firebase/firestore";

export default function Fire() {
  async function signIn() {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }
  function signOutUser() {
    signOut(getAuth());
  }
  function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver); // Listen to auth changes
  }

  function getProfilePicUrl() {
    return getAuth().currentUser.photoURL || "/images/profile_placeholder.png";
  }
  function getUserName() {
    return getAuth().currentUser.displayName;
  }

  async function saveResource(resourceTitle) {
    try {
      await addDoc(collection(getFirestore(), "resources"), {
        name: getUserName(),
        text: resourceTitle,
        profilePicUrl: getProfilePicUrl(),
        timestamp: serverTimestamp()
      });
    } catch (error) {
      console.error("Error writing new resource to Firebase Database", error);
    }
  }

  function authStateObserver(user) {
    if (user) {
      var profilePicUrl = getProfilePicUrl();
      var userName = getUserName();

      userPicElement.style.backgroundImage = // Set the user's profile pic and name.
        "url(" + addSizeToGoogleProfilePic(profilePicUrl) + ")";
      userNameElement.textContent = userName;

      userNameElement.removeAttribute("hidden");
      userPicElement.removeAttribute("hidden");
      signOutButtonElement.removeAttribute("hidden");

      signInButtonElement.setAttribute("hidden", "true");
    } else {
      userNameElement.setAttribute("hidden", "true");
      userPicElement.setAttribute("hidden", "true");
      signOutButtonElement.setAttribute("hidden", "true");

      signInButtonElement.removeAttribute("hidden");
    }
  }

  function addSizeToGoogleProfilePic(url) {
    if (
      url.indexOf("googleusercontent.com") !== -1 &&
      url.indexOf("?") === -1
    ) {
      return url + "?sz=150";
    }
    return url;
  }

  var messageListElement = document.getElementById("messages");
  var messageFormElement = document.getElementById("message-form");
  var messageInputElement = document.getElementById("message");
  var submitButtonElement = document.getElementById("submit");
  var imageButtonElement = document.getElementById("submitImage");
  var imageFormElement = document.getElementById("image-form");
  var mediaCaptureElement = document.getElementById("mediaCapture");
  var userPicElement = document.getElementById("user-pic");
  var userNameElement = document.getElementById("user-name");
  var signInButtonElement = document.getElementById("sign-in");
  var signOutButtonElement = document.getElementById("sign-out");
  var signInSnackbarElement = document.getElementById("must-signin-snackbar");

  // signOutButtonElement.addEventListener("click", signOutUser);
  signInButtonElement.addEventListener("click", signIn);

  const firebaseAppConfig = getFirebaseConfig();
  initializeApp(firebaseAppConfig);

  initFirebaseAuth();
}
