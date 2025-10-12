// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1335Pt--9yDvnK4j1aJSW2Simuo6mF3s",
  authDomain: "afretec-pulse.firebaseapp.com",
  projectId: "afretec-pulse",
  storageBucket: "afretec-pulse.firebasestorage.app",
  messagingSenderId: "412974491041",
  appId: "1:412974491041:web:1568cc345d25ed2ce2d7e0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
