/// Arrow functions

//function declarations
function foo(args)
{
console.log(this);
}

foo("2"); //function call


let bar=function()
{
console.log("I am from function expression");

}

bar();

//Arrow function
// structure of an arrow function
()=>{


}

let baz=()=>{

    console.log(this);

    console.log("I am from arrow function");
}


// there is a difference between them on how they manage this key word inside them

baz();


// the
setTimeout(function(){
console.log("I a form set timeout");
 
},1000)

//Arrow function 

setTimeout(()=>{
    console.log("I a form set timeout");
     
    },1000)
    

  // jquery   



