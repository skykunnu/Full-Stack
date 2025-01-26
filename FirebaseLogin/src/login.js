import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

import {ENV}  from "./env.js";
 

const firebaseConfig = {
  apiKey: ENV.Firebase_API_Key,
  authDomain: ENV.Firebase_AuthDomain,
  projectId: ENV.Firebase_projectId,
  storageBucket: ENV.Firebase_storageBucket,
  messagingSenderId: ENV.Firebase_messagingSenderId,
  appId: ENV.Firebase_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login = document.getElementById("login");

login.addEventListener("click", function (e) {
  e.preventDefault();
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const UserNameField = document.getElementById("Username");

  const email = emailField.value;
  const password = passwordField.value;
  const UserName = UserNameField.value;

  signInWithEmailAndPassword(auth, email, password, UserName)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: user.uid,
          email: user.email,
          userName: user.UserName,
        })
      );

      window.location.href = "profile.html";
      // ...
    })
    .catch((error) => {
      alert(`Your Credentials doesn't exist`);
      emailField.value = "";
      passwordField.value = "";
    });
});
