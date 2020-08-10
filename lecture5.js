/// global objects

// window object as a global

let myglobal = 77; // that variable will be available as global vriable too

// you cant have a global avraible declared with let or const
console.log(window.myglobal);

function hhello() {}

function hhello2() {}

///objects //arrrays /// json

// json vs js objects ----->there is a difference in between them

/// How we create an object in javascript

///1-Using function constructor

function Person(n, l, a) {
  // arguments
  this.name = n;
  this.location = l;
  this.age = a;
}

// we want to create an object for the person

//

// js object
let obj = new Person("john", "New york", 22); // object of Person // parameter

console.log(obj);

/// arrays

let ar = [1, "logan", true, undefined, null];
//console.log(ar);

// json

// there is a difference between json and js objects

// json always have a string key and js object may or may not have it

// json
let json = {
  name: "John",
  location: "PA",
  age: "20",
};
// js object
let json2 = {
  name: "John",
  location: "PA",
  age: "20",
};
