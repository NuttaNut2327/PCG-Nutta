// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo970WrIbs722dkdHyz7IuUvDjIsRgTUw",
  authDomain: "newpro-55e5b.firebaseapp.com",
  projectId: "newpro-55e5b",
  storageBucket: "newpro-55e5b.appspot.com",
  messagingSenderId: "745138633432",
  appId: "1:745138633432:web:b55afaef3d1af9d4af75ad",
  measurementId: "G-JK5R6Q0FD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);