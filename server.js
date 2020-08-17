const express=require("express");
const cors=require("cors");
const app=express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.post("/formsubmit",(req,res)=>{


    console.log(req.body);

    res.send("hi there ,I am from server");


})

// run npm install before the server starts
//node server.js

app.listen("4000",()=>{

    console.log("Server Started");
})