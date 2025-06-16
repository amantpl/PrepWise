// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0LxXRBZeXQZtyjdi9Y296S6KXFmk0e28",
  authDomain: "prepwise-25f87.firebaseapp.com",
  projectId: "prepwise-25f87",
  storageBucket: "prepwise-25f87.firebasestorage.app",
  messagingSenderId: "27571907236",
  appId: "1:27571907236:web:c64cb75d5a1f539ed01431",
  measurementId: "G-5GJXWEV27D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);