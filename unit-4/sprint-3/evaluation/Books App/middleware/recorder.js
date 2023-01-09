const express = require("express");
 const recorder= express();
 recorder.use(express.json());
 const fs = require("fs");

 recorder.use((req,res,next)=>{
    if(req.method=="PATCH" && req.url=="/editbooks"){
         fs.appendFileSync("records.txt",`The document with id:${req.query.id} has been updated`,(err)=>{
             if(err){
                 res.send(err)
             }else{
                 next()
             }
         })
    }else if(req.method=="DELETE" && req.url=="/deletebooks"){
        fs.appendFileSync("records.txt",`The document with id:${req.query.id} has been deleted`,(err)=>{
            if(err){
                res.send(err)
            }else{
                next()
            }
        })
    }else{
        next()
    }
});


module.exports={
    recorder
}