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
var msg, likes=0;
var roomnumber2= localStorage.getItem("room_number")
var username2= localStorage.getItem("user_name")
function logout(){
    window.location="index.html"
  }
function send(){
  msg=document.getElementById("input").value
  myDB.ref("/"+roomnumber2).push({
    "user_name":username2,
    "message": msg,
    "likes": likes
  });
}
function getData(){
  myDB.ref("/"+roomnumber2).on('value',function(data){
    console.log(data.key , data.val());
    row=""
    var object = data.val();
       for(properties in object){
       if(properties!="purpose"){
        console.log(properties)
        row+=` <div>
        <h3 id="user_name">${object[properties]["user_name"]}
            <img id="tick"src="tick.png">
        </h3>
        <br>
        <p id="message">${object[properties]["message"]}</p>
        <button id="${properties}" class="btn btn-warning" onclick="updateLike(${properties})">Likes: <span class="fa fa-thumbs-up"></span><span> ${object[properties]["likes"]}</span></button>
    </div><hr>`
       }
   }
   document.getElementById("messages").innerHTML=row;
    });
}
getData();
function updateLike(id){
console.log(id)
document.getElementById(id).lastChild.textContent+=1
}
