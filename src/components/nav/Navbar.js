// Not including authentication at the moment
// Contains Most Important Links

import "./navbar.css";
import "../../data/config.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default function Navbar() {
  const [logInState, setLogInState] = useState(true);
  function ToggleLogIn() {
    setLogInState(!logInState);
  }

  const auth = getAuth();
  const [user, setUser] = useState(null);
  // https://firebase.google.com/docs/reference/js/firebase.User

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [logInState]);

  function signIn() {
    try {
      var provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider);
      ToggleLogIn();
    } catch (error) {
      console.log(error);
    }
  }
  function signOutUser() {
    signOut(getAuth());
    ToggleLogIn();
  }
  function getUserName() {
    if (getAuth().currentUser) {
      return getAuth().currentUser.displayName;
    }
  }

  return (
    <>
      <div>
        <header id="nav">
          <div id="nav-bar">
            <div className="nav-item">
              <Link id="nav-logo" className="link nav-link" to="/">
                iters
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
                  Curriculums
                </Link>
              </div>
              <div id="user-container" className="nav-item">
                {!user ? (
                  <button id="sign-in" className="sign-btn" onClick={signIn}>
                    <i className="material-icons">account_circle</i>
                  </button>
                ) : (
                  <button
                    id="sign-out"
                    className="sign-btn"
                    onClick={signOutUser}
                  >
                    <div id="user-name">{getUserName()}</div>
                    Sign Out
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
