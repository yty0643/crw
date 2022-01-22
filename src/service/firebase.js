import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBIHwXVio8_omoMHuV2rc011LJsMYTRKWI",
  authDomain: "card-maker-7429f.firebaseapp.com",
  databaseURL: "https://card-maker-7429f-default-rtdb.firebaseio.com",
  projectId: "card-maker-7429f",
  storageBucket: "card-maker-7429f.appspot.com",
  messagingSenderId: "494221704810",
  appId: "1:494221704810:web:521271393c7442e7fe9413",
  measurementId: "G-8Y1CMPYS9Y"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp

