var firebaseConfig = {
  apiKey: "AIzaSyBediba5MzEhnq17fkQrZDfONGPvtuf_yQ",
  authDomain: "chat-app-a9c92.firebaseapp.com",
  databaseURL: "https://chat-app-a9c92-default-rtdb.firebaseio.com",
  projectId: "chat-app-a9c92",
  storageBucket: "chat-app-a9c92.appspot.com",
  messagingSenderId: "864629331118",
  appId: "1:864629331118:web:9e642628490d92359c893f",
  measurementId: "G-87LZECW112"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
  room_name = document.getElementById("room_name").value

  firebase.database().ref("/").child(room_name).update({purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}

