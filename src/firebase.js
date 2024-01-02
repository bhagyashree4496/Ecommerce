// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjx9snTnHtTkLCLX-ihOok5KG4XEDD0sM",
  authDomain: "socialmedia-2d11f.firebaseapp.com",
  projectId: "socialmedia-2d11f",
  storageBucket: "socialmedia-2d11f.appspot.com",
  messagingSenderId: "912500424507",
  appId: "1:912500424507:web:218a94e959f43549f5411e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
