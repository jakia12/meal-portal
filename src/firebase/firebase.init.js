

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcIB8LUYM9ICMlmAox99l5O2feQiW3lu4",
  authDomain: "personal-project-46fd1.firebaseapp.com",
  projectId: "personal-project-46fd1",
  storageBucket: "personal-project-46fd1.appspot.com",
  messagingSenderId: "773011975603",
  appId: "1:773011975603:web:424c24b787bd0e71176fc6",
  measurementId: "G-FCNJ49B4C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;