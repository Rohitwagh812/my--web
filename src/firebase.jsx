
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore"

import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyDrEy-Br81cEO2kHGHgTjrmOmhA0ncyaYM",
  
  authDomain: "my-web-page-5e621.firebaseapp.com",

  databaseURL: "https://my-web-page-5e621-default-rtdb.firebaseio.com",

  projectId: "my-web-page-5e621",

  storageBucket: "my-web-page-5e621.appspot.com",

  messagingSenderId: "924655650975",

  appId: "1:924655650975:web:9f35ed34ac46640c3c7aaa",

  measurementId: "G-N503V18W96"

};


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);
