import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QueryMatchingUserName, SaveUpdatedDetails } from "../../data/UserQuery";

export default function UserProfileDetails() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(null);
  const { name } = useParams();
  const lowerCaseName = name.toLowerCase();

  QueryMatchingUserName(lowerCaseName, setUser)

  function CheckLoggedIn() {
    if (getAuth().currentUser !== null && user !== null) {
      console.log(user)
      setIsLoggedIn(true);
      setName(user[0].Data[0].Name);
      setEmail(user[0].Data[0].Email);
    }
  }
  // function ChangeDetails(e) {
  //   e.preventDefault();
  //   setEditMode(true);
  // }

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  function SaveDetails(e) {
    e.preventDefault();
    setEditMode(false);
    var sortName = Name.toLowerCase().replace(/\s/g, "");
    SaveUpdatedDetails(user.uid, { Name, Email, sortName });
    window.location.redirect(`/agent/${sortName}/profile`);
  }
  // not yet introduced a query to completely change all user
  // properties. First evaluate if this is necessary.
  // entry name needs to connect to user id in database

  useEffect(() => {
    CheckLoggedIn()
  }, [user]);

  return (
    <>
      <h3 className="theme-h3">Profile Details</h3>
      {isLoggedIn ? (
        <>
          {editMode ? (
            <div className="profile-details">
              <div> Name:
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={Name}
                />
              </div>
              <br></br>
              <div> Email:
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={Email}
                />
              </div>
              <button
                className="profile-details-change-btn"
                onClick={(e) => SaveDetails(e)}
              > Save
              </button>
            </div>
          ) : (
            <>
              {/* For when Edit Mode is OFF */}
              <div className="profile-details">
                <p>Name: {Name}</p>
                <p>Email: {Email}</p>
              </div>
              {/* <button
                className="profile-details-change-btn"
                onClick={(e) => ChangeDetails(e)}
              > Change Details
              </button> */}
            </>
          )}
        </>
      ) : (
        <div>
          <p>You are not the the individual that is logged in.</p>
          <p>Please log in to edit your name and email details.</p>
        </div>
      )}
    </>
  );
}
