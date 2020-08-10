/// a callback is some function which is passed to another function as an argument 

function foo(data)
{

    console.log("callback",data)

}


function bar(fn)
{
fn("hello world");
}

//bar(foo); // we always pass function reference as an argument

// there are two things

//1-function reference  2-other is the function call

// there are two types of callbacks
//1-Synchronous callbacks
//2-Asynchronous callbacks

// Why in the first place we need a synchrnous callback?

// an example for synchronous callback

for (let i=0;i<10;i++)
{
///

}


// with js we also have a forEach loop
// this forEach loop works only with arrays


// synchronous callback
let arr=[1,2,3,"foo","bar","baaz"];


// this is function declar

function myForEach(arr,cb)
{


    cb(arr);




}


function callback(data)
{


    for(let i=0;i<data.length;i++)
    {

        console.log("from my foreach",data[i]);
    }


}


myForEach(arr,callback);


// asynchronous callbacks 

// setTimeout is asynchronous 

console.log(moment().format("YYYY-MM-DD HH:mm:ss"))

document.getElementById("date").innerText=moment().format("YYYY-MM-DD HH:mm:ss");

// additionally after every 10 second