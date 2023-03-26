const express= require("express");
const winston = require("winston");
const expresswinston= require("express-winston");
const app = express();
 require("winston-mongodb");
 require("dotenv").config();

 app.use(expresswinston.logger({
    statusLevels:true,
    transports:[
        new winston.transports.File({
            level:"silly",
            json:true,
            filename:"allLogs.json"
        }),
        new winston.transports.MongoDB({
            level:"info",
            db: process.env.url
        })
    ]
 }));

app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/abc",(req,res)=>{
    res.send(pagal)
})
 app.listen(process.env.port,()=>{
    console.log("listining on port "+process.env.port)
 })