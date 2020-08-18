let obj1={name:"John"};

let obj2=JSON.parse(JSON.stringify(obj1));

/// Object.assign


let obj3=Object.assign({},obj1);

//console.log(obj3==obj1);

obj3.location="kansas";

//console.log(obj1);

//For arrays

let arr=[1,2,3,4];


let arr2=Object.assign({},arr);
//console.log(arr2);


//Objec.keys();


let obj4={

  name:"Logan",
  location:"Ny",
  age:"23",
  hobbies:["singing","cooking"]

}

//console.log(Object.keys(obj4)); // will return an array of all they keys of an object




function person(name,age)
{

    this.name=name;
    this.age=age;

}


person.prototype.getAge=function()
{

    return this.age;
}


person.prototype.getName=function()
{

    return this.name;
}

const person1=new person("logan",23);


person1.getName=function()
{
    return this.name;
}





//console.dir(person1);


const person2 =new person("john",24);

//console.log("The age",person2.getName());



// Object.values();

//console.log(Object.values(person2));

/// Object.entries();
//console.log(Object.entries(person2));

// Object.fromEntries();

let data=[["key",1],["name","John"]];
//console.log(Object.fromEntries(data));


//Array Functions

//slice and splice

let _data=[1,2,3,4,5,6,7,8,9,10];

// slice doesnt modifies the original array
//console.log(_data.slice(0,3)); // it will return part of array from 0 to 3 (3 is not included)

//console.log(_data);

//splice modifies the original array

console.log(_data.splice(0,3));
console.log(_data);



//
console.log(_data.length);

// pop method removes the last element of the array and returns that element

console.log(_data.pop());
console.log(_data.push(2000)); //pushes an element at the end of an array
console.log(_data);

// pushing at the starting of an arrays

console.log(_data.unshift(1000)); // it returns the new length of array

console.log(_data);


/// BAsic functions of js object and array 


// forEach loop



let array=[1,2,3,4];


for(let i=0;i<array.length;i++)
{

    console.log(array[i]);
}


array.forEach(function(ele,index){


console.log("element",ele);

})

