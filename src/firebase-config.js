// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_vQI5Bwg3uQpv2dRFdEoOzVdqNKwvGa0",
  authDomain: "crud-react-firebase-54e0f.firebaseapp.com",
  projectId: "crud-react-firebase-54e0f",
  storageBucket: "crud-react-firebase-54e0f.appspot.com",
  messagingSenderId: "22604216932",
  appId: "1:22604216932:web:e81dbed36566d6eb74fd71",
  measurementId: "G-1KP7SW6TRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)