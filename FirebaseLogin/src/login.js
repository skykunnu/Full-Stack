import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBznDPQViP6tTsx58VPPwodZ0wMbpLwQ04",
  authDomain: "fir-jslogin.firebaseapp.com",
  projectId: "fir-jslogin",
  storageBucket: "fir-jslogin.firebasestorage.app",
  messagingSenderId: "1076308838234",
  appId: "1:1076308838234:web:372c59b1560a647e705563",
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
