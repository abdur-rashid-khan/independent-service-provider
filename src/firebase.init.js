// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDLByevusL_ZPH0VaPMgODfzmsFneLbbdg",
   authDomain: "ar-photography-f8773.firebaseapp.com",
   projectId: "ar-photography-f8773",
   storageBucket: "ar-photography-f8773.appspot.com",
   messagingSenderId: "555472463998",
   appId: "1:555472463998:web:b5b6b7df663458c4c8d02f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
