import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    await loginUser({ email, password });
    localStorage.setItem("isLoggedIn", true);
    window.location.href = "/host";
  } catch (err) {
    return err;
  }
  return null;
}


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

async function loginUser(creds) {
  const { email, password } = creds;
  const querySnapshot = await getDocs(collection(db, "users"));

  const users = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  const user = users.filter(
    (user) => user.email == email && user.password == password
  );
  if (user.length < 1) {
    throw {
      message: "No user found",
    };
  }
  return user[0];
}
