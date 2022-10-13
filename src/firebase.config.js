import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyCqGlTnV3KuBfwhe8iWIn1oyAj6wA-xCyE",
    authDomain: "onlinestore-786d9.firebaseapp.com",
    projectId: "onlinestore-786d9",
    storageBucket: "onlinestore-786d9.appspot.com",
    messagingSenderId: "26515203705",
    appId: "1:26515203705:web:57594ddea665031d0f96a8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;