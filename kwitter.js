function login(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("UserId",username);
    window.location="kwitter_room.html";
}