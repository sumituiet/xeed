// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc,getDoc,setDoc  } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyA4ZYNUJ_uf3EMxanMNHHnLuGew2GSpuPU",
    authDomain: "rpi3xiot.firebaseapp.com",
    databaseURL: "https://rpi3xiot.firebaseio.com",
    projectId: "rpi3xiot",
    storageBucket: "rpi3xiot.appspot.com",
    messagingSenderId: "601625423347",
    appId: "1:601625423347:web:6675c3160645a2b1457686",
    measurementId: "G-5FX7MZPNVZ"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const callref = doc(db, "call","Fd7qUSvy5hYAl6IAL3Dn");
const docSnap = await getDoc(callref);
if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().offer);
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

// await setDoc(doc(citiesRef, "SF"), {
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"] });
// await setDoc(doc(citiesRef, "LA"), {
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000,
//     regions: ["west_coast", "socal"] });
// await setDoc(doc(citiesRef, "DC"), {
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000,
//     regions: ["east_coast"] });
// await setDoc(doc(citiesRef, "TOK"), {
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"] });
// await setDoc(doc(citiesRef, "BJ"), {
//     name: "Beijing", state: null, country: "China",
//     capital: true, population: 21500000,
//     regions: ["jingjinji", "hebei"] });
