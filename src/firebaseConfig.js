import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRXZSptIOrmyuQ_a0uYtgt5pUT7qpiATw",
  authDomain: "qotd-23295.firebaseapp.com",
  databaseURL: "https://qotd-23295-default-rtdb.firebaseio.com",
  projectId: "qotd-23295",
  storageBucket: "qotd-23295.appspot.com",
  messagingSenderId: "912405571204",
  appId: "1:912405571204:web:b8a11f1408ed91ec2b84d1",
  measurementId: "G-PS19CWKQBK"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };