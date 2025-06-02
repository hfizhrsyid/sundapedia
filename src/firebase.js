// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2RgEvJxa_M5EHOAGt2fRQcF4vfrovk0A",
  authDomain: "sundapedia-39a9b.firebaseapp.com",
  projectId: "sundapedia-39a9b",
  storageBucket: "sundapedia-39a9b.firebasestorage.app",
  messagingSenderId: "117657014699",
  appId: "1:117657014699:web:97224f10e81905910a42ee",
  measurementId: "G-YM3MY3B84X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };