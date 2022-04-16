// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMldy6kQaeneEAeSwOIt7HcIO5yIZ8wNU",
  authDomain: "bd-tour-c7c18.firebaseapp.com",
  projectId: "bd-tour-c7c18",
  storageBucket: "bd-tour-c7c18.appspot.com",
  messagingSenderId: "850307454501",
  appId: "1:850307454501:web:b4fb86fc29735aa8c5d1cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
