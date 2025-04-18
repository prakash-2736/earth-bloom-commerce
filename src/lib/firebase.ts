
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK9hIIO8cEY20jsYqBW-HK4YV1Ynr2BhU",
  authDomain: "natureaft-9ef1c.firebaseapp.com",
  projectId: "natureaft-9ef1c",
  storageBucket: "natureaft-9ef1c.firebasestorage.app",
  messagingSenderId: "991532648239",
  appId: "1:991532648239:web:3d03994f402920d5e643da",
  measurementId: "G-W1K97LC75V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;
