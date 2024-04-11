import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCIQ16eYzXxoGnvkf6KtNpelLQ3RefSXFw",
  authDomain: "chat-de9dc.firebaseapp.com",
  projectId: "chat-de9dc",
  storageBucket: "chat-de9dc.appspot.com",
  messagingSenderId: "349352608943",
  appId: "1:349352608943:web:c2e985efc34a1407dd405a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()