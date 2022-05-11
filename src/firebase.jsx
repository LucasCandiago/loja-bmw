// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK1ppw1VlxvC1Q46nVH7XMAzz-iGOkqtg",
  authDomain: "loja-bmw.firebaseapp.com",
  projectId: "loja-bmw",
  storageBucket: "loja-bmw.appspot.com",
  messagingSenderId: "535518994502",
  appId: "1:535518994502:web:a5ed1d2f16d52202ec2a47",
  measurementId: "G-YHLHMTNHTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;