const express= require("express");
const userRoute= express.Router();
require("dotenv").config();
const jwt= require("jsonwebtoken");
const bcrypt= require("bcrypt");
const redis= require("redis");
const {Usermodel} = require("../models/usermodel");


const client = redis.createClient({
    url:`redis://default:${process.env.pass}@redis-19330.c212.ap-south-1-1.ec2.cloud.redislabs.com:19330`
});

client.on("error",(err)=>console.log(err,"Error in Redis"));
client.on("ready",()=>{
    console.log("connected to redis")
});
client.connect();
userRoute.post("/signup", async(req,res)=>{
    const {name,email,pass}= req.body;
    bcrypt.hash(pass,6, async (err,hash)=>{
        const user=new Usermodel({
            name,
            email,
            pass:hash
        });
        await user.save();
        res.send("signup successful")
    })
});

userRoute.post("/login", async (req,res)=>{
    const {email,pass}= req.body;
    const user= await Usermodel.findOne({email});
    if(!user){
        res.send("signup frist")
    }
    const hashpass= user?.pass;
    bcrypt.compare(pass,hashpass, async (err,result)=>{
        if(result){
            const token= jwt.sign({userID:user._id},"SECRET",{expiresIn:"1h"});
            client.SET("user_token",token);
            client.EXPIRE("user_token",3600);
            res.send({msg:"login successful", token});
        }
    })
});

userRoute.get("/logout", async (req,res)=>{
    const token= await client.GET("user_token");
    await client.RPUSH("blacklist",token);
    res.send("User Logged Out Successfully")
});

module.exports={
    userRoute
}

