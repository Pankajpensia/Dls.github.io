let register = document.getElementById("register");

// Initialize Firebase

       import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
       import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
       
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
       
       const firebaseApp = initializeApp(firebaseConfig);
       const database = getDatabase(firebaseApp);
       
       let name;
       let email;
       let password;
       
       function readForm() {
        name = document.getElementById("name").value;
        email = document.getElementById("email").value;
        password = document.getElementById("password").value;

          console.log(name, email, password);
       }
       function SubmitForm(e) {
         e.preventDefault();
         readForm();
       
         set(ref(database, "Users/" + name), {
           Name: name,
           Mobile: email,
           Password: password
         })
           .then(() => {
            console.log('Data Send Successfully')
              name = document.getElementById("name").value = "";
              email = document.getElementById("email").value = "";
              password = document.getElementById("password").value = "";

           })
           .catch((error) => {
             console.error("Error inserting data: ", error);
           });
       };
        

       register.addEventListener('click', SubmitForm)