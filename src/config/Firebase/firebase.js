import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import { getFirestore, collection, addDoc} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcEQ5B2YjqxlmLtCkzx68pYN3U2ZEiPAI",
  authDomain: "xenons-a25a3.firebaseapp.com",
  projectId: "xenons-a25a3",
  storageBucket: "xenons-a25a3.appspot.com",
  messagingSenderId: "515753310807",
  appId: "1:515753310807:web:f56e2ee74fee39a41e8112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err)
    alert(err.meesage)
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};
console.log(auth);

export {
  auth,
  db,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout
};
export const database = getDatabase(app);
