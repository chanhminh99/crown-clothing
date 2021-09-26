import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCkkVJ0P9PUONq9_zKLMd4uo70_KWKsPj4",
    authDomain: "crowndb-e2695.firebaseapp.com",
    projectId: "crowndb-e2695",
    storageBucket: "crowndb-e2695.appspot.com",
    messagingSenderId: "945694486847",
    appId: "1:945694486847:web:8007ff5b1b16130c92238a",
    measurementId: "G-GD9GKZ3G3N"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;