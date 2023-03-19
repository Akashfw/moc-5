const express= require("express");
const socketio= require("socket.io");
const http= require("http");
const app= express();
const { Socket } = require("dgram");
const server = http.createServer(app);
const io= socketio(server);
Socket.on("UserVote",(msg)=>{
    console.log(msg)
})


const PORT= 8080
server.listen(PORT,()=>{console.log(`server is running on ${PORT} port`)})