const express= require("express");
const app= express();
app.use(express.text());
app.use(express.json());
const redis= require("redis");
require("dotenv").config();


// const client = redis.createClient({
//     password: process.env.pass,
//     socket: {
//       host: "redis-14279.c264.ap-south-1-1.ec2.cloud.redislabs.com",
//       port: 14279,
//     },
//   });

const client = redis.createClient({
  url:`redis://default:${process.env.pass}@redis-19330.c212.ap-south-1-1.ec2.cloud.redislabs.com:19330`
})

  client.on("error", (err) => console.log(err, "ERROR in REDIS"));

   client.on("ready",()=>{
       console.log("connected to redis")
   })

app.post("/message/:key", async (req, res) => {
    const { key } = req.params;
    const payload = req.body;
    const response = await client.EXISTS(key);
    if (response) {
      return res
        .status(404)
        .send("This key Already Present,choose an unique Key");
    }
    if (payload === " ") {
      return res
      .status(404).send("Enter a Message");
    }
    await client.SET(key, payload);
    await client.EXPIRE(key, 60);
    const ttl= await client.TTL(key);
    res.send("Success! " + `${key} : ${payload} will expire in ${ttl} seconds`);
  });

  app.get("/message/:key",async(req,res)=>{
    const {key}= req.params;
    const ans= await client.GET(key);

    res.send(ans);
  })
  
  app.listen(process.env.port, async () => {
      await client.connect();
      console.log("Listening at  "+`${process.env.port}`);
    });

