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
  document.getElementById("welcome").innerHTML="Welocme "+addUser+" !";