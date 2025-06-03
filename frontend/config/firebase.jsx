import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// API FOR FREE HEHE PAGOD NAKO
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
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);