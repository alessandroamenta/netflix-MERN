import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDlaRrRTjEh0J4oVQ_cKgeKlkAB9_sseXM",
  authDomain: "react-netflix-1f2d1.firebaseapp.com",
  projectId: "react-netflix-1f2d1",
  storageBucket: "react-netflix-1f2d1.appspot.com",
  messagingSenderId: "264827836484",
  appId: "1:264827836484:web:c8293d5880329ce0924411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)