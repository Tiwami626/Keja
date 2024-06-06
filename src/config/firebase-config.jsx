
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "fggrgdrdgredg",
  authDomain: "keja-a010d.firebaseapp.com",
  projectId: "keja-a010d",
  storageBucket: "keja-a010d.appspot.com",
  messagingSenderId: "982433031888",
  appId: "1:982433031888:web:4c5361365c0c273465e0d5",
  measurementId: "G-NEGRHLQJP1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getFirestore(app);
