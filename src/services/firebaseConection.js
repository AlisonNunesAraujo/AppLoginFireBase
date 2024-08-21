import { initializeApp } from "firebase/app";

// importar por padrao
import {getFirestore} from 'firebase/firestore'
import { initializeAuth, getReactNativePersistence} from 'firebase/auth'


import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: "AIzaSyBEaZWEXtrCJLkLybisrIRyCQ_JMYdyko4",
  authDomain: "projetoapp-64bef.firebaseapp.com",
  projectId: "projetoapp-64bef",
  storageBucket: "projetoapp-64bef.appspot.com",
  messagingSenderId: "519154569103",
  appId: "1:519154569103:web:7db64847dce9fcc0d145fa"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export {db, auth};
