// Check if current user uid matches the uid of the display
// name user. If it does, then also show the profile details
// and editing options.

import "./profile.css";
import PinnedIcon from "../../data/images/pinned-icon.svg";
import StarIcon from "../../data/images/star-icon.svg";
import ProfileIcon from "../../data/images/profile-icon.svg";
import SignOutIcon from "../../data/images/sign-out.svg";

import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import { QueryMatchingUserName } from "../../data/UserQuery";
import NotFound from "../static/NotFound";
import { ArrowBtn, Spacer } from "../../components/buttons/Buttons";

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
    setIsLoggedIn(false);
  }

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

  return (
    <>
      {userExists ? (
        <div>
          <Helmet>
            <title>Profile | {user[0].Data[0].Name} </title>
          </Helmet>
          {user.map(({ Data }, index) => {
            return (
              <div key={index}>
                {Data.map(({ Name }, i) => {
                  return (
                    <div key={i}>
                      <div className="profile-box">
                        <div className="profile-box-name-div">
                          <h2 id="profile-box-name">{Name}</h2>
                          {/* <p>Optional Subtitle Bio</p> */}
                        </div>

                        <div className="profile-nav-box">
                          <div className="profile-nav-box-left">
                            <Link
                              className="profile-nav-link"
                              to={`/agent/${name}/saved`}
                            >
                              <img
                                className="profile-nav-img"
                                src={PinnedIcon}
                                alt="location icon"
                              />
                              Saved
                            </Link>
                            {isLoggedIn && (
                              <Link
                                className="profile-nav-link"
                                to={`/agent/${name}/profile`}

                              >
                                <img
                                  className="profile-nav-img"
                                  src={ProfileIcon}
                                  alt="profile icon"
                                />
                                Profile Details
                              </Link>
                            )}
                          </div>

                          <div className="profile-nav-box-right">
                            <Link
                              className="profile-nav-link"
                              to={`/agent/${name}/entries`}

                            >
                              <img
                                className="profile-nav-img"
                                src={StarIcon}
                                alt="star icon"
                              />
                              Entries
                            </Link>
                            {isLoggedIn ? (
                              <div>
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
        <NotFound />
      )}
      <Spacer height={60} />
      <ArrowBtn link="/explore" text="Explore Curriculums" />
    </>
  );
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
