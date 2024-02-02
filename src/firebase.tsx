import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvs7Lti_W3q2ZGi83hfmvXexEnUIt1qg4",
    authDomain: "playground-3dc26.firebaseapp.com",
    projectId: "playground-3dc26",
    storageBucket: "playground-3dc26.appspot.com",
    messagingSenderId: "148782163938",
    appId: "1:148782163938:web:bde6ecb1c53acea54a7bbb",
    measurementId: "G-G3QGS346Q4"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}

