
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDt7tQG5ambpcanDmK2_O-bXWlQ3Y3mHQU",
//   authDomain: "vehiclerent-app.firebaseapp.com",
//   projectId: "vehiclerent-app",
//   storageBucket: "vehiclerent-app.appspot.com",
//   messagingSenderId: "35247097928",
//   appId: "1:35247097928:web:4df55a4fe566e9b277307d",
//   measurementId: "G-X1XRGXHNYS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyDt7tQG5ambpcanDmK2_O-bXWlQ3Y3mHQU",
  authDomain: "vehiclerent-app.firebaseapp.com",
  projectId: "vehiclerent-app",
  storageBucket: "vehiclerent-app.appspot.com",
  messagingSenderId: "35247097928",
  appId: "1:35247097928:web:4df55a4fe566e9b277307d",
  measurementId: "G-X1XRGXHNYS"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase)
export const storage=getStorage(firebase)













