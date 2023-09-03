import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC53-RlaYsyBbPPDgVc08GYtf7KDaOulZg",
  authDomain: "linkedin-clone-dbb27.firebaseapp.com",
  projectId: "linkedin-clone-dbb27",
  storageBucket: "linkedin-clone-dbb27.appspot.com",
  messagingSenderId: "230513657959",
  appId: "1:230513657959:web:7e963af38e2bc250df2cc2",
  measurementId: "G-KZDKRNR4SZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
