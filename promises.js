//callbacks 

//es6 or es2015 came up with promises

//promises have threes stages
// fulfiiled 
// rejected -->always ends up in error
//pending ----->mid state 
//after pending state its either be fulfilled or rejected


///promise

function myGift(goodGRades)
{

 return new Promise((resolve,reject)=>{

if(goodGRades==1)
{
  resolve("You get your Gift Tadaa !!!!")
}


else if(goodGRades==0){


  reject("Sorry ,you didn't get your gift !!")
}


  })

}





myGift(0).then((data)=>{
console.log(data);

}).catch(err=>{
  console.log(err);
})
