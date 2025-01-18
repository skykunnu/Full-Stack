 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
 import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
 
 const firebaseConfig = {
   apiKey: "AIzaSyBznDPQViP6tTsx58VPPwodZ0wMbpLwQ04",
   authDomain: "fir-jslogin.firebaseapp.com",
   projectId: "fir-jslogin",
   storageBucket: "fir-jslogin.firebasestorage.app",
   messagingSenderId: "1076308838234",
   appId: "1:1076308838234:web:372c59b1560a647e705563"
 };

 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 const db=getFirestore(app)
 

const submit=document.getElementById('submit');

submit.addEventListener('click',function(e){
    e.preventDefault();
    const emailField=document.getElementById('email');
    const passwordField=document.getElementById('password');

    const email=emailField.value;
    const password=passwordField.value;



    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     const user=userCredential.user;
     
     setDoc(doc(db,"users",user.uid),{
      email:user.email,
      uid:user.uid,
     }).then(()=>{
       alert("User is successfully created.")
       emailField.value="";
       passwordField.value="";
       window.location.href="login.html"
     })
      
    })
    .catch((error) => {
      
      const errorMessage = error.message;
      alert(errorMessage);
    });
})