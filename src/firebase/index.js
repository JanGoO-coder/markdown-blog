// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-zFOEYNNXV9InRIeRaBVXOm7kPiAmql4",
  authDomain: "questionner-9015b.firebaseapp.com",
  projectId: "questionner-9015b",
  storageBucket: "questionner-9015b.appspot.com",
  messagingSenderId: "389546612732",
  appId: "1:389546612732:web:b264a50efa7b07d61bc479"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db