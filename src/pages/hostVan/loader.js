import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";
import { defer } from "react-router-dom";
import { authUsers } from "../../utils/authUsers";

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

export async function hostVan({ params }) {
  await authUsers();
  const id = params.hostVanId;
  // const docRef = await doc(db, "vans", id);
  // const docSnap = (await getDoc(docRef)).data();
  // return docSnap;
  const q = query(collection(db, "vans"), where("hostId", "==", "123"));
  const hostVans = (await getDocs(q)).docs.map((doc) => ({
    ...doc.data(),
  }));
  const van = hostVans.filter((van) => van.id == id);

  return van[0];
  // filter hostVans so that only id matches
}

export async function hostVans() {
  await authUsers();
  const q = query(collection(db, "vans"), where("hostId", "==", "123"));
  const hostVans = (await getDocs(q)).docs.map((doc) => ({
    ...doc.data(),
  }));
  return defer({ vans: hostVans });
}

export async function van({ params }) {
  const id = params.id;
  const docRef = await doc(db, "vans", id);
  const docSnap = (await getDoc(docRef)).data();
  return docSnap;
}
