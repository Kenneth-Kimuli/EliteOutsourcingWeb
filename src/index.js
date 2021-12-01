// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo8R3o6meGBHzhfitgkU-2w09aZda3408",
  authDomain: "eliteoutsourcing-cf8c8.firebaseapp.com",
  projectId: "eliteoutsourcing-cf8c8",
  storageBucket: "eliteoutsourcing-cf8c8.appspot.com",
  messagingSenderId: "958077309393",
  appId: "1:958077309393:web:b8c1488d027cc3d18710f0",
  measurementId: "G-3Z89PGSBEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);
