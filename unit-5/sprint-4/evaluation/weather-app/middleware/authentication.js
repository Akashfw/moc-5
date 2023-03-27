const jwt = require("jsonwebtoken");
require("dotenv").config();
const redis= require("redis");
const client = redis.createClient({
    url:`redis://default:${process.env.pass}@redis-19330.c212.ap-south-1-1.ec2.cloud.redislabs.com:19330`
});

client.on("error",(err)=>console.log(err,"Error in Redis"));
client.on("ready",()=>{
    console.log("connected to redis")
});
client.connect();
const authentication = async (req,res,next)=>{
    const token= await client.GET("user_token");
    if(!token){
        res.send("login again")
    }

    const blacklistdata= await client.LRANGE("blacklist",0,-1);
    if(blacklistdata.includes(token)){
        return res.send("login again");
    }

    jwt.verify(token,"SECRET",(err,decode)=>{
        if(err){
            res.send("please login first")
        }else{
            next();
        }
    })
}

module.exports={
    authentication
}