import firebase from 'firebase/app';
import 'firebase/firebase-firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBZVvjinULBKkkT2CKrSRzBydIVomEYNbQ",
  authDomain: "dropp-retail.firebaseapp.com",
  databaseURL: "https://dropp-retail.firebaseio.com",
  projectId: "dropp-retail",
  storageBucket: "dropp-retail.appspot.com",
  messagingSenderId: "709323758099",
  appId: "1:709323758099:web:8309a193760e968638fde6",
  measurementId: "G-4GYH5ZTJ0J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase