/// a callback is some function which is passed to another function as an argument

function foo(data) {
  console.log("callback", data);
}

function bar(fn) {
  fn("hello world");
}

bar(foo); // we always pass function reference as an argument

// there are two things

//1-function reference  2-other is the function call

// there are two types of callbacks
//1-Synchronous callbacks
//2-Asynchronous callbacks

// Why in the first place we need a synchrnous callback?

// an example for synchronous callback

for (let i = 0; i < 10; i++) {
  ///
}

// with js we also have a forEach loop
// this forEach loop works only with arrays

// synchronous callback
let arr = [1, 2, 3, "foo", "bar", "baaz"];

// this is function declar

function myForEach(arr, cb) {
  cb(arr);
}

function callback(data) {
  for (let i = 0; i < data.length; i++) {
    console.log("from my foreach", data[i]);
  }
}

myForEach(arr, callback);

// asynchronous callbacks

// setTimeout is asynchronous

console.log(moment().format("YYYY-MM-DD HH:mm:ss"));

document.getElementById("date").innerText = moment().format(
  "YYYY-MM-DD HH:mm:ss"
);

setInterval(function () {
  document.getElementById("date").innerText = moment().format(
    "YYYY-MM-DD HH:mm:ss"
  );
}, 1000);

let goTime = moment();
console.log("Today's date is: ", goTime.format("DD"));
console.log(
  "Today is ",
  goTime.format("M") + "M",
  goTime.format("D") + "D",
  goTime.format("YYYY") + "Y"
);

// var launch = moment('2020-08-20');
// var current = moment();
// var diff = launch-current;
// console.log(diff);

// var days = launch.diff(current, 'days');
// console.log(days,'days');
// var hours = launch.diff(current,'hours');
// console.log(hours, 'hours');
// var minutes = launch.diff(current, 'minutes');
// console.log(minutes,'minutes');
// var seconds = launch.diff(current,'seconds');
// console.log(seconds,'seconds');

// setInterval(function(){
//     //var seconds = launch.diff(current,'seconds');
//     console.log(seconds,'seconds');
// },1000);


// additionally after every 10 second

// Set the date we're counting down to
var launch = new Date("August 20, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var current = new Date().getTime();

  // Find the distance between now an the count down date
  var tMinus = launch - current;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(tMinus / (1000 * 60 * 60 * 24));
  var hours = Math.floor((tMinus % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((tMinus % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((tMinus % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (tMinus < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
