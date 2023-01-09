import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import { AddAgentToFirestore } from "../../data/Ref";

export function signIn() {
  try {
    var provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider).then((result) => {
      var isNew = getAdditionalUserInfo(result).isNewUser;
      let u = result.user;
      console.log("isNew: " + isNew);
      if (isNew) { AddAgentToFirestore(u.uid, u.displayName, u.email) }
      else { console.log("old agent has been logged in") }
    });
  } catch (error) { console.log(error); }
}

export function signOutUser() {
  signOut(getAuth());
  window.location.reload();
}

// firebase.firestore().collection("Users")
// .doc(data.uid).set(data)
// .then(result => {

//  console.log('User added!');

//  });