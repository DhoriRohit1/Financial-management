import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_h0eFsNMPZvTeJ2zCtcwzGfilSD387_A",
  authDomain: "financemanagement-d6d18.firebaseapp.com",
  projectId: "financemanagement-d6d18",
  storageBucket: "financemanagement-d6d18.appspot.com",
  messagingSenderId: "281740032680",
  appId: "1:281740032680:web:8521edf3ce0a6cf22ba09d",
  measurementId: "G-Z1MGLP0K8Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
