var firebaseConfig = {
  apiKey: "AIzaSyCTRX43XkP4aY41QE-qqZTnTq3SttlU_S0",
  authDomain: "jsbasics-9a80b.firebaseapp.com",
  databaseURL: "https://jsbasics-9a80b.firebaseio.com",
  projectId: "jsbasics-9a80b",
  storageBucket: "jsbasics-9a80b.appspot.com",
  messagingSenderId: "999931698174",
  appId: "1:999931698174:web:35efdab9d59d510b6b3eaf",
  measurementId: "G-8BHL9K068J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// getting reference for firebase database
const database = firebase.database();

function sendData() {
  const value = document.getElementById("input").value;
  const locationValue = document.getElementById("location").value;
  const ageValue = document.getElementById("age").value;

  //calling firebase function to store the data
  function random() {
    return Math.floor(Math.random() * 100); // returns a random integer from 0 to 99, round down to nearest whole number
  }

  const reference = database.ref("users" + random()); // creating collection for storing your data

  reference.set({
    name: value,
    location: locationValue,
    age: ageValue,
    hobbies: ["cooking", "singing"],
  }); // saving it to the database
}

function getData() {
  let ref = database.ref("/");

  ref.on("child_added", function (data) {
    console.log(data.val());

    const val = data.val().name; 
    const location = data.val().location;
    const age = data.val().age;
    //+ data.val().location + data.val().age;

    document.getElementById("data").innerText = val;
    document.getElementById("dataLocation").innerText = location;
    document.getElementById("dataAge").innerText = age;


    // try finding
  });
}

getData();
