import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Auth if needed
import { getFirestore } from "firebase/firestore"; // Import Firestore if needed

const firebaseConfig = {
    apiKey: "AIzaSyA6ZY2AAv-XYns5XZFq16ncY5whmWBuci8",
    authDomain: "expressjs-firebase-a6afa.firebaseapp.com",
    projectId: "expressjs-firebase-a6afa",
    storageBucket: "expressjs-firebase-a6afa.appspot.com",
    messagingSenderId: "637172701588",
    appId: "1:637172701588:web:05bf82c2bb1733a7fad781",
    measurementId: "G-DR9WPQ2LBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Auth
const firestore = getFirestore(app); // Initialize Firestore

export { app, analytics, auth, firestore };
