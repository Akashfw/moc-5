const express = require("express");
 const validator= express();
 validator.use(express.json());

 validator.use((req,res,next)=>{
     if(req.method=="POST" && req.url=="/addbooks"){
         let data=req.body;
         let title=data.title;
         let price=data.price;
         let genre= data.genre;
         let author= data.author;
         if(title==""||price==undefined||genre==""||author==""){
             res.send({"err": "All the fields are not there"})
         }else{
             next()
         }   
     }else{
         next()
     }
 });

 module.exports={
     validator
 }

 