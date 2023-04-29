import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
  apiKey: "AIzaSyAe6r_sDs9dGpvjui3KHAufGsPu1WHy5RQ",
  authDomain: "maid-for-you-3398a.firebaseapp.com",
  projectId: "maid-for-you-3398a",
  storageBucket: "maid-for-you-3398a.appspot.com",
  messagingSenderId: "370096329430",
  appId: "1:370096329430:web:fa650087470998e7822f77",
  measurementId: "G-VCWJXLCXYB"
};


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };