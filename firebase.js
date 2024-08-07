// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXLOSK3l6aaM44Ba_Hed7ODOGpXvZMt0g",
  authDomain: "headstarter-ff66c.firebaseapp.com",
  projectId: "headstarter-ff66c",
  storageBucket: "headstarter-ff66c.appspot.com",
  messagingSenderId: "62648594465",
  appId: "1:62648594465:web:62a8b881b155a0b95e7360",
  measurementId: "G-S14S5595KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {firestore};