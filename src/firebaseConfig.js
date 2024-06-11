import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA6ZY2AAv-XYns5XZFq16ncY5whmWBuci8",
  authDomain: "expressjs-firebase-a6afa.firebaseapp.com",
  projectId: "expressjs-firebase-a6afa",
  storageBucket: "expressjs-firebase-a6afa.appspot.com",
  messagingSenderId: "637172701588",
  appId: "1:637172701588:web:05bf82c2bb1733a7fad781",
  measurementId: "G-DR9WPQ2LBR"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }
