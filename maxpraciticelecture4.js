var myVariable = "Hello";
console.log(myVariable);

// all variables use functional scoping - meaning when they get declared they have global usage, unless they are declared inside a function, in which case they can only be used inside the function, and will not exist outside of the function

let elem1 = "letVariable";
const elemConst = "Const Element";

//Both const and let use block scoping and are limited by any set of curly braces they apply in.

function hello() {
  var functionScoping = "This is inside a block";
  let bs1 = "this is declared inside a function";
  const bs2 = "this is a const declared inside a function";
}

hello();

//All of the below do not exist since they are inside a function
//console.log(functionScoping);
//console.log(bs1);
//console.log(bs2);

if (true) {
  var weMadeIt = "This is a VAR inside an if statment";
  let bs1 = "This is LET declared inside an if statement";
  const bs2 = "This is CONST declared inside an if statement";
}

//Only the var should be viewable when it is sent to the console, it is function scoping and let and const and block scoping elements

console.log(weMadeIt);
// console.log(bs1);
// console.log(bs2);

let bs1 = "This is LET declared globally";
const bs2 = "This is CONST declared globally";
var functionScoping = "This is VAR declared globally";

console.log(bs1);
console.log(bs2);
console.log(functionScoping);

//Redeclaration of VAR, LET, and CONST
// var Redeclaration = "We can redeclare and reassign this variable since it is a var";
// console.log(Redeclaration);
// const Redeclaration = "This cannot be redeclared or reassigned";
// console.log(Redeclaration);
// var Redeclaration = "This cannot be redeclared but it can be reassigned";
// console.log(Redeclaration);

let g1 = 99;

console.log(g1);

g1 = 78; // re asignment

// let g1 =100;
console.log(g1);

var g3 = 100;
console.log(g3);

var g3 = 200;
console.log(g3);

var strPractice = "Hello";
console.log(strPractice);

var strPractice = "This is my new String";
console.log(strPractice);

let prLet = "Hello";
console.log(prLet);

//Let can be redeclared, but it can be reassigned
// let prLet = "New String";
// console.log(prLet)

prLet = "This is a new String";
console.log(prLet);

const cPra = "This is a CONST";
console.log(cPra);

// cPra = "This cannot be reassigned even";

//Changing Types in JavaScript, Since Javascript is not strongly typed we can change the type without explicit declarations
// We would like to change the type of this variable, how do we do it

var changeType = 10;
console.log("Var TYPE", typeof changeType);

var changeType = "String";
console.log("Var TYPE", typeof changeType);

let lPractice = "YES";
console.log("CONST Type ", typeof lPractice);

lPractice = 10;
console.log("CONST Type change declaration", typeof lPractice);
