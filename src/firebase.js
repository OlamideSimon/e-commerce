// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ_UKncsa4d0NkZp6cUGq2XUy-m1aDFCA",
  authDomain: "e-commerce-58ea4.firebaseapp.com",
  projectId: "e-commerce-58ea4",
  storageBucket: "e-commerce-58ea4.appspot.com",
  messagingSenderId: "759918587039",
  appId: "1:759918587039:web:59180aa39188631c6d86aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    app,
    db
}