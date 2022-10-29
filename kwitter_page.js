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
  user_name=localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name")
  document.getElementById("room_name").innerHTML = ""+room_name +"";

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data ['like'];
name_with_tag = "<h4>"+name+"</h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>"
like_button = "<button id="+firebase_message_id+" class='btn btn-warning' value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like+"</span></button><hr>";
row = name_with_tag+ message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        
          name:user_name,
          message:msg,
          like:0

    });
    document.getElementById("msg").value = "";
}
function updateLike(message_id){
    console.log("Clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
    });
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

