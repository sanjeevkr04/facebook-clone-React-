import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1dZdpO9B5Atib892FG5Ju5hw1I2aBHxc",
    authDomain: "facebook-clone-7541f.firebaseapp.com",
    projectId: "facebook-clone-7541f",
    storageBucket: "facebook-clone-7541f.appspot.com",
    messagingSenderId: "937887185464",
    appId: "1:937887185464:web:d7bf9a1509c78a34eb84cd",
    measurementId: "G-8J572BRJQ9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;