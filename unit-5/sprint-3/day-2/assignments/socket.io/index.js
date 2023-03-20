const { Socket } = require("engine.io");
const express= require("express");
const http= require("http");
const {Server} = require("socket.io");

const app= express();
const httpserver= http.createServer(app)


app.get("/",(req,res)=>{
    res.send("home page")
    })

app.get("/about",(req,res)=>{
    res.send("about....")
    })   

httpserver.listen(8080)

const io= new Server(httpserver)
let count=0;
let seat=10;
io.on("connection",(socket)=>{
    console.log("client connected")
    count++
    socket.emit("message","welcome to web socket server");
    
    socket.emit("online",count)
    socket.broadcast.emit("info","we have new user in town")
    socket.on("disconnect",()=>{
        count--;
        socket.broadcast.emit("online",count);
        socket.broadcast.emit("announcement",`we have only ${seat-count} seats left`)
        socket.broadcast.emit("announcement",`we have only ${seat-count} seats left`)
    })

    socket.emit("announcement",`we have only ${seat-count} seats left`)
})

























