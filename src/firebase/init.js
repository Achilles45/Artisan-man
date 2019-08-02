import firebase from 'firebase';
import firestore from 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyCj5I6E4C7TiyM4qZIttM4VqEkxMuVww-I",
    authDomain: "artisanman-2d275.firebaseapp.com",
    databaseURL: "https://artisanman-2d275.firebaseio.com",
    projectId: "artisanman-2d275",
    storageBucket: "",
    messagingSenderId: "565319840437",
    appId: "1:565319840437:web:4fe20c5c1fc3002a"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  export default firebaseApp.firestore()