
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBJJVt5tGoG5IQt8vicwTgc2CD1PiB1z64",
  authDomain: "react-notes-8201b.firebaseapp.com",
  projectId: "react-notes-8201b",
  storageBucket: "react-notes-8201b.appspot.com",
  messagingSenderId: "139301347684",
  appId: "1:139301347684:web:f3247c9149b3520dce5a71"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const notesCollection=collection(db, "notes")