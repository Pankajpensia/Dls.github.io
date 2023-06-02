import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyAf5FwxNwDolHotO61Qk0Bal91Q-kpu2DA",
authDomain: "hfcs-database-c9b82.firebaseapp.com",
projectId: "hfcs-database-c9b82",
storageBucket: "hfcs-database-c9b82.appspot.com",
messagingSenderId: "919542972801",
appId: "1:919542972801:web:e8d3e3cd262eca42996880",
measurementId: "G-VZEJ9RG5V5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

  //----- Login code start	  
document.getElementById("login").addEventListener("click", function() {
var name = document.getElementById("name");
var email =  document.getElementById("login_email").value;
var password = document.getElementById("login_password").value;

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log(user);
  alert(user.email+" Login successfully!!!");
	localStorage.setItem("Name", name.value);
	localStorage.setItem("email", email);

  setInterval(function(){
  window.open("index.html");
  })

  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
  alert(errorMessage)
});		  		  
});
//----- End

document.getElementById("logout").addEventListener("click", function() {
signOut(auth).then(() => {
	  // Sign-out successful.
	  console.log('Sign-out successful.');
	  alert('Sign-out successful.');
	}).catch((error) => {
	  // An error happened.
	  console.log('An error happened.');
	});		  		  
});
//----- End
