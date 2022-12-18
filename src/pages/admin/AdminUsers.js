// Admin Page to Test and View all Users
// Might be kind of unnecessary, but it's here for now

import "./profile.css";
import { getAuth } from "firebase/auth";
 
export default function UserProfile() {
  const auth = getAuth();
  console.log("Auth: ", auth)

  return (
    <>
        <div>
            <h1>Admin Users</h1>
            <p>Admin Users</p>
        </div>      
    </>
  );
}