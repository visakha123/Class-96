//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
    {
    msg = document.getElementById("msg").value;
    firbase.database().ref(room_name).push({
        name:user_name, 
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}
//End code
      } });  }); }
getData();
