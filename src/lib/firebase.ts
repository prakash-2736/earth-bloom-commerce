
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK9hIIO8cEY20jsYqBW-HK4YV1Ynr2BhU",
  authDomain: "natureaft-9ef1c.firebaseapp.com",
  projectId: "natureaft-9ef1c",
  storageBucket: "natureaft-9ef1c.appspot.com",
  messagingSenderId: "991532648239",
  appId: "1:991532648239:web:3d03994f402920d5e643da",
  measurementId: "G-W1K97LC75V"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics only if supported in the current environment
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export default app;
