// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX17DWM5cPf9pV4t9tF4Hl_EpjfUglNCA",
  authDomain: "tinig-ng-baryo.firebaseapp.com",
  projectId: "tinig-ng-baryo",
  storageBucket: "tinig-ng-baryo.firebasestorage.app",
  messagingSenderId: "858055358686",
  appId: "1:858055358686:web:001a17330ef7d0c34eaa4f",
  measurementId: "G-H7QHM6MPQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);