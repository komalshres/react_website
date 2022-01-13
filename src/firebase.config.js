import firebase from "./firebase.config";

const firebaseConfig = {
  apiKey: "AIzaSyAN658ZWUov_2nHsCwO51QVQ-WaAuWPKhQ",
  authDomain: "reactcontact-3386c.firebaseapp.com",
  databaseURL:
    "https://reactcontact-3386c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactcontact-3386c",
  storageBucket: "reactcontact-3386c.appspot.com",
  messagingSenderId: "253281269673",
  appId: "1:253281269673:web:9805b0dbc39a7040ea36b8",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
