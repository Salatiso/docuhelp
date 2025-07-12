import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSUBNwaZCILWdcxFBu8OCKZhxRJEjIcLc",
  authDomain: "docuhelp-d96d9.firebaseapp.com",
  projectId: "docuhelp-d96d9",
  storageBucket: "docuhelp-d96d9.firebasestorage.app",
  messagingSenderId: "411792849295",
  appId: "1:411792849295:web:d6f5a15bbe728a9cc5b3fa",
  measurementId: "G-YRLZ0QT8YQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInAnonymously };
