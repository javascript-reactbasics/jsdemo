var firebaseConfig = {
    apiKey: "AIzaSyCTRX43XkP4aY41QE-qqZTnTq3SttlU_S0",
    authDomain: "jsbasics-9a80b.firebaseapp.com",
    databaseURL: "https://jsbasics-9a80b.firebaseio.com",
    projectId: "jsbasics-9a80b",
    storageBucket: "jsbasics-9a80b.appspot.com",
    messagingSenderId: "999931698174",
    appId: "1:999931698174:web:35efdab9d59d510b6b3eaf",
    measurementId: "G-8BHL9K068J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database=firebase.database(); // getting reference for firebase database



  function sendData()
  {


    const value=document.getElementById("input").value;


//calling firebase function to store the data

function random()
{
   return  Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
}

const reference=database.ref("users"+random()); // creating collection for storing your data

reference.set({
     name:value,
     location:"New York",
     age:27,
     hobbies:["cooking","singing"]
}); // saving it to the database


  }


  function getData() {

   let ref= database.ref("/");

   ref.on("child_added",function(data){

    console.log( data.val());



    const  val="<tr><td>"+ data.val().name +"</td></tr>";

    document.getElementById("data").innerText=val;

    // try finding 




   })




  }

  getData();