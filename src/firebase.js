import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyC1watHJCUBceUNNQc_bF-u-8oKHaOK7BE",
    authDomain: "contact-register-e7729.firebaseapp.com",
    databaseURL: "https://contact-register-e7729-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contact-register-e7729",
    storageBucket: "contact-register-e7729.appspot.com",
    messagingSenderId: "329665521391",
    appId: "1:329665521391:web:7243999381d9dc6206dd1a"
};

var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();