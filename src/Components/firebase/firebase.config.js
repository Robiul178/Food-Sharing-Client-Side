// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArXrb1980ZWmZNVFaVWfhpEBkOIik7vYw",
    authDomain: "kickify-2ff79.firebaseapp.com",
    projectId: "kickify-2ff79",
    storageBucket: "kickify-2ff79.appspot.com",
    messagingSenderId: "85173969162",
    appId: "1:85173969162:web:b32bbf224df57a136adaf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;