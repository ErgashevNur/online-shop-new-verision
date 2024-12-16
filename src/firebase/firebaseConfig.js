// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPa2prRca3WN-I9AjKnqo4QGpwP4B5AGw",
  authDomain: "uchiha-s.firebaseapp.com",
  projectId: "uchiha-s",
  storageBucket: "uchiha-s.firebasestorage.app",
  messagingSenderId: "471510359513",
  appId: "1:471510359513:web:50e2a36e65f07d05b20dc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
