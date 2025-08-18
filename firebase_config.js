// firebase_config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAEGIpK9OvEaB1Y9JTbmnuxYecyBzzPle8",
  authDomain: "hospital-website-c326d.firebaseapp.com",
  projectId: "hospital-website-c326d",
  storageBucket: "hospital-website-c326d.appspot.com",
  messagingSenderId: "87202656235",
  appId: "1:87202656235:web:f1251625e9aab5bf8cf3ae",
  measurementId: "G-3RP04EN03K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
