import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyDFg4BJs2SirrGakxj39w0i0lYt8EPwONA",
    authDomain: "m-city-fc2c6.firebaseapp.com",
    databaseURL: "https://m-city-fc2c6-default-rtdb.firebaseio.com",
    projectId: "m-city-fc2c6",
    storageBucket: "m-city-fc2c6.appspot.com",
    messagingSenderId: "1003621284474",
    appId: "1:1003621284474:web:f245fb0d0ccdd1ea9cd9c3",
    measurementId: "G-P5Y5NZ55M7"
  };



firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');


export {
    firebase,
    firebaseMatches
}




// firebaseDB.ref('matches').once('value').then ((snapshot) =>{
//    console.log(snapshot.val()); 
// })