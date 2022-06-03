import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB-UGFkKBxpImKLQvg8Hkw3DY_1M266sD4",
    authDomain: "login-a6be9.firebaseapp.com",
    projectId: "login-a6be9",
    storageBucket: "login-a6be9.appspot.com",
    messagingSenderId: "533871703471",
    appId: "1:533871703471:web:586caf556b1cbe1858ab5a"
};

app.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export { db, auth }