import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIvKWH74FIUOYPt0nXWd_47iXh5__pVXo",
  authDomain: "codesandboxlearning.firebaseapp.com",
  projectId: "codesandboxlearning",
  storageBucket: "codesandboxlearning.appspot.com",
  messagingSenderId: "199768112060",
  appId: "1:199768112060:web:190141ca8d5f1cf1d109b9",
  measurementId: "G-X10GKJ1SEY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithPopUp = () => signInWithPopup(auth, provider);
