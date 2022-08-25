import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Popup from "reactjs-popup";
import { auth } from "../Firebase";

export const userApi = (values) => {
  console.log("newUser", values);
  // firebase intigration
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            const uid = user.uid;
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              alert("Email verification sent your email!");
            });
          } else {
            // User is signed out
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
          alert("This email is already in use");
        }
      });
  });
};

export const SignInAPI = (values) => {
  console.log("sign in successfully",values);
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if(!user.emailVerified){
          alert("Please verify your email");
        }else{
          alert("Login in successfully")
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode.localeCompare("auth/wrong-password")===0){
          alert("LOGIN ERROR:Wrong Email or Password");
        }else if(errorCode.localeCompare("auth/user-not-found")===0){
          alert("User not found");
        }else{
          console.log("");
        }
      });
  });
};
