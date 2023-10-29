import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { defer } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBLYKaXD_QMtI-nCu8J21PhAeG0tc3MKSQ",
  authDomain: "vanlife-c4d65.firebaseapp.com",
  projectId: "vanlife-c4d65",
  storageBucket: "vanlife-c4d65.appspot.com",
  messagingSenderId: "168623412885",
  appId: "1:168623412885:web:548a0453d75b2c2f5bed9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function loader() {
  const querySnapshot = await getDocs(collection(db, "vans"));
  const vansArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return defer({ vans: vansArr });
}
