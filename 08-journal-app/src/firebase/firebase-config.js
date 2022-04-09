// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9KbPkeKZn4hNVeH2TsLBU9JXVio3YWSQ",
  authDomain: "journalapp-7e420.firebaseapp.com",
  projectId: "journalapp-7e420",
  storageBucket: "journalapp-7e420.appspot.com",
  messagingSenderId: "728544552380",
  appId: "1:728544552380:web:6da3a9ae912397ea1377b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get access to DB on Could Firestore
const db = getFirestore();

// Create the google auth provider
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    GoogleAuthProvider,
    googleAuthProvider,
    getAuth,
    signInWithPopup
}