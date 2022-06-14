import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { userInfo } from 'os';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBn4uk94TZnQqg5oCigM8PAYCuo_813L7g",
  authDomain: "horta-ifms.firebaseapp.com",
  databaseURL: "https://horta-ifms-default-rtdb.firebaseio.com",
  projectId: "horta-ifms",
  storageBucket: "horta-ifms.appspot.com",
  messagingSenderId: "176432618141",
  appId: "1:176432618141:web:aef35e5762ef95a8ea9274",
  measurementId: "G-8065NX36BW"
});

//