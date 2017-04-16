import * as Firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAMHgkeZXqncJp3CBGTU2O21D7f99srDkQ",
    authDomain: "reactloginapp.firebaseapp.com",
    databaseURL: "reactloginapp.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  export const firebaseRef = Firebase.initializeApp(config);
