// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAniqN3BmGqriWRUtRlwI7iq5IZoBAPsDA",
  authDomain: "hospital-web-81ff5.firebaseapp.com",
  projectId: "hospital-web-81ff5",
  storageBucket: "hospital-web-81ff5.appspot.com",
  messagingSenderId: "32149306160",
  appId: "1:32149306160:web:ae0b1af59a78a4f7f1a6f5",
  measurementId: "G-89G30CZ552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);