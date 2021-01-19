// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd9YhijLtyBctrdIhGCTFsjXWkY-E1WKw",
  authDomain: "clone-4bc50.firebaseapp.com",
  projectId: "clone-4bc50",
  storageBucket: "clone-4bc50.appspot.com",
  messagingSenderId: "771133718225",
  appId: "1:771133718225:web:9a5d23ff37fa9bbd4fcff0",
};

// firebase.initialize({
//   apiKey: "AIzaSyAd9YhijLtyBctrdIhGCTFsjXWkY-E1WKw",
//   authDomain: "clone-4bc50.firebaseapp.com",
//   projectId: "clone-4bc50",
//   storageBucket: "clone-4bc50.appspot.com",
//   messagingSenderId: "771133718225",
//   appId: "1:771133718225:web:9a5d23ff37fa9bbd4fcff0",
// });

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
