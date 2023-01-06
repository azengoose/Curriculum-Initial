import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { SaveUpdatedDetails } from "../../data/UserQuery";

export default function UserProfileDetails() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;

  function CheckLoggedIn() {
    if (user !== null) {
      setIsLoggedIn(true);
      setName(user.displayName);
      setEmail(user.email);
    }
  }

  function ChangeDetails(e) {
    e.preventDefault();
    setEditMode(true);
  }

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  function SaveDetails(e) {
    e.preventDefault();
    setEditMode(false);
    var sortName = Name.toLowerCase().replace(/\s/g, "");
    SaveUpdatedDetails(user.uid, { Name, Email, sortName });
  }
  // not yet introduced a query to completely change all user
  // properties. First evaluate if this is necessary.

  useEffect(() => {
    CheckLoggedIn();
  }, [auth]);

  return (
    <>
      <h3 className="theme-h3">Profile Details</h3>
      {isLoggedIn ? (
        <>
          {editMode ? (
            <div className="profile-details">
              <div>
                Name:
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={Name}
                />
              </div>
              <br></br>
              <div>
                Email:
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={Email}
                />
              </div>
              <button
                className="profile-details-change-btn"
                onClick={(e) => SaveDetails(e)}
              >
                Save
              </button>
            </div>
          ) : (
            <>
              {/* For when Edit Mode is OFF */}
              <div className="profile-details">
                <p>Name: {Name}</p>
                <p>Email: {Email}</p>
              </div>
              <button
                className="profile-details-change-btn"
                onClick={(e) => ChangeDetails(e)}
              >
                Change Details
              </button>
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
