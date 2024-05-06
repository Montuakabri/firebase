import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDEsKQ0krU6kqgUA9aEwAX9XPedIGHkg8",
  authDomain: "for-test-bb4b2.firebaseapp.com",
  projectId: "for-test-bb4b2",
  storageBucket: "for-test-bb4b2.appspot.com",
  messagingSenderId: "277503926647",
  appId: "1:277503926647:web:db0d095ba7a81dc71ac172",
  measurementId: "G-R8T6NC3QPY",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
