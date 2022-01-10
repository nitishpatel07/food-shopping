import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUiXYbLuBMLvW1dmM2KVHIUoDGM76pP6o",
  authDomain: "food-app-ec6aa.firebaseapp.com",
  projectId: "food-app-ec6aa",
  storageBucket: "food-app-ec6aa.appspot.com",
  messagingSenderId: "744279547334",
  appId: "1:744279547334:web:fe2ec66ab08bbcc33426c7",
  measurementId: "G-N5DRTMQD2M",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB;
