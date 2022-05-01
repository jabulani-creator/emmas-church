import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8HDfxaOz2L7QKJU7p37nAIC377x544KA",
  authDomain: "emmmasdale-church.firebaseapp.com",
  projectId: "emmmasdale-church",
  storageBucket: "emmmasdale-church.appspot.com",
  messagingSenderId: "1039181714532",
  appId: "1:1039181714532:web:3795a52fd8e9d1fdea3b71",
  measurementId: "G-B6LWZ8T3V8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);