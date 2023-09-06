
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8NIXgSO-_PI0HyANo2q70ec7ustX3TCA",
  authDomain: "one-time-password-5507c.firebaseapp.com",
  projectId: "one-time-password-5507c",
  storageBucket: "one-time-password-5507c.appspot.com",
  messagingSenderId: "521254759269",
  appId: "1:521254759269:web:786a7f8d01ec3b98858f8c"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);