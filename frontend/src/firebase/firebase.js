
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBxznKwbdygT-GeRWgFXoyfE_r-B2sJdZQ",
  authDomain: "stack-over-cloned.firebaseapp.com",
  projectId: "stack-over-cloned",
  storageBucket: "stack-over-cloned.appspot.com",
  messagingSenderId: "183695393345",
  appId: "1:183695393345:web:bc7dd6d867075fc3e1bcc0",
  measurementId: "G-T5MEFHG9J9"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const provider= new GoogleAuthProvider()