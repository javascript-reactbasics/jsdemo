const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.post("/submittheform", (req, res) => {
  console.log(
    "Hello - This is the information which was sent to the server ",
    req.body
  );

  /*
for(let i=0;i<100000;i++)
{
  console.log(i);
}*/

let id=9999;
//res.send({id:id})
  res.send({id});
});




///another post route


app.post("/gettingData",(req,res)=>{

  console.log(typeof req.body.id);

let array=[

{
  username:"Logan",
  id:9999,
  location:"New jersey"
},
{
  username:"John",
  id:9998,
  location:"New York"
},


{
  username:"Matt",
  id:9991,
  location:"New orleans"
}



]




let data=array.find(ele=>ele.id==Number(req.body.id));
console.log(data);

res.json({data:data});






})





app.post("/gettingUserCollege",(req,res)=>{

  

let array=[

{
  username:"Logan",
  college:"Bekley",
},
{
  username:"John",
  college:"Caltech",
},


{
  username:"Matt",
  college:"Harward",
},



]




let data=array.find(ele=>ele.username==req.body.username);
console.log(data);

res.json({data:data});






})


// run npm install before the server starts
//node server.js
app.get("/",(req,res)=>{
let message="hi there";
  res.json({message})
})

app.listen("4000", () => {
  console.log("Server Started");
});
