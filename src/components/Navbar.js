// Not including authentication at the moment
// Contains Most Important Links

import "./navbar.css";
import { Link } from "react-router-dom";

// import {
//   getAuth,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut
// } from "firebase/auth";
import "../data/config.js";

export default function Navbar() {
  // function signIn() {
  //   try {
  //     var provider = new GoogleAuthProvider();
  //     signInWithPopup(getAuth(), provider);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // function signOutUser() {
  //   signOut(getAuth());
  // }
  // function initFirebaseAuth() {
  //   onAuthStateChanged(getAuth(), authStateObserver);
  // }
  // function getUserName() {
  //   return getAuth().currentUser.displayName;
  // }
  // var userNameElement = document.getElementById("user-name");
  // var signInButtonElement = document.getElementById("sign-in");
  // var signOutButtonElement = document.getElementById("sign-out");
  // function authStateObserver(user) {
  //   if (user) {
  //     var userName = getUserName();
  //     console.log(userName);
  //     if (userName) {
  //       if (userNameElement) userNameElement.textContent = userName;
  //     }
  //     if (userNameElement) userNameElement.removeAttribute("hidden");
  //     if (signOutButtonElement) signOutButtonElement.removeAttribute("hidden");
  //     if (signInButtonElement)
  //       signInButtonElement.setAttribute("hidden", "true");
  //   } else {
  //     try {
  //       userNameElement.setAttribute("hidden", "true");
  //       signOutButtonElement.setAttribute("hidden", "true");
  //       signInButtonElement.removeAttribute("hidden");
  //     } catch (error) {}
  //   }
  // }
  // initFirebaseAuth();
  return (
    <>
      <div>
        <header id="nav">
          <div id="nav-bar">
            <div id="nav-title" className="nav-item">
              <Link className="link nav-link" to="/">
                iterxue
              </Link>
            </div>
            <div className="nav-right">
              <div className="nav-about nav-item">
                <Link className="link nav-link" to="/about">
                  About
                </Link>
              </div>
              <div className="nav-item">
                <Link className="link nav-link" to="/explore">
                  Explore
                </Link>
              </div>
              <div className="nav-item">
                <Link className="link nav-link" to="/essays">
                  Essays
                </Link>
              </div>
              {/* <div id="user-container" className="nav-item">
                <div hidden id="user-pic"></div>
                <div hidden id="user-name"></div>
                <button
                  hidden
                  id="sign-out"
                  className="sign-btn"
                  onClick={signOutUser}
                >
                  Sign-out
                </button>
                <button id="sign-in" className="sign-btn" onClick={signIn}>
                  <i className="material-icons">account_circle</i>
                </button>
              </div> */}
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
