// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIYi5fiJxXVpJN4xdOxfy903acA0BWosE",
  authDomain: "note-taking-11f01.firebaseapp.com",
  databaseURL:
    "https://note-taking-11f01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "note-taking-11f01",
  storageBucket: "note-taking-11f01.appspot.com",
  messagingSenderId: "252837802626",
  appId: "1:252837802626:web:1432bb0c0907b3461afa9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
