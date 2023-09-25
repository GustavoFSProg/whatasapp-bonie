
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAtY5i5M7DXGFwNL1jxk32cyFZg3lrmR4",
  authDomain: "whatsappbonie.firebaseapp.com",
  projectId: "whatsappbonie",
  storageBucket: "whatsappbonie.appspot.com",
  messagingSenderId: "989908552992",
  appId: "1:989908552992:web:d6e522e7884a8f00efdb45",
  measurementId: "G-Z4VQX50243"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);

