import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyD7hL2hM2l6A5UvzxLMbZgJzvRxL7_QTwg",
//   authDomain: "chat-firebase-7024c.firebaseapp.com",
//   projectId: "chat-firebase-7024c",
//   storageBucket: "chat-firebase-7024c.appspot.com",
//   messagingSenderId: "478201840300",
//   appId: "1:478201840300:web:aaf9c162f3e8da4390d509",
//   measurementId: "G-VX3BY4JYQR"
// }

const firebaseConfig = {
  apiKey: "AIzaSyBAtY5i5M7DXGFwNL1jxk32cyFZg3lrmR4",
  authDomain: "whatsappbonie.firebaseapp.com",
  projectId: "whatsappbonie",
  storageBucket: "whatsappbonie.appspot.com",
  messagingSenderId: "989908552992",
  appId: "1:989908552992:web:d6e522e7884a8f00efdb45",
  measurementId: "G-Z4VQX50243"
}


export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const databaseApp = getFirestore(app)