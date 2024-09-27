import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCv3tLOXlwRKE0K1Lk733T7nNhtBnGJ9XE",
  authDomain: "coderhouse-60030-ed75a.firebaseapp.com",
  projectId: "coderhouse-60030-ed75a",
  storageBucket: "coderhouse-60030-ed75a.appspot.com",
  messagingSenderId: "695780316329",
  appId: "1:695780316329:web:c9b59f78e3b4bb824ac5b8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)