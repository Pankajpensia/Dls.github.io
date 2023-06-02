
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpl6rhH1dIHJexkY92PU9Z-PHhwl0CHHk",
  authDomain: "deeplandsolution.firebaseapp.com",
  databaseURL: "https://deeplandsolution-default-rtdb.firebaseio.com",
  projectId: "deeplandsolution",
  storageBucket: "deeplandsolution.appspot.com",
  messagingSenderId: "757256673145",
  appId: "1:757256673145:web:65196e8f1bc9ca531701a8",
  measurementId: "G-D3YBBBLGSZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);
	  
document.getElementById("login").addEventListener("click", function() {
var email =  document.getElementById("email").value + '@dls.com';
var password = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log(user);
  alert("Login successfully!!!");
  localStorage.setItem("UserName", email);
   
setTimeout(()=>{
   window.open("Home.html", "_self");  

}, 1000)	 
   

  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
  alert(errorMessage);
});		  		  
});
//----- End

// //----- Logout code start	  
// document.getElementById("logout").addEventListener("click", function() {
// signOut(auth).then(() => {
//   // Sign-out successful.
//   console.log('Sign-out successful.');
//   alert('Sign-out successful.');
//   document.getElementById('logout').style.display = 'none';
// }).catch((error) => {
//   // An error happened.
//   console.log('An error happened.');
// });		  		  
// });
// //----- End

        
