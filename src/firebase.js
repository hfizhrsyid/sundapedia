// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUEpofP8LjXcUgDZ31jN_q-T_riRNuu2M",
  authDomain: "sp-dev-e0bd5.firebaseapp.com",
  projectId: "sp-dev-e0bd5",
  storageBucket: "sp-dev-e0bd5.appspot.com",
  messagingSenderId: "692598761640",
  appId: "1:692598761640:web:a7831ade8110ef5111fa9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };