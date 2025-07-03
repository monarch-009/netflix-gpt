// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSiMcC8nUI3Af7FsYjwIJHZNKI1iG9HsU",
  authDomain: "netflixgpt-29f57.firebaseapp.com",
  projectId: "netflixgpt-29f57",
  storageBucket: "netflixgpt-29f57.firebasestorage.app",
  messagingSenderId: "661416376843",
  appId: "1:661416376843:web:68761b62f19970c6e2e50e",
  measurementId: "G-87ZGGQB0ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);