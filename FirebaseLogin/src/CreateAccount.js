 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
 import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
 

 import { ENV } from "./env.js";


 const firebaseConfig = {
  apiKey: ENV.Firebase_API_Key,
  authDomain: ENV.Firebase_AuthDomain,
  projectId: ENV.Firebase_projectId,
  storageBucket: ENV.Firebase_storageBucket,
  messagingSenderId: ENV.Firebase_messagingSenderId,
  appId: ENV.Firebase_appId,
 };

 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 const db=getFirestore(app)
 

const submit=document.getElementById('submit');

submit.addEventListener('click',function(e){
    e.preventDefault();
    const emailField=document.getElementById('email');
    const passwordField=document.getElementById('password');
    const UserNameField=document.getElementById('Username');


    const email=emailField.value;
    const password=passwordField.value;
    const UserName=UserNameField.value;



    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     const user=userCredential.user;
     
     setDoc(doc(db,"users",user.uid),{
      email:user.email,
      UserName:UserName,
      uid:user.uid,
     }).then(()=>{
       alert("User is successfully created.")
       emailField.value="";
       passwordField.value="";
       UserNameField.value="";
       window.location.href="login.html";
     })
      
    })
    .catch((error) => {
      
      const errorMessage = error.message;
      alert(errorMessage);
    });
})