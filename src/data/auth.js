// Authentication from Firebase
// Integrates into Sign in and out function in:
//    Navbar, Create-Submit Resource/Curriculum
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import Config from "./config.js";

export default function Auth() {
  return <Config />;
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

  var userPicElement = document.getElementById("user-pic");
  var userNameElement = document.getElementById("user-name");
  var signInButtonElement = document.getElementById("sign-in");
  var signOutButtonElement = document.getElementById("sign-out");

  //signOutButtonElement.addEventListener("click", signOutUser);
  //signInButtonElement.addEventListener("click", signIn);

  initFirebaseAuth();
}
