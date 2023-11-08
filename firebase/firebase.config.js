// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf-I3E6Mh78erhSST9fkJtXA10FYz0FHc",
    authDomain: "abrar-library-auth.firebaseapp.com",
    projectId: "abrar-library-auth",
    storageBucket: "abrar-library-auth.appspot.com",
    messagingSenderId: "820256780341",
    appId: "1:820256780341:web:4823e90d8c72f0d136017c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;