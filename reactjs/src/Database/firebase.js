import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCw0FEXCcCek9AJEbNA6nW7J7GbRTl14Zw",
  authDomain: "tic-juanevillam.firebaseapp.com",
  projectId: "tic-juanevillam",
  storageBucket: "tic-juanevillam.appspot.com",
  messagingSenderId: "107209326431",
  appId: "1:107209326431:web:51d7fada8fcfe7d68fc0ea",
  measurementId: "G-WVSQ58214E"
};

firebase.initializeApp( firebaseConfig );

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const FieldValue = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, db, storage, FieldValue, googleAuthProvider, facebookAuthProvider, firebase };