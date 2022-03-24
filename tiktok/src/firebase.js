import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBLw9LQokjDlEZ1SUNzkheWvPHh3X34tVU",
  authDomain: "tiktok-8beb0.firebaseapp.com",
  projectId: "tiktok-8beb0",
  storageBucket: "tiktok-8beb0.appspot.com",
  messagingSenderId: "654689122360",
  appId: "1:654689122360:web:583babd0e5f65156c6cecd"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;