var firebaseConfig = {
    apiKey: "AIzaSyA96CvbLShrD8BM663_0jsHPr2WjDq1Gto",
    authDomain: "let-s-chat-project-22fa6.firebaseapp.com",
    databaseURL: "https://let-s-chat-project-22fa6-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-project-22fa6",
    storageBucket: "let-s-chat-project-22fa6.appspot.com",
    messagingSenderId: "972711889025",
    appId: "1:972711889025:web:ada77bd721bea43f00e580"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  addUser=localStorage.getItem("UserId");
  document.getElementById("welcome").innerHTML="Welcome "+addUser+" !";
  function add_room(){
    roomname=document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
          purpose:"adding_room_name"
    });
    localStorage.setItem("new_room",roomname);
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot)
     {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room_name"+Room_names);
    row="<div class='room_name' id='"+Room_names+"' onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirect(name){
    console.log("clicked room= "+name);
    localStorage.setItem("new_room",name);
    window.location="kwitter_page.html";
}