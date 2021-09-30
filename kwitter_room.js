// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVZ13sf9lKxSSsTm525bDuBbWa6Y-QEpQ",
    authDomain: "kwitter-project-a973b.firebaseapp.com",
    projectId: "kwitter-project-a973b",
    storageBucket: "kwitter-project-a973b.appspot.com",
    messagingSenderId: "986004654232",
    appId: "1:986004654232:web:880975296a7844ad3668ed"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();