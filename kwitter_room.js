
 var firebaseConfig = {
  apiKey: "AIzaSyA0i2xWeD5P9teRa3Lr5gT-qr_8NIRlXds",
  authDomain: "kwitter-room.firebaseapp.com",
  databaseURL: "https://kwitter-room-default-rtdb.firebaseio.com",
  projectId: "kwitter-room",
  storageBucket: "kwitter-room.appspot.com",
  messagingSenderId: "715045303012",
  appId: "1:715045303012:web:2352c26af0a7e29c1932f1"
};
firebase.initializeApp(firebaseConfig);
var myDB = firebase.database()
var room_number;
function addroom(){
  room_number=document.getElementById("room_name").value;
  myDB.ref("/"+room_number).update({ 
    "purpose" : "addingUser"
  }
  );
  localStorage.setItem("room_number", room_number)
  window.location = "chatroom.html"
}
var row;
function getData(){
  myDB.ref("/").on('value',function(data){
    console.log(data.key , data.val());
    row=""
    var object = data.val();
       for(properties in object){
       console.log(properties)
       row+=` <div class="trending_room"> ${properties}</div> <hr>`
   }
   document.getElementById("output").innerHTML=row;
    });
}
getData();
function logout(){
  window.location="index.html"
}
