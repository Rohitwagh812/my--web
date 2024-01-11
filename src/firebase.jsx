
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore"


const firebaseConfig = {

  apiKey: "AIzaSyDrEy-Br81cEO2kHGHgTjrmOmhA0ncyaYM",

  authDomain: "my-web-page-5e621.firebaseapp.com",

  projectId: "my-web-page-5e621",

  storageBucket: "my-web-page-5e621.appspot.com",

  messagingSenderId: "924655650975",

  appId: "1:924655650975:web:f89657e28a9cc6c83c7aaa",

  measurementId: "G-9PVDG73ZLD"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
