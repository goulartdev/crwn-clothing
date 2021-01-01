import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDVIkcJCumNfAiBGBOOou1DC1VEy5qk-SY",
  authDomain: "crwn-db-b90f9.firebaseapp.com",
  projectId: "crwn-db-b90f9",
  storageBucket: "crwn-db-b90f9.appspot.com",
  messagingSenderId: "1029929231666",
  appId: "1:1029929231666:web:9c014156f0f21650e7232b",
  measurementId: "G-9B5XWTFFD7",
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createUserProfileDocument = async (
  userAuth: firebase.User,
  additionalData?: Record<string, unknown>
) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        name: displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
