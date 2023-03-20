const express= require("express");
const app= express();
const http = require("http");
const server= http.createServer(app);
const socketio= require("socket.io");
const io= socketio(server);
require("dotenv").config();



io.on("connection",(socket)=>{
    console.log("one user joined");

    
})


server.listen(process.env.port,()=>{
    console.log("server is running on port "+process.env.port)
})