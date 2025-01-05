// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkprUBzwJ1_3noHQiT9gU5UTvEtLx9qks",
  authDomain: "nutras-3f7cc.firebaseapp.com",
  databaseURL: "https://nutras-3f7cc-default-rtdb.firebaseio.com",
  projectId: "nutras-3f7cc",
  storageBucket: "nutras-3f7cc.firebasestorage.app",
  messagingSenderId: "803345831146",
  appId: "1:803345831146:web:1160397730fb75a7bbb393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);