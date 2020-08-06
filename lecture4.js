//Lecture 4 // 

// let and cost ,scopes in js and hoisting // 

// 

var myvarible="anvalue"; // var is used to create variable in js

// till es5 var 

// es6 
// there were two more keywords were introduced
//let and const 
let num=23;

const num2=45;


console.log("Printing let",num);

console.log("printing const",num2);


// difference between let and const

//num2=56; /// and you cant assign a new value to the variable declared with the const 
console.log("printing const",num2);


/// now lets talk about scopes
// there are two types of scope in js

// 1-Functional scope 2-Block Level scope 
// var ---> functional scope 
// let and const have block scope 



/// functional scope 

function name()
{

    var myelement=34;
}

for (var i=0;i<100;i++)
{
    var element=89;
    let element2=78;
}




console.log("The element",element);/// you will not be able to get it 
//console.log("The element with let",element2);/// you will not be able to get it 

/*
// any structure with   these parenthesis 
{

    


}

forms a block 

// including a function //a loop //if ///else // or simple block 


2- What if those blocks are for function 

//In that case two things gonna happen

// variable declared with var keyword wont have access outside the scope as it will be called a functional scope 


function hello(){


}


*/



function Data()
{


//var v1=2;


let v2=3;

const v3=4;

}


// console.log(v2,v3);

if(false)
{
    var num1=55;
    let a1=99;
    const a2=777;
}

else{
    //var yu=888;
}

{
var num22=999

}

for(var i=0;i<2;i++)
{
   // var num23=77
}


///console.log(num1,num22,num23,yu,a2);

// what is a functional scope?

// The context at which a variable is declared globally or accomapnied by a function 

 const b1=90; // if let and const are not confined inside curly braces they can also act as global




function checkvar()
{

   /// console.log("from function",b1);
}

checkvar();


{
    //console.log("form scope",b1);
}



//

for(var i=0;i<10;i++)
{
    //console.log("from for loop",b1);
}


// second  difference 


let   g1=99;


console.log(g1);



  g1=78; // re asignment

console.log(g1);


// so with var you can redecalare a variable 
// let h1---->declaring
// h1=99----->assignment
// let h1=99-----> declaration and assignment both in the same line

// let h1=88 ;/// redecalring and reassignment;  let h1 ; 

// h1=76// reassignment 


// With let and const you cant redeclare variables 
// but with var you can 


// let and const
// you can reassign variable decalred with let but you cant reassign a variable declared with const 

/// --->>>  

/// functon




