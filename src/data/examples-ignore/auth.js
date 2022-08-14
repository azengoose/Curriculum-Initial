// Authentication from Firebase
// Integrates into Sign in and out function in:
//    Navbar, Create-Submit Resource/Curriculum
// CURRENTLY:
//    Authentication is only available from Navbar
//    component.
// NEXT: Modal for also Email Sign In option and fixing
//    up button text styling.
// MORE: Profile page with dynamic link and dynamic
//    content from firestore database.

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import "./config.js";

var userNameElement = document.getElementById("user-name");
var signInButtonElement = document.getElementById("sign-in");
var signOutButtonElement = document.getElementById("sign-out");
console.log(userNameElement, signInButtonElement);

export default function Auth() {
  function signIn() {
    var provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider);
  }
  function signOutUser() {
    signOut(getAuth());
  }
  function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver);
  }
  function getUserName() {
    return getAuth().currentUser.displayName;
  }
  function authStateObserver(user) {
    if (user && userNameElement === !null) {
      console.log(user);
      var userName = getUserName();
      userNameElement.textContent = userName;

      userNameElement.removeAttribute("hidden");
      signOutButtonElement.removeAttribute("hidden");
      signInButtonElement.setAttribute("hidden", "true");
    } else {
      userNameElement.setAttribute("hidden", "true");
      signOutButtonElement.setAttribute("hidden", "true");
      signInButtonElement.removeAttribute("hidden");
    }
  }

  if (signInButtonElement || signOutButtonElement) {
    signOutButtonElement.addEventListener("click", signOutUser);
    signInButtonElement.addEventListener("click", signIn);
    console.log("signing in");
  }

  initFirebaseAuth();
}
