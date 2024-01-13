// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCECAdYHD19Nz14-w44-6GfWpBmBlhDAmI",
  authDomain: "codehacker-mern.firebaseapp.com",
  projectId: "codehacker-mern",
  storageBucket: "codehacker-mern.appspot.com",
  messagingSenderId: "389389377375",
  appId: "1:389389377375:web:0c3673a5d0621a0b3660ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;