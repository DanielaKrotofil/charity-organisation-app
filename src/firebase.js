import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu_vcz59l5aaVJJvFU1wCA0gyvK8Ylqhk",
  authDomain: "oddaj-rzeczy-projekt.firebaseapp.com",
  projectId: "oddaj-rzeczy-projekt",
  storageBucket: "oddaj-rzeczy-projekt.appspot.com",
  messagingSenderId: "809936677730",
  appId: "1:809936677730:web:5437815d23e8f9b2951a3b",
  measurementId: "G-G0BMGMKGX6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);