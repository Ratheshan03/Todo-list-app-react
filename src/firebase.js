import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBKjFCuxQezJRVgk75mHQ5LAVHdwytVCAU",
    authDomain: "todo-app-01-df6e1.firebaseapp.com",
    projectId: "todo-app-01-df6e1",
    storageBucket: "todo-app-01-df6e1.appspot.com",
    messagingSenderId: "421180900483",
    appId: "1:421180900483:web:ea082e85aec5046e48c7b6",
    measurementId: "G-V6R2PVQNSP"
    
});

const db = firebaseApp.firestore();

export default db;