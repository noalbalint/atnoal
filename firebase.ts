// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc-M4faZBHDfz8nPgFMm7_j3U2IdtHc1I",
  authDomain: "noalat-6ee87.firebaseapp.com",
  projectId: "noalat-6ee87",
  storageBucket: "noalat-6ee87.appspot.com",
  messagingSenderId: "346480650718",
  appId: "1:346480650718:web:9a8fb39f871b287258954f",
  measurementId: "G-W65MTCYXBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics
const analytics = getAnalytics(app);

export {
  app,
  analytics,
  logEvent,
}