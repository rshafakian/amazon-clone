import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBuV0YiC2JmScZ1jo4DD_lMbGbpfdCyLCU",
  authDomain: "clone-30fd7.firebaseapp.com",
  databaseURL: "https://clone-30fd7.firebaseio.com",
  projectId: "clone-30fd7",
  storageBucket: "clone-30fd7.appspot.com",
  messagingSenderId: "839896533221",
  appId: "1:839896533221:web:748011adfd740a0f11ac0c",
  measurementId: "G-R3BDJHMZZW"
})

const auth = firebase.auth();

export {auth};
