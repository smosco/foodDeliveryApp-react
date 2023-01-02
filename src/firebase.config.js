import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBy9oTvCxqZgKr_VZgLrDrMlroqn3tn9a0",
  authDomain: "restaurantapp-303fc.firebaseapp.com",
  databaseURL: "https://restaurantapp-303fc-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-303fc",
  storageBucket: "restaurantapp-303fc.appspot.com",
  messagingSenderId: "978349881402",
  appId: "1:978349881402:web:be010eed749e9ad03bdd03",
};

// initialize는 app이 없을때 딱 한번 한다.
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const fireStore = getFirestore(app);
const storage = getStorage(app);

export { app, fireStore, storage };
