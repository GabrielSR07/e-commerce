import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA5zBiUJBGAQ3sQqv5tTPj1z0CN78amouA",
  authDomain: "rookie-ecommerce-db.firebaseapp.com",
  projectId: "rookie-ecommerce-db",
  storageBucket: "rookie-ecommerce-db.appspot.com",
  messagingSenderId: "1042592800424",
  appId: "1:1042592800424:web:8642433fa716dc9398ac9d",
  measurementId: "G-X51DCJ9M0E"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider).then(function(result) {
  console.log(result);
  console.log('Google account linked!!');
  }).catch(function(err){
    console.log(err);
    console.log('Failed!');
  })

export default firebase;