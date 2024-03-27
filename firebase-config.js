// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAVkm0wrWrKJHghSC_UGIFg3_4PMSBBqsY",
  authDomain: "starroadbase.firebaseapp.com",
  projectId: "starroadbase",
  storageBucket: "starroadbase.appspot.com",
  messagingSenderId: "362354805780",
  appId: "1:362354805780:web:ae469310fcd38eac002b01",
};

const app = initializeApp(firebaseConfig, {
  
});
const firebaseAuth = getAuth(app);

export { app, firebaseAuth };
