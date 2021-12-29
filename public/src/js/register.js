// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo8R3o6meGBHzhfitgkU-2w09aZda3408",
  authDomain: "eliteoutsourcing-cf8c8.firebaseapp.com",
  projectId: "eliteoutsourcing-cf8c8",
  storageBucket: "eliteoutsourcing-cf8c8.appspot.com",
  messagingSenderId: "958077309393",
  appId: "1:958077309393:web:b8c1488d027cc3d18710f0",
  measurementId: "G-3Z89PGSBEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

function signInWithEmailPassword() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('cpassword').value;
    // [START auth_signin_password]
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    // [END auth_signin_password]
  }
  
  function signUpWithEmailPassword() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('cpassword').value;
    var name = document.getElementById('cname').value;
    var id = document.getElementById('cid').value;
    var industry = document.getElementById('cindustry').value;
    // [START auth_signup_password]
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        const database = getDatabase(app);
        // ...

        set(ref(database, 'companies/' + user.uid), {
            name: name,
            id: id,
            email: email,
            industry: industry
          });
        alert('company created');
        // redirect to another page(login)
        window.location.href = "LoginPage.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    // [END auth_signup_password]
  }

  /*function writeUserData(name, id, email, industry){
    const database = getDatabase(app);
    set(ref(database, 'companies/' + user.uid), {
      name: name,
      id: id,
      email: email,
      industry: industry
    });
  }*/
  
document.getElementById("signUp").onclick = signUpWithEmailPassword;
document.getElementById("signIn").onclick = signInWithEmailPassword;