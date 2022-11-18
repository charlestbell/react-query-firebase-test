import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebase = initializeApp({
  apiKey: "AIzaSyBM7HNZF4CPMEjPa2Mk99SGfxPJ4VyAj_M",
  authDomain: "brog-trip-journal.firebaseapp.com",
  databaseURL: "https://brog-trip-journal-default-rtdb.firebaseio.com",
  projectId: "brog-trip-journal",
  storageBucket: "brog-trip-journal.appspot.com",
  messagingSenderId: "92719564117",
});

export const db = getFirestore(firebase);
