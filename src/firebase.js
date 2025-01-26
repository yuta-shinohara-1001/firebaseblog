import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7AugCLRKp0qcUG0oWoarIv-QlKQO9TCU",
  authDomain: "blog-d9d63.firebaseapp.com",
  projectId: "blog-d9d63",
  storageBucket: "blog-d9d63.firebasestorage.app",
  messagingSenderId: "224722031185",
  appId: "1:224722031185:web:bfe75332deed73ef921e70",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
