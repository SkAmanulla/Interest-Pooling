 import firebase from 'firebase/app';

 import "firebase/auth";

 import "firebase/database";

 import "firebase/storage";
 
 
 var firebaseConfig = {
    apiKey: "AIzaSyCgjMQAgTW5up3NKYNivQfMRg2W95TeVYI",
    authDomain: "react-slack-clone-a2cf3.firebaseapp.com",
    databaseURL: "https://react-slack-clone-a2cf3.firebaseio.com",
    projectId: "react-slack-clone-a2cf3",
    storageBucket: "react-slack-clone-a2cf3.appspot.com",
    messagingSenderId: "94957252389",
    appId: "1:94957252389:web:42ab0bbf2394474ccef4cc",
    measurementId: "G-EGBKZ56VRH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;