let sendInfo = document.getElementById("sendInfo");

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
       
       let CName;
       let CMobile;
       let CAddress;
       let CPinCode;
       let CJamin;
       
       function readForm() {
        CName = document.getElementById("CName").value;
        CMobile = document.getElementById("CMobile").value;
        CAddress = document.getElementById("CAddress").value;
        CPinCode = document.getElementById("CPinCode").value;
        CJamin = document.getElementById("CJamin").value;

          console.log(CName, CMobile, CAddress, CPinCode, CJamin);
       }
       function SubmitForm(e) {
         e.preventDefault();
         readForm();
       
         set(ref(database, "Client/" + CName), {
           Name: CName,
           Mobile: CMobile,
           Address: CAddress,
           PinCode: CPinCode,
           Jamin: CJamin
         })
           .then(() => {
            alert("Survey Send Successfully")
            CName = document.getElementById("CName").value = "";
            CMobile = document.getElementById("CMobile").value = "";
            CAddress = document.getElementById("CAddress").value = "";
            CPinCode = document.getElementById("CPinCode").value = "";
            CJamin = document.getElementById("CJamin").value = "";
           })
           .catch((error) => {
             console.error("Error inserting data: ", error);
           });
       };
        

       sendInfo.addEventListener('click', SubmitForm)