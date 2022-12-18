// Check if current user uid matches the uid of the display
// name user. If it does, then also show the profile details
// and editing options.

import "./profile.css";
import ProgressIcon from "../../data/images/progress-icon.svg";
import CompletedIcon from "../../data/images/completed-icon.svg";
import ProfileIcon from "../../data/images/profile-icon.svg";
import SignOutIcon from "../../data/images/sign-out.svg";

import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { QueryMatchingUserName } from "../../data/UserQuery";
 
export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const { name } = useParams();
  const lowerCaseName = name.toLowerCase();
  const auth = getAuth();

  QueryMatchingUserName(lowerCaseName, setUser);

  function CheckLoggedIn() {
    if (auth.currentUser !== null) {
      if (user[0].userid === auth.currentUser.uid) {
        setIsLoggedIn(true);
      }
    }
  }
  function signOutUser() {
    signOut(getAuth());
    window.location.reload();
    //ToggleLogIn();
  }

  // const monitorAuthState = async () => {
  //   onAuthStateChanged(auth, user => {
  //     if (user) {
  //       loggedIntrue
  //     }
  //     else {

  //     }
  //   })
  // }

  function CheckExists() {
    try {
      if (user === null || user.length === 0) {
        setUserExists(false);
        console.log("User does not exist");
      } else {
        setUserExists(true);
        CheckLoggedIn();
        console.log("User exists");
      }
    } catch (error) {
      setUserExists(false);
      console.log("User does not exist", error);
    }
  }

  useEffect(() => {
    CheckExists();
  }, [user, auth]);

  function filterToggle(e) {
    if (e.target.id === "isProgress") {
      console.log("", auth);
      // output Progress
      // set other checkboxes to unchecked
    }
  }

  return (
    <>
      {userExists ? (
        <div>
          {user.map(({ Data }, index) => {
            return (
              <div key={index}>
                {Data.map(({ Name }, i) => {
                  return (
                    <div key={i}>
                      <div className="profile-box">
                        <div className="profile-box-name-div">
                          <h2 id="profile-box-name">{Name}</h2>
                          <p>Optional Subtitle Bio</p>
                          {/* Optional subtitle */}
                        </div>

                        <div className="profile-nav-box">
                          <div className="profile-nav-box-left">
                            <Link
                              className="profile-nav-link"
                              to={`/agent/${name}/progress`}
                            >
                              <img
                                className="profile-nav-img"
                                src={ProgressIcon}
                                alt="progress icon"
                              />
                              Progress
                            </Link>
                            <Link
                              className="profile-nav-link"
                              to={`/agent/${name}/completed`}
                              onClick={(e) => filterToggle(e)}
                            >
                              <img
                                className="profile-nav-img"
                                src={CompletedIcon}
                                alt="completed icon"
                              />
                              Completed
                            </Link>
                          </div>

                          <div className="profile-nav-box-right">
                            {isLoggedIn ? (
                              <div>
                                <Link
                                  className="profile-nav-link"
                                  to={`/agent/${name}/profile`}
                                  onClick={(e) => filterToggle(e)}
                                >
                                  <img
                                    className="profile-nav-img"
                                    src={ProfileIcon}
                                    alt="profile icon"
                                  />
                                  Profile Details
                                </Link>
                                <button
                                  id="sign-out"
                                  className="sign-btn"
                                  onClick={signOutUser}
                                >
                                  Sign Out
                                  <img
                                    style={{ height: 10, paddingLeft: 10 }}
                                    src={SignOutIcon}
                                    alt="sign out icon"
                                  />
                                </button>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <Outlet />
        </div>
      ) : (
        <div>This user does not exist.</div>
      )}
    </>
  );
}

// If param matches logged in user
// const currentuser = auth.currentUser;
// if (currentuser !== null) {
//     const displayName = currentuser.displayName;
//     const email = currentuser.email;
//     const photoURL = currentuser.photoURL;
//     const uid = currentuser.uid;

//     console.log("", displayName, user)

// }
