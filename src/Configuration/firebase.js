// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "bingebox-dev.firebaseapp.com",
  projectId: "bingebox-dev",
  storageBucket: "bingebox-dev.firebasestorage.app",
  messagingSenderId: "854710181711",
  appId: "1:854710181711:web:bd9020de7a6ff6f883ef3a",
  measurementId: "G-VDEPXPS6MZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();