import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import {getFirestore, doc, getDoc} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js"


const firebaseConfig = {
    apiKey: "AIzaSyBznDPQViP6tTsx58VPPwodZ0wMbpLwQ04",
    authDomain: "fir-jslogin.firebaseapp.com",
    projectId: "fir-jslogin",
    storageBucket: "fir-jslogin.firebasestorage.app",
    messagingSenderId: "1076308838234",
    appId: "1:1076308838234:web:372c59b1560a647e705563"
  };


  const app= initializeApp(firebaseConfig)
  const auth=getAuth(app)
  const db=getFirestore(app)

  const Email=document.getElementById("email");
  const name=document.getElementById("name");
  const logout=document.getElementById("Logout");

  // Fetch user details 

  onAuthStateChanged(auth, (user)=>{
    if(user){
        const userDocRef=doc(db, "users",user.uid)
        getDoc(userDocRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                Email.textContent=userData.email;
                name.textContent=userData.UserName;
            }
            else{
                alert("No user data found!");
            }
        })
        .catch((error)=>{
            console.error("Error fetching user data:",error);
            alert("Failed to fetch user data.");
        })
    }
    else{
        window.location.href="login.html";
    }
  })


  logout.addEventListener("click",()=>{
    signOut(auth)
    .then(()=>{
        window.location.href="login.html";
    })
    .catch((error)=>{
        alert("Logout Failed");
    })
  })