// Importações do Firebase v9+
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Importa o módulo de autenticação, se necessário

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDEdnflxZB0MLcVegs8NS1sj_HZLuNqQi0",
  authDomain: "estudos-c2661.firebaseapp.com",
  projectId: "estudos-c2661",
  storageBucket: "estudos-c2661.appspot.com",
  messagingSenderId: "914003660952",
  appId: "1:914003660952:web:cfbffdac4dabb53ce740ed",
  measurementId: "G-MYCE79W0SS"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore e Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
