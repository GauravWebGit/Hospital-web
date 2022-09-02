import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider, 
  signInWithPopup,
  sendPasswordResetEmail, 
  getAuth
} from "firebase/auth";
import Popup from "reactjs-popup";
import { auth } from "../Firebase"; 
import { history } from "../history";

export const userApi = (values) => {
  console.log("newUser", values);
  // firebase intigration
  return new Promise((resolve, reject) => {
    console.log(auth, values.email, values.password);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            const uid = user.uid;
            sendEmailVerification(auth.currentUser).then(() => {
              console.log(auth.currentUser);
              // Email verification sent!
              resolve("Email verification sent your email!");
            });
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
          reject("This email is already in use");
        }
      });
  });
};

export const SignInAPI = (values) => {
  // console.log("sign in successfully",values);
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if(!user.emailVerified){
          reject("Please verify your email");
        }else{
          resolve(user);
          history.push("/");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode.localeCompare("auth/wrong-password")===0){
          reject("LOGIN ERROR:Wrong Email or Password");
        }else if(errorCode.localeCompare("auth/user-not-found")===0){
          reject("User not found");
        }else{
          reject("LOGIN ERROR:Wrong Email or Password")
        }
      });
  });
};

export const signOutAPI = () => {
  console.log("logout successfully");
   return new Promise((resolve,reject) => {
        signOut(auth).then(() => {
          resolve("Sign-out successful");
          history.push("/login");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            reject(errorCode,"something went to wrong");
        });
   });
}

export const googleSigninAPI = () => {
  return new Promise((resolve,reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      resolve({payload:user});
      history.push("/");
    }).catch((error) => {
      const errorCode = error.code;
      reject(errorCode);
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    })
  });
}
  export const resetPasswordAPI =({email}) =>{
    return new Promise((resolve,reject) => {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
            resolve("Password reset email sent!");
            history.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.localeCompare("auth/invalid-value-(email),-starting-an-object-on-a-scalar-field") === 0) {
            reject("Please Enter registred email");
          } else {
            reject("Somthing went wrong");
          }
        });
    })
}
