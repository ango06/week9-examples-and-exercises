// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFkmhcLAx_qIBziMkLoUSmOr-YNBGZ42I",
  authDomain: "bootcamp-sp25-sample.firebaseapp.com",
  projectId: "bootcamp-sp25-sample",
  storageBucket: "bootcamp-sp25-sample.firebasestorage.app",
  messagingSenderId: "56170431770",
  appId: "1:56170431770:web:e72f3b71548f5ff81018a3",
  measurementId: "G-P01RKZ6X5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);