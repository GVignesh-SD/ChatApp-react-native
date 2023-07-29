import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChLpkhqNCBpgAE0ZZOR4dTEaLy6j92NFU",
  authDomain: "chatapplication-ac2df.firebaseapp.com",
  projectId: "chatapplication-ac2df",
  storageBucket: "chatapplication-ac2df.appspot.com",
  messagingSenderId: "830243758258",
  appId: "1:830243758258:web:7ae1b42d2642edc00fa9ab",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };
