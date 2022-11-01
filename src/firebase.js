import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUBbLwnP7DRP68K5E8pmZ9HVeQz_V3wQw",
    authDomain: "chat-clone-a0e24.firebaseapp.com",
    databaseURL: "https://chat-clone-a0e24-default-rtdb.firebaseio.com",
    projectId: "chat-clone-a0e24",
    storageBucket: "chat-clone-a0e24.appspot.com",
    messagingSenderId: "987073337683",
    appId: "1:987073337683:web:ac9d7df670a7cb4d7069a6",
    measurementId: "G-GXX363MPQW"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;