const express= require("express");
const app=express();
const redis= require("redis")
require("dotenv").config();
const {connection} = require("./config/db");
const {Usermodel}= require("./models/usermodel");
const {userRoute} = require("./routes/userroute")
const jwt= require("jsonwebtoken");
const bcrypt= require("bcrypt");
app.use(express.json());
const {json} = require("express");
const { authentication } = require("./middleware/authentication");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const winston= require("winston");
const Expresswinston= require("express-winston");
require("winston-mongodb");


app.use(Expresswinston.logger({
    statusLevels:true,
    transports:[
        new winston.transports.MongoDB({
            level:"info",
            db:process.env.url
        }),
        new winston.transports.File({
            level:"silly",
            filename:"alllogs.json",
            json:true
        })
    ]
}));


const client = redis.createClient({
    url:`redis://default:${process.env.pass}@redis-19330.c212.ap-south-1-1.ec2.cloud.redislabs.com:19330`
});

client.on("error",(err)=>console.log(err,"Error in Redis"));
client.on("ready",()=>{
    console.log("connected to redis")
});



app.get("/",authentication, (req,res)=>{
    res.send("home page")
});

app.use(userRoute)

app.get("/weather/:city", async (req,res)=>{
   const {city}=req.params;
   console.log(city);
   const result= await client.EXISTS(city);
   console.log(result);
   let data2=[]
    if(result){
        let data1= await client.GET(city);
        res.send(data1)
    }else{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=167ac9aec48e5f70c1477484811754a0`)
        .then((response) => response.json())
        .then((data) => {res.send(data);
            data2=data
        });
        console.log(data2);
    } 
   

  
})





app.listen(process.env.port, async ()=>{
    try {
        await connection;
        await client.connect();
        console.log("connected to DB")
    } catch (err) {
        console.log("unable to connect to DB");
        console.log(err)
    }
    console.log("server is running on port "+process.env.port)
})