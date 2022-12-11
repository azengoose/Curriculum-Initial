// Not including authentication at the moment
// Contains Most Important Links

import "./navbar.css";
import "../../data/config.js";
import { SubNav } from "../buttons/Buttons";
import SignOutIcon from "../../data/images/sign-out.svg";

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
      var displayName = getAuth().currentUser.displayName;
      var nbspName = displayName.replace(/\s/g, ""); 
      return nbspName;
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

                  <div>
                    <SubNav
                      mainLink={`/agent/${getUserName()}`}
                      fLink={`/agent/${getUserName()}/progress`}
                      sLink={`/agent/${getUserName()}/completed`}
                      tLink={`/agent/${getUserName()}/profile`}
                      outpanel={
                        <button
                          id="sub-nav-sign-out"
                          className="sign-btn"
                          onClick={signOutUser}
                        >
                          Sign Out
                          <img
                            style={{ height: 12, paddingLeft: 5 }}
                            src={SignOutIcon}
                            alt="sign out icon"
                          />
                        </button>
                      }
                    />
                  </div>

                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
