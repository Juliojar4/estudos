import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEdnflxZB0MLcVegs8NS1sj_HZLuNqQi0",
  authDomain: "estudos-c2661.firebaseapp.com",
  projectId: "estudos-c2661",
  storageBucket: "estudos-c2661.appspot.com",
  messagingSenderId: "914003660952",
  appId: "1:914003660952:web:cfbffdac4dabb53ce740ed",
  measurementId: "G-MYCE79W0SS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
