// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC74_HFxA8sKxxup-DkdoPb0YeH_m1f7-U",
  authDomain: "concept35-react-hook-router.firebaseapp.com",
  projectId: "concept35-react-hook-router",
  storageBucket: "concept35-react-hook-router.appspot.com",
  messagingSenderId: "301842601756",
  appId: "1:301842601756:web:ff8efdee90fc8f843e8cd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;