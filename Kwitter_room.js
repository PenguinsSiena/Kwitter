var firebaseConfig = {
  apiKey: "AIzaSyA1tJRQgdXYSRPP7pTLFPkjq1iUN4QEez4",
  authDomain: "lets-chat-web-app-67990.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-67990-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-67990",
  storageBucket: "lets-chat-web-app-67990.appspot.com",
  messagingSenderId: "1023355935178",
  appId: "1:1023355935178:web:153be17196ee5045039733",
  measurementId: "G-T0D4XNQJK3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " +user_name +"!";
  
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose: "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location="kwitter_page.html";}
 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room name -" + Room_names);
  row = "<br><div class='room_name' id =" +Room_names+ "onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";

}