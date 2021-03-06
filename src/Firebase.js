import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW0heUAC96nA6vm1OYPJUPIuOqn7ENroU",
  authDomain: "linkedin-clone-4be84.firebaseapp.com",
  projectId: "linkedin-clone-4be84",
  storageBucket: "linkedin-clone-4be84.appspot.com",
  messagingSenderId: "716871530088",
  appId: "1:716871530088:web:44d43a52192be0f452addd",
};

firebase.initializeApp(firebaseConfig); // eslint-disable-line
const db = firebase.firestore(); // eslint-disable-line
const auth = firebase.auth(); // eslint-disable-line

export { db, auth };
export default db;
